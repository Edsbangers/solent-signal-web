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

  const url = `https://solentsignal.com/blog/${slug}`;

  return {
    title: data.title,
    description: data.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: data.title,
      description: data.excerpt,
      url,
      type: "article",
      siteName: "Solent Signal",
    },
    twitter: {
      card: "summary",
      title: data.title,
      description: data.excerpt,
    },
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: typedPost.title,
    description: typedPost.excerpt,
    datePublished: typedPost.published_at,
    author: {
      "@type": "Person",
      name: "Jason Misters",
      jobTitle: "Founder & IRCA Registered Principal Auditor",
      url: "https://solentsignal.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Solent Signal",
      url: "https://solentsignal.com",
    },
    mainEntityOfPage: `https://solentsignal.com/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://solentsignal.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://solentsignal.com/blog" },
      { "@type": "ListItem", position: 3, name: typedPost.title },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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

        {/* Mid-article inline CTA */}
        <div
          className="rounded-xl p-5 my-10"
          style={{
            background: "rgba(34,197,94,0.05)",
            border: "1px solid rgba(34,197,94,0.15)",
            borderLeft: "3px solid #22c55e",
          }}
        >
          <p className="text-sm font-semibold text-white mb-1">
            Want to see how AI finds your business?
          </p>
          <p className="text-xs mb-3" style={{ color: "#94a3b8" }}>
            We&apos;ll check ChatGPT, Google AI &amp; voice search for your business — free, no obligation.
          </p>
          <Link
            href="/get-started"
            className="inline-block px-5 py-2 rounded-full text-xs font-bold transition-all hover:opacity-90"
            style={{ background: "#22c55e", color: "#000" }}
          >
            Get Your Free Audit →
          </Link>
        </div>
      </article>

      {/* Bottom CTA */}
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
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/get-started"
            className="inline-block px-8 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90"
            style={{ background: "#22c55e", color: "#000" }}
          >
            Get Your Free Audit
          </Link>
          <a
            href="mailto:hello@solentsignal.com?subject=15-Min Call Request"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold transition-all hover:text-white"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#e2e8f0",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Book a 15-Min Call
          </a>
        </div>
      </div>
    </main>
  );
}
