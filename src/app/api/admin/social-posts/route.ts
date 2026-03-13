import { NextRequest, NextResponse } from "next/server";
import { spGetPosts, spPublish } from "@/lib/signalpost";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await spGetPosts();
    return NextResponse.json({ posts: data.posts || [] });
  } catch {
    return NextResponse.json({ posts: [] });
  }
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
