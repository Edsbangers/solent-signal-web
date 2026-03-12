"use client";

import { useEffect, useState } from "react";

interface SocialPost {
  id: string;
  platform: string;
  content: string;
  link_url: string | null;
  status: string;
  post_url: string | null;
  error: string | null;
  brand: string;
  posted_at: string | null;
  created_at: string;
}

const PLATFORM_ICONS: Record<string, string> = {
  linkedin: "🔗",
  facebook: "📘",
  instagram: "📸",
  x: "𝕏",
};

const STATUS_BADGES: Record<string, { bg: string; color: string; label: string }> = {
  draft: { bg: "rgba(148,163,184,0.1)", color: "#94a3b8", label: "Draft" },
  queued: { bg: "rgba(234,179,8,0.1)", color: "#eab308", label: "Queued" },
  posted: { bg: "rgba(34,197,94,0.1)", color: "#22c55e", label: "Posted" },
  failed: { bg: "rgba(239,68,68,0.1)", color: "#ef4444", label: "Failed" },
};

export default function SocialQueuePage() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [posting, setPosting] = useState<string | null>(null);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/social-posts");
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  async function handlePostNow(post: SocialPost) {
    setPosting(post.id);
    try {
      const res = await fetch("/api/admin/post-linkedin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: post.content, linkUrl: post.link_url }),
      });

      const data = await res.json();

      // Update status in DB
      await fetch("/api/admin/social-posts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: post.id,
          status: data.success ? "posted" : "failed",
          post_url: data.postUrl || null,
          post_id: data.postId || null,
          error: data.error || null,
          posted_at: data.success ? new Date().toISOString() : null,
        }),
      });

      loadPosts();
    } catch {
      // silent
    } finally {
      setPosting(null);
    }
  }

  const filtered = filter === "all" ? posts : posts.filter((p) => p.platform === filter);

  const inputStyle = {
    padding: "6px 14px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    background: "rgba(13,20,36,0.8)",
    color: "#f1f5f9",
    fontSize: "13px",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0a0f1e", padding: "32px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Admin nav */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
          {[
            { href: "/admin/leads", label: "Leads", active: false },
            { href: "/admin/blog", label: "Blog Generator", active: false },
            { href: "/admin/social", label: "Social Queue", active: true },
          ].map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              style={{
                fontSize: "13px",
                fontWeight: 600,
                padding: "6px 16px",
                borderRadius: "8px",
                background: tab.active ? "rgba(6,182,212,0.1)" : "rgba(255,255,255,0.03)",
                color: tab.active ? "#06b6d4" : "#94a3b8",
                border: `1px solid ${tab.active ? "rgba(6,182,212,0.25)" : "#1e293b"}`,
                textDecoration: "none",
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span style={{ fontSize: "24px" }}>📱</span>
              <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: 800, margin: 0 }}>Social Queue</h1>
            </div>
            <p style={{ color: "#475569", fontSize: "13px", margin: 0 }}>
              Track and manage social media posts across platforms
            </p>
          </div>
          <a
            href="/api/admin/linkedin-connect"
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1px solid rgba(59,130,246,0.3)",
              background: "rgba(59,130,246,0.08)",
              color: "#3b82f6",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Connect LinkedIn
          </a>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
          {["all", "linkedin", "facebook", "instagram", "x"].map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              style={{
                ...inputStyle,
                cursor: "pointer",
                background: filter === p ? "rgba(6,182,212,0.1)" : "rgba(255,255,255,0.03)",
                color: filter === p ? "#06b6d4" : "#94a3b8",
                border: `1px solid ${filter === p ? "rgba(6,182,212,0.25)" : "#1e293b"}`,
              }}
            >
              {p === "all" ? "All" : `${PLATFORM_ICONS[p] || ""} ${p.charAt(0).toUpperCase() + p.slice(1)}`}
            </button>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "24px" }}>
          {(["queued", "posted", "failed", "draft"] as const).map((s) => {
            const count = posts.filter((p) => p.status === s).length;
            const badge = STATUS_BADGES[s];
            return (
              <div
                key={s}
                style={{
                  background: "rgba(13,20,36,0.8)",
                  border: "1px solid #1e293b",
                  borderRadius: "10px",
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px", fontWeight: 800, color: badge.color }}>{count}</div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {badge.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Post list */}
        {loading ? (
          <div style={{ color: "#94a3b8", textAlign: "center", padding: "48px" }}>Loading...</div>
        ) : filtered.length === 0 ? (
          <div
            style={{
              background: "rgba(13,20,36,0.8)",
              border: "1px solid #1e293b",
              borderRadius: "14px",
              padding: "48px",
              textAlign: "center",
              color: "#475569",
            }}
          >
            No social posts yet. Generate a blog post and publish to get started.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {filtered.map((post) => {
              const badge = STATUS_BADGES[post.status] || STATUS_BADGES.draft;
              return (
                <div
                  key={post.id}
                  style={{
                    background: "rgba(13,20,36,0.8)",
                    border: "1px solid #1e293b",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{PLATFORM_ICONS[post.platform] || "📱"}</span>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        color: "#e2e8f0",
                        fontSize: "13px",
                        lineHeight: 1.5,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {post.content}
                    </div>
                    <div style={{ display: "flex", gap: "12px", marginTop: "4px", fontSize: "11px", color: "#475569" }}>
                      <span>{post.brand}</span>
                      <span>{new Date(post.created_at).toLocaleDateString("en-GB")}</span>
                      {post.post_url && (
                        <a href={post.post_url} target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4", textDecoration: "none" }}>
                          View post ↗
                        </a>
                      )}
                      {post.error && <span style={{ color: "#ef4444" }}>{post.error}</span>}
                    </div>
                  </div>

                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: badge.bg,
                      color: badge.color,
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      flexShrink: 0,
                    }}
                  >
                    {badge.label}
                  </span>

                  {(post.status === "queued" || post.status === "failed") && post.platform === "linkedin" && (
                    <button
                      onClick={() => handlePostNow(post)}
                      disabled={posting === post.id}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "8px",
                        border: "1px solid rgba(34,197,94,0.3)",
                        background: posting === post.id ? "#1e293b" : "rgba(34,197,94,0.08)",
                        color: posting === post.id ? "#94a3b8" : "#22c55e",
                        fontSize: "12px",
                        fontWeight: 600,
                        cursor: posting === post.id ? "not-allowed" : "pointer",
                        flexShrink: 0,
                      }}
                    >
                      {posting === post.id ? "Posting..." : "Post Now"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div style={{ marginTop: "32px", textAlign: "center", fontSize: "11px", color: "#1e293b" }}>
          Solent Signal Admin · {new Date().getFullYear()}
        </div>
      </div>
    </main>
  );
}
