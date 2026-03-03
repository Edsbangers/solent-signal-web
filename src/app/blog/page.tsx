import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

export const metadata: Metadata = {
  title: "Blog — GEO & AI Search Insights",
  description:
    "GEO-optimised articles on AI search visibility, local SEO, and digital authority for Portsmouth and Solent businesses.",
};

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  published_at: string;
}

export const revalidate = 60;

export default async function BlogListingPage() {
  let posts: BlogPost[] = [];
  let fetchError = "";

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, slug, title, excerpt, published_at")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(50);

    if (error) fetchError = error.message;
    else posts = data ?? [];
  } catch (e) {
    fetchError = e instanceof Error ? e.message : "Unknown error";
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Blog</h1>
      <p className="mb-12" style={{ color: "#94a3b8" }}>
        GEO insights, AI search strategies, and digital authority tips for Solent businesses.
      </p>

      {fetchError && (
        <div
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.25)",
            borderRadius: "10px",
            padding: "16px",
            color: "#fca5a5",
            marginBottom: "24px",
            fontSize: "14px",
          }}
        >
          Unable to load posts. Please try again later.
        </div>
      )}

      {posts.length === 0 && !fetchError && (
        <p style={{ color: "#475569" }}>No posts yet. Check back soon.</p>
      )}

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl p-6 transition-all hover:border-cyan-800"
            style={{
              background: "rgba(13,20,36,0.8)",
              border: "1px solid #1e293b",
              textDecoration: "none",
            }}
          >
            <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#94a3b8" }}>
              {post.excerpt}
            </p>
            <time className="text-xs" style={{ color: "#475569" }}>
              {new Date(post.published_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </Link>
        ))}
      </div>
    </main>
  );
}
