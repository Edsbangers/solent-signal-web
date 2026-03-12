import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { notifyMC } from "@/lib/missionControl";

export const dynamic = "force-dynamic";

// Agent-facing social posting API (bearer auth)
export async function POST(req: NextRequest) {
  // Validate bearer token
  const authHeader = req.headers.get("authorization");
  const expectedKey = process.env.NOTIFY_API_KEY;
  if (!expectedKey || authHeader !== `Bearer ${expectedKey}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { platform, content, linkUrl, brand } = await req.json();

    if (!platform || !content) {
      return NextResponse.json(
        { error: "platform and content are required." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Get token for platform
    const { data: tokenRow } = await supabase
      .from("social_tokens")
      .select("access_token, expires_at")
      .eq("platform", platform)
      .single();

    if (!tokenRow?.access_token) {
      return NextResponse.json(
        { error: `No token for platform: ${platform}. Connect it first.` },
        { status: 400 }
      );
    }

    let result: { success: boolean; postUrl?: string; postId?: string; error?: string };

    if (platform === "linkedin") {
      result = await postToLinkedIn(tokenRow.access_token, content, linkUrl);
    } else {
      return NextResponse.json(
        { error: `Platform ${platform} not yet supported. Currently: linkedin.` },
        { status: 400 }
      );
    }

    // Log to social_posts table
    await supabase.from("social_posts").insert({
      platform,
      content,
      link_url: linkUrl || null,
      status: result.success ? "posted" : "failed",
      post_url: result.postUrl || null,
      post_id: result.postId || null,
      error: result.error || null,
      brand: brand || "solent-signal",
      posted_at: result.success ? new Date().toISOString() : null,
    });

    // Notify Mission Control
    if (result.success) {
      await notifyMC("runr", "social_posted", `Posted to ${platform}: ${content.slice(0, 60)}...`, {
        platform,
        postUrl: result.postUrl,
        brand: brand || "solent-signal",
      });
    } else {
      await notifyMC("runr", "error", `Failed to post to ${platform}: ${result.error}`, {
        platform,
        error: result.error,
      });
    }

    return NextResponse.json(result);
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("/api/social/post error:", detail);
    return NextResponse.json(
      { error: "Social post failed.", detail },
      { status: 500 }
    );
  }
}

async function postToLinkedIn(
  accessToken: string,
  content: string,
  linkUrl?: string
): Promise<{ success: boolean; postUrl?: string; postId?: string; error?: string }> {
  const userRes = await fetch("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!userRes.ok) {
    return { success: false, error: `Auth failed (${userRes.status}). Token may have expired.` };
  }

  const user = (await userRes.json()) as { sub: string };
  const authorUrn = `urn:li:person:${user.sub}`;

  const postBody: Record<string, unknown> = {
    author: authorUrn,
    commentary: content,
    visibility: "PUBLIC",
    distribution: {
      feedDistribution: "MAIN_FEED",
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: "PUBLISHED",
  };

  if (linkUrl) {
    postBody.content = {
      article: {
        source: linkUrl,
        title: content.slice(0, 100),
      },
    };
  }

  const postRes = await fetch("https://api.linkedin.com/rest/posts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "LinkedIn-Version": "202401",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify(postBody),
  });

  if (!postRes.ok) {
    const errText = await postRes.text();
    return { success: false, error: `Post failed (${postRes.status}): ${errText}` };
  }

  const postUrn = postRes.headers.get("x-restli-id") ?? "";
  return {
    success: true,
    postId: postUrn,
    postUrl: `https://www.linkedin.com/feed/update/${postUrn}`,
  };
}
