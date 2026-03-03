import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  published_at: string;
}

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = getSupabase();
  const { data } = await supabase
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!data) return { title: "Post Not Found" };

  return {
    title: data.title,
    description: data.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = getSupabase();

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !post) notFound();

  const typedPost = post as BlogPost;

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="text-sm font-medium mb-8 inline-block transition-opacity hover:opacity-80"
        style={{ color: "#06b6d4", textDecoration: "none" }}
      >
        ← Back to Blog
      </Link>

      <article>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          {typedPost.title}
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <time className="text-sm" style={{ color: "#475569" }}>
            {new Date(typedPost.published_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span className="text-sm" style={{ color: "#475569" }}>·</span>
          <span className="text-sm" style={{ color: "#475569" }}>
            By Jason Misters
          </span>
        </div>

        <div
          className="prose-custom"
          style={{
            color: "#cbd5e1",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
          dangerouslySetInnerHTML={{ __html: typedPost.content }}
        />
      </article>

      {/* CTA */}
      <div
        className="rounded-2xl p-8 mt-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))",
          border: "1px solid rgba(59,130,246,0.2)",
        }}
      >
        <h2 className="text-xl font-bold text-white mb-2">
          Want AI to recommend your business?
        </h2>
        <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
          Get a free AI visibility audit for your Portsmouth or Solent business.
        </p>
        <Link
          href="/get-started"
          className="inline-block px-8 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90"
          style={{ background: "#22c55e", color: "#000" }}
        >
          Get Your Free Audit
        </Link>
      </div>
    </main>
  );
}
