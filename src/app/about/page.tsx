import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Portsmouth-based GEO specialists. Meet Jason Misters, IRCA Registered Principal Auditor, helping local Solent businesses get found by ChatGPT, Google AI & voice search.",
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
          Our approach: GEO
        </h2>
        <p className="leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
          Generative Engine Optimisation (GEO) is the new layer of SEO — built
          for AI-generated answers. It helps your pages surface inside responses
          from ChatGPT, Gemini, Perplexity, and other LLM assistants. Where SEO
          improves rankings, GEO improves visibility inside AI answers. Every site
          we build is optimised for both:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Title tags, headings & meta data",
            "Page speed & Core Web Vitals",
            "Structured data & JSON-LD schema",
            "Entity clarity & E-E-A-T signals",
            "LocalBusiness entity signals",
            "FAQPage schema for AI summary readiness",
            "Semantic HTML5 content architecture",
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
                "We don't retrofit GEO as an afterthought. Every site we build is designed from the ground up for AI visibility, structured data, and semantic content.",
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
              className="text-sm mb-4 font-medium"
              style={{ color: "#22c55e" }}
            >
              Founder &amp; Lead Architect
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#94a3b8" }}>
              Jason brings a &ldquo;boots-on-the-ground&rdquo; perspective to AI
              automation. Having spent over a decade overseeing global
              infrastructures, he saw first-hand the need for smarter compliance
              tools — leading him to build PICMS, a leading SaaS platform for
              compliance professionals.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              Now, as an expert in ISO 42001 (AI Management Systems), Jason is
              pivoting his deep auditing experience toward the future of the web.
              At Solent Signal, he combines his background as an{" "}
              <strong className="text-white">IRCA Principal Auditor</strong> with
              cutting-edge agentic solutions to help Portsmouth businesses
              transition from traditional sites to intelligent, AI-driven
              platforms.
            </p>

            {/* PICMS badge */}
            <div
              className="mt-4 rounded-xl p-4 flex items-start gap-3"
              style={{
                background: "rgba(6,182,212,0.05)",
                border: "1px solid rgba(6,182,212,0.2)",
              }}
            >
              <span className="text-xl flex-shrink-0 mt-0.5">🏗️</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#06b6d4" }}>
                    Featured Build
                  </span>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}
                  >
                    ✓ Proven software developer
                  </span>
                </div>
                <div className="font-bold text-white text-sm mb-0.5">PICMS</div>
                <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                  SaaS compliance platform for audit &amp; SHEQ professionals —
                  built, shipped, and operating at scale. Not a side project; a
                  production system trusted by compliance teams across multiple
                  countries.
                </p>
              </div>
            </div>
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

      {/* AI Ethics & Compliance */}
      <div
        className="rounded-2xl p-8 mb-6"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(6,182,212,0.06))",
          border: "1px solid rgba(59,130,246,0.2)",
        }}
      >
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl flex-shrink-0 mt-0.5">🛡️</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              Responsible AI — not just a buzzword
            </h2>
            <p className="text-sm" style={{ color: "#06b6d4" }}>
              Our secret weapon: SHEQ rigour applied to AI development
            </p>
          </div>
        </div>

        <p className="leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
          Most small AI startups are built by developers. We&apos;re built by an{" "}
          <strong className="text-white">IRCA Registered Principal Auditor</strong> with
          deep expertise in ISO standards and management systems. That means every
          AI solution we design has governance, accountability, and data security
          built in from day one — not bolted on as an afterthought.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {[
            {
              icon: "📋",
              title: "ISO 42001 — AI Management Systems",
              detail:
                "We design AI solutions that align with the international standard for responsible AI governance — ensuring your systems are auditable, transparent, and trustworthy.",
            },
            {
              icon: "🔒",
              title: "Data Security Awareness",
              detail:
                "We apply ISO 27001 principles to every build — considering data minimisation, access controls, and secure processing from the outset.",
            },
            {
              icon: "👤",
              title: "Human-in-the-Loop Design",
              detail:
                "Our agents are designed to escalate appropriately. We never build systems that remove human oversight where it matters — your team stays in control.",
            },
            {
              icon: "⚖️",
              title: "UK GDPR Compliance",
              detail:
                "Every platform we build handles personal data in line with UK GDPR requirements. We advise on lawful basis, retention policies, and data subject rights.",
            },
          ].map(({ icon, title, detail }) => (
            <div
              key={title}
              className="rounded-xl p-5"
              style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
            >
              <div className="text-xl mb-2">{icon}</div>
              <div className="font-bold text-white text-sm mb-1">{title}</div>
              <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                {detail}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm" style={{ color: "#475569" }}>
          When you&apos;re trusting AI to represent your business and handle your
          customers&apos; data, you want it built by someone who understands audit
          standards — not just algorithms.
        </p>
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
