"use client";

import { useState } from "react";

interface BlogResult {
  title: string;
  content: string;
  excerpt: string;
  socialSnippet: string;
}

export default function AdminBlogPage() {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("professional");
  const [wordCount, setWordCount] = useState("800");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BlogResult | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [publishing, setPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState<string | null>(null);
  const [linkedinPosting, setLinkedinPosting] = useState(false);
  const [linkedinResult, setLinkedinResult] = useState<{ success: boolean; postUrl?: string; error?: string } | null>(null);

  async function handleGenerate() {
    if (!topic.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/admin/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, keywords, tone, wordCount: parseInt(wordCount) }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.error || "Generation failed");
      setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  }

  function shareOnFacebook() {
    if (!result) return;
    const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(result.socialSnippet)}`;
    window.open(url, "_blank", "width=600,height=400");
  }

  function copyForInstagram() {
    if (!result) return;
    copyToClipboard(result.socialSnippet, "instagram");
  }

  async function handlePublish() {
    if (!result) return;
    setPublishing(true);
    setError("");

    try {
      const res = await fetch("/api/admin/publish-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: result.title,
          content: result.content,
          excerpt: result.excerpt,
          socialSnippet: result.socialSnippet,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.error || "Publish failed");
      setPublishedUrl(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Publish failed");
    } finally {
      setPublishing(false);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    background: "rgba(13,20,36,0.8)",
    color: "#f1f5f9",
    fontSize: "14px",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    color: "#94a3b8",
    fontSize: "12px",
    fontWeight: 600 as const,
    marginBottom: "6px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0a0f1e", padding: "32px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Admin nav */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
          {[
            { href: "/admin/leads", label: "Leads", active: false },
            { href: "/admin/blog", label: "Blog Generator", active: true },
            { href: "/admin/social", label: "Social Queue", active: false },
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
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "24px" }}>✍️</span>
            <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: 800, margin: 0 }}>
              Blog Post Generator
            </h1>
          </div>
          <p style={{ color: "#475569", fontSize: "13px", margin: 0 }}>
            Generate GEO-optimised blog content using AI, then share to socials
          </p>
        </div>

        {/* Form */}
        <div
          style={{
            background: "rgba(13,20,36,0.8)",
            border: "1px solid #1e293b",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Topic / Title</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Why Portsmouth businesses need GEO in 2026"
                style={inputStyle}
              />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Target Keywords (optional)</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="e.g. GEO Portsmouth, AI visibility, local SEO"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                style={inputStyle}
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="technical">Technical</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Word Count</label>
              <select
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
                style={inputStyle}
              >
                <option value="500">~500 words</option>
                <option value="800">~800 words</option>
                <option value="1200">~1200 words</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !topic.trim()}
            style={{
              padding: "12px 28px",
              borderRadius: "10px",
              border: "none",
              background: loading ? "#1e293b" : "#22c55e",
              color: loading ? "#94a3b8" : "#000",
              fontSize: "14px",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
            }}
          >
            {loading ? "Generating..." : "Generate Blog Post"}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.25)",
            borderRadius: "10px",
            padding: "16px",
            color: "#fca5a5",
            marginBottom: "24px",
            fontSize: "14px",
          }}>
            {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <>
            {/* Blog preview */}
            <div
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
                borderRadius: "14px",
                padding: "28px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "20px" }}>
                <h2 style={{ color: "#fff", fontSize: "20px", fontWeight: 800, margin: 0 }}>
                  {result.title}
                </h2>
                <button
                  onClick={() => copyToClipboard(result.content.replace(/<[^>]*>/g, ""), "blog")}
                  style={{
                    flexShrink: 0,
                    padding: "6px 14px",
                    borderRadius: "8px",
                    border: "1px solid rgba(6,182,212,0.2)",
                    background: "rgba(6,182,212,0.08)",
                    color: "#06b6d4",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {copied === "blog" ? "Copied!" : "Copy Text"}
                </button>
              </div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "16px", fontStyle: "italic" }}>
                {result.excerpt}
              </div>
              <div
                style={{
                  color: "#cbd5e1",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  borderTop: "1px solid #1e293b",
                  paddingTop: "16px",
                }}
                dangerouslySetInnerHTML={{ __html: result.content }}
              />
            </div>

            {/* Publish to website */}
            <div
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
                borderRadius: "14px",
                padding: "20px 24px",
                marginBottom: "16px",
              }}
            >
              <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "12px" }}>
                Publish to Website
              </div>
              {publishedUrl ? (
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#22c55e", fontSize: "14px", fontWeight: 600 }}>
                    Published!
                  </span>
                  <a
                    href={publishedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#06b6d4",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    View at {publishedUrl} ↗
                  </a>
                </div>
              ) : (
                <button
                  onClick={handlePublish}
                  disabled={publishing}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "8px",
                    border: "1px solid rgba(34,197,94,0.3)",
                    background: publishing ? "#1e293b" : "rgba(34,197,94,0.1)",
                    color: publishing ? "#94a3b8" : "#22c55e",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: publishing ? "not-allowed" : "pointer",
                  }}
                >
                  {publishing ? "Publishing..." : "Publish to /blog"}
                </button>
              )}
            </div>

            {/* Social sharing */}
            <div
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
                borderRadius: "14px",
                padding: "20px 24px",
                marginBottom: "24px",
              }}
            >
              <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "12px" }}>
                Push to Socials
              </div>

              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid #1e293b",
                borderRadius: "8px",
                padding: "12px 16px",
                marginBottom: "16px",
                color: "#94a3b8",
                fontSize: "13px",
                lineHeight: 1.5,
              }}>
                {result.socialSnippet}
              </div>

              {linkedinResult?.success && (
                <div style={{
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  marginBottom: "12px",
                  fontSize: "13px",
                  color: "#22c55e",
                }}>
                  Posted to LinkedIn!{" "}
                  <a href={linkedinResult.postUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4" }}>
                    View post ↗
                  </a>
                </div>
              )}

              {linkedinResult && !linkedinResult.success && (
                <div style={{
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  marginBottom: "12px",
                  fontSize: "13px",
                  color: "#fca5a5",
                }}>
                  LinkedIn failed: {linkedinResult.error}
                </div>
              )}

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button
                  onClick={async () => {
                    if (!result) return;
                    setLinkedinPosting(true);
                    setLinkedinResult(null);
                    try {
                      const blogUrl = publishedUrl ? `https://solentsignal.com${publishedUrl}` : undefined;
                      const res = await fetch("/api/admin/social-posts", {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ platform: "linkedin", content: result.socialSnippet, linkUrl: blogUrl }),
                      });
                      const data = await res.json();
                      setLinkedinResult(data);
                    } catch {
                      setLinkedinResult({ success: false, error: "Network error" });
                    } finally {
                      setLinkedinPosting(false);
                    }
                  }}
                  disabled={linkedinPosting}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: "1px solid rgba(59,130,246,0.3)",
                    background: linkedinPosting ? "#1e293b" : "rgba(59,130,246,0.08)",
                    color: linkedinPosting ? "#94a3b8" : "#3b82f6",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: linkedinPosting ? "not-allowed" : "pointer",
                  }}
                >
                  {linkedinPosting ? "Posting..." : "Post to LinkedIn"}
                </button>
                <button
                  onClick={shareOnFacebook}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: "1px solid rgba(59,130,246,0.3)",
                    background: "rgba(59,130,246,0.08)",
                    color: "#3b82f6",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Share on Facebook
                </button>
                <button
                  onClick={copyForInstagram}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: "1px solid rgba(236,72,153,0.3)",
                    background: "rgba(236,72,153,0.08)",
                    color: "#ec4899",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {copied === "instagram" ? "Copied for Instagram!" : "Copy for Instagram"}
                </button>
                <a
                  href="/admin/social"
                  style={{
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: "1px solid rgba(6,182,212,0.3)",
                    background: "rgba(6,182,212,0.08)",
                    color: "#06b6d4",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  View Social Queue →
                </a>
              </div>
            </div>
          </>
        )}

        <div style={{ marginTop: "32px", textAlign: "center", fontSize: "11px", color: "#1e293b" }}>
          Solent Signal Admin · {new Date().getFullYear()}
        </div>
      </div>
    </main>
  );
}
