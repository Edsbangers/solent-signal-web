import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { spGetPosts, spPublish } from "@/lib/signalpost";

export const dynamic = "force-dynamic";

function supa() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export async function GET() {
  // Merge Supabase social_posts (drafts/queue) with SignalPost history (posted).
  const merged: Record<string, unknown>[] = [];

  try {
    const { data, error } = await supa()
      .from("social_posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) merged.push(...data);
  } catch {
    // Table may not exist yet — fall through to SignalPost only.
  }

  try {
    const sp = await spGetPosts();
    if (sp?.posts?.length) {
      const existingIds = new Set(merged.map((p) => (p as { id: string }).id));
      for (const p of sp.posts) {
        if (!existingIds.has(p.id)) merged.push(p);
      }
    }
  } catch {
    // SignalPost unreachable — silent.
  }

  return NextResponse.json({ posts: merged });
}

// "Post Now" action — publish via SignalPost
export async function PATCH(req: NextRequest) {
  const { platform, content, linkUrl } = await req.json();

  if (!platform || !content) {
    return NextResponse.json(
      { error: "platform and content required" },
      { status: 400 }
    );
  }

  try {
    const result = await spPublish(platform, content, linkUrl, "admin");
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Failed to post via SignalPost" },
      { status: 500 }
    );
  }
}
