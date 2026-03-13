import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { spPublish } from "@/lib/signalpost";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { title, content, excerpt, socialSnippet } = await req.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required." },
        { status: 400 }
      );
    }

    const slug = slugify(title);

    const { data, error } = await supabase
      .from("blog_posts")
      .upsert(
        {
          slug,
          title,
          content,
          excerpt: excerpt || "",
          published: true,
          published_at: new Date().toISOString(),
        },
        { onConflict: "slug" }
      )
      .select()
      .single();

    if (error) {
      console.error("Supabase publish error:", error);
      return NextResponse.json(
        { error: "Failed to publish.", detail: error.message },
        { status: 500 }
      );
    }

    const blogUrl = `https://solentsignal.com/blog/${data.slug}`;

    // Auto-publish to LinkedIn via SignalPost if socialSnippet provided (non-blocking)
    // SignalPost handles posting, logging, and Mission Control notification
    if (socialSnippet) {
      spPublish("linkedin", socialSnippet, blogUrl, "blog-auto").catch(
        () => {}
      );
    }

    return NextResponse.json({
      success: true,
      slug: data.slug,
      url: `/blog/${data.slug}`,
      socialQueued: !!socialSnippet,
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("/api/admin/publish-blog error:", detail);
    return NextResponse.json(
      { error: "Publish failed.", detail },
      { status: 500 }
    );
  }
}
