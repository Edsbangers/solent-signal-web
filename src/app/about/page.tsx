import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Portsmouth-based AEO specialists. Meet Jason Misters, IRCA Registered Principal Auditor, helping local Solent businesses get found by ChatGPT, Google AI & voice search.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
          Making Portsmouth businesses{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            visible to AI.
          </span>
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          Local Portsmouth team combining SHEQ expertise with AI-first web
          development.
        </p>
      </div>

      {/* The Problem */}
      <div
        className="rounded-2xl p-8 mb-6"
        style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          The problem with most local websites
        </h2>
        <p className="leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
          Most local business websites were built for Google&apos;s old ranking
          algorithm — keyword stuffing, backlink counting, meta descriptions.
          That model is dying fast.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
          When someone asks ChatGPT{" "}
          <em className="text-white">&ldquo;Who&apos;s the best electrician in Portsmouth?&rdquo;</em>{" "}
          or Google surfaces an AI Overview, it&apos;s not reading your
          keyword-stuffed meta description. It&apos;s looking for structured,
          trusted, entity-rich content that AI systems can parse and recommend.
        </p>
        <p className="font-semibold text-white">
          Most local business websites are completely invisible to AI. We fix that.
        </p>
      </div>

      {/* Our Approach */}
      <div
        className="rounded-2xl p-8 mb-6"
        style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Our approach: AEO
        </h2>
        <p className="leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
          Answer Engine Optimisation (AEO) is the practice of building websites
          that AI systems trust and recommend. Every site we build includes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Structured data & JSON-LD schema",
            "LocalBusiness entity signals",
            "Semantic HTML5 content architecture",
            "FAQPage schema for common queries",
            "NAP consistency (Name, Address, Phone)",
            "AI-readable content structure",
            "Voice search optimisation",
            "Citation building & local authority",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 text-sm py-2 px-3 rounded-lg"
              style={{
                background: "rgba(34,197,94,0.05)",
                border: "1px solid rgba(34,197,94,0.12)",
                color: "#e2e8f0",
              }}
            >
              <span style={{ color: "#22c55e" }}>✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Why trust us */}
      <div
        className="rounded-2xl p-8 mb-6"
        style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Why trust us?</h2>
        <div className="space-y-6">
          {[
            {
              icon: "🏆",
              title: "IRCA Registered Principal Auditor",
              description:
                "Internationally recognised audit credentials with 500+ completed audits across 5 countries. We bring rigour and process discipline to every engagement.",
            },
            {
              icon: "🤖",
              title: "AI Governance Expertise",
              description:
                "ISO 42001 AI management system specialist — we understand AI from the inside out, not just as a marketing buzzword.",
            },
            {
              icon: "📍",
              title: "Portsmouth-based",
              description:
                "We're genuinely local. We know the Solent business community, your competition, and what your customers are actually searching for.",
            },
            {
              icon: "⚡",
              title: "AI-first by design",
              description:
                "We don't retrofit AEO as an afterthought. Every site we build is designed from the ground up for AI visibility, structured data, and semantic content.",
            },
          ].map(({ icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
              <div>
                <h3 className="font-bold text-white mb-1">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div
        className="rounded-2xl p-8 mb-12"
        style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">The team</h2>
        <div className="flex items-start gap-5">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0 text-white"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            }}
          >
            JM
          </div>
          <div>
            <h3 className="font-bold text-white text-xl">Jason Misters</h3>
            <p
              className="text-sm mb-3 font-medium"
              style={{ color: "#22c55e" }}
            >
              Founder &amp; Principal Consultant
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              IRCA Registered Principal Auditor with ISO 42001 AI governance
              expertise and 500+ audits across 5 countries. Based in
              Portsmouth, Jason founded Solent Signal to give local businesses
              the AI-first web presence they need to compete in the AI search
              era.
            </p>
          </div>
        </div>

        <div
          className="mt-6 pt-6 border-t text-sm"
          style={{ borderColor: "#1e293b", color: "#475569" }}
        >
          <em>
            More team members coming soon — we&apos;re building a local Portsmouth
            team.
          </em>
        </div>
      </div>

      {/* CTA */}
      <div
        className="rounded-2xl p-10 md:p-12 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))",
          border: "1px solid rgba(59,130,246,0.2)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Ready to get found by AI?
        </h2>
        <p className="mb-6" style={{ color: "#94a3b8" }}>
          Get your free audit — we&apos;ll show you exactly what&apos;s missing.
        </p>
        <Link
          href="/get-started"
          className="inline-block px-8 py-4 rounded-full font-bold transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#22c55e", color: "#000" }}
        >
          Get Your Free AI Visibility Audit
        </Link>
      </div>
    </main>
  );
}
