import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const { content, linkUrl } = await req.json();

    if (!content) {
      return NextResponse.json(
        { error: "Content is required." },
        { status: 400 }
      );
    }

    // Get LinkedIn token — check Supabase social_tokens first, fall back to env var
    let accessToken = process.env.LINKEDIN_ACCESS_TOKEN;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data: tokenRow } = await supabase
        .from("social_tokens")
        .select("access_token, expires_at")
        .eq("platform", "linkedin")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (tokenRow?.access_token) {
        accessToken = tokenRow.access_token;
      }
    }

    if (!accessToken) {
      return NextResponse.json(
        { error: "LinkedIn not connected. Visit /api/admin/linkedin-connect to authorize." },
        { status: 401 }
      );
    }

    // Get user URN
    const userRes = await fetch("https://api.linkedin.com/v2/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!userRes.ok) {
      return NextResponse.json(
        { error: `LinkedIn auth failed (${userRes.status}). Token may have expired — re-authorize at /api/admin/linkedin-connect.` },
        { status: 401 }
      );
    }

    const user = (await userRes.json()) as { sub: string };
    const authorUrn = `urn:li:person:${user.sub}`;

    // Build post body
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

    // Post to LinkedIn
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
      return NextResponse.json(
        { error: `LinkedIn post failed (${postRes.status})`, detail: errText },
        { status: 502 }
      );
    }

    const postUrn = postRes.headers.get("x-restli-id") ?? "";
    const postUrl = `https://www.linkedin.com/feed/update/${postUrn}`;

    return NextResponse.json({
      success: true,
      postId: postUrn,
      postUrl,
      platform: "linkedin",
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("/api/admin/post-linkedin error:", detail);
    return NextResponse.json(
      { error: "LinkedIn post failed.", detail },
      { status: 500 }
    );
  }
}
