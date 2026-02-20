import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Solent Signal — Websites AI Actually Recommends",
  description:
    "AEO-optimised websites for Portsmouth & Solent area businesses. Get found by ChatGPT, Google AI & voice search. First month free.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AEO (Answer Engine Optimisation)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO is the practice of optimising your website so AI systems like ChatGPT, Google AI Overview, and voice assistants recommend your business when answering user queries. Unlike traditional SEO, AEO focuses on structured data, schema markup, and semantic content that AI engines can parse and trust.",
      },
    },
    {
      "@type": "Question",
      name: "How is Solent Signal different from a regular web agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solent Signal specialises exclusively in AEO — making your website visible to AI search engines. Every site we build includes full schema markup, semantic HTML, LocalBusiness entity signals, and AI-readable structured content. Most agencies build for Google's old algorithm; we build for the AI-first web.",
      },
    },
    {
      "@type": "Question",
      name: "Which businesses does Solent Signal work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with local businesses across Portsmouth, Southampton, Fareham, Gosport, and the wider Solent region — including trades, solicitors, restaurants, retailers, estate agents, and professional service businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an AEO website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plans start from £49/month for a 3–5 page AEO website with hosting, SSL, and schema markup. Growth is £99/month and Authority is £179/month. The first month is completely free.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      {/* No overflow-hidden here — beam needs to extend beyond section bounds.
          overflow-x:hidden on <body> prevents horizontal scroll.             */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">

        {/* Watermarks in their own overflow-hidden bubble so they don't scroll */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
        >
          <img
            src="/logo.jpg"
            alt=""
            style={{
              position: "absolute",
              top: "-15%",
              left: "-12%",
              width: "44%",
              maxWidth: "500px",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              objectPosition: "top center",
              filter: "grayscale(100%) invert(1)",
              opacity: 0.035,
              userSelect: "none",
              borderRadius: "50%",
            }}
          />
          <img
            src="/logo.jpg"
            alt=""
            style={{
              position: "absolute",
              top: "-8%",
              right: "-14%",
              width: "52%",
              maxWidth: "580px",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              objectPosition: "top center",
              filter: "grayscale(100%) invert(1)",
              opacity: 0.025,
              userSelect: "none",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* ── Spinning lighthouse beam ──
             Outer div: pinned to the dot's position (top 9%, left 8%).
             Inner div: 150vw square centered via negative margins, so the
             beam extends far beyond the section in every direction.
             conic-gradient + transformOrigin both at 50% 50% of the inner
             square = the dot. Body overflow-x:hidden prevents scroll.     */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "9%",
            left: "8%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div
            style={{
              width: "150vw",
              height: "150vw",
              marginLeft: "-75vw",
              marginTop: "-75vw",
              background:
                "conic-gradient(at 50% 50%, transparent 0deg, rgba(6,182,212,0.32) 4deg, rgba(6,182,212,0.10) 16deg, transparent 22deg)",
              animation: "lighthouse-spin 9s linear infinite",
              transformOrigin: "50% 50%",
            }}
          />
        </div>

        {/* ── Pulsing glow dot — centered on top 9% / left 8% ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "9%",
            left: "8%",
            width: "12px",
            height: "12px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "rgba(6,182,212,1)",
            boxShadow:
              "0 0 10px 3px rgba(6,182,212,0.7), 0 0 30px 8px rgba(6,182,212,0.35)",
            animation: "lighthouse-pulse 2s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Hero content — z-index keeps it above the beam */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(34,197,94,0.1)",
              color: "#22c55e",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            🎉 First month completely FREE
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6">
            Websites that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI actually
              <br />
              recommends.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            AEO-optimised sites built for ChatGPT, Google AI &amp; voice search.
            <br />
            Made in Portsmouth, for Portsmouth businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#22c55e", color: "#000" }}
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:text-white"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#e2e8f0",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section
        className="border-y py-5"
        style={{ borderColor: "#1e293b" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium" style={{ color: "#94a3b8" }}>
            🏆 Built by an{" "}
            <strong className="text-white">IRCA Registered Principal Auditor</strong>{" "}
            with 500+ audits across 5 countries
          </p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          How it works
        </h2>
        <p className="text-center mb-14" style={{ color: "#94a3b8" }}>
          Three steps to becoming the business AI recommends
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "We audit your AI visibility",
              description:
                "We check exactly how your business appears (or doesn't) in ChatGPT, Google AI Overview, and voice search — for free.",
            },
            {
              step: "02",
              title: "We build for AEO",
              description:
                "We build or rebuild your site with full schema markup, semantic structure, local entity signals, and AI-readable content architecture.",
            },
            {
              step: "03",
              title: "AI recommends you",
              description:
                'Your business shows up when AI answers queries like "best plumber in Portsmouth" or "local solicitor near me."',
            },
          ].map(({ step, title, description }) => (
            <div
              key={step}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
              }}
            >
              <div
                className="text-5xl font-black mb-5 leading-none"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#94a3b8" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="max-w-6xl mx-auto px-6 py-4 pb-16">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            Built for Solent businesses
          </h2>
          <p className="mb-8" style={{ color: "#94a3b8" }}>
            If customers are searching for your service using AI, you need to be
            found. We work with Portsmouth and Solent area businesses across
            every sector.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Trades & Contractors",
              "Solicitors & Legal",
              "Restaurants & Cafés",
              "Retailers",
              "Estate Agents",
              "Service Businesses",
              "Healthcare & Wellness",
              "Accountants",
              "Consultants",
            ].map((biz) => (
              <div
                key={biz}
                className="flex items-center gap-2 text-sm py-2 px-3 rounded-lg"
                style={{
                  background: "rgba(34,197,94,0.05)",
                  border: "1px solid rgba(34,197,94,0.12)",
                  color: "#e2e8f0",
                }}
              >
                <span style={{ color: "#22c55e" }}>✓</span>
                {biz}
              </div>
            ))}
          </div>
          <p className="text-xs mt-5" style={{ color: "#475569" }}>
            Portsmouth · Southampton · Fareham · Gosport · Havant · Hampshire ·
            Solent region
          </p>
        </div>
      </section>

      {/* ── AI Agents upsell strip ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
        >
          <span className="text-4xl flex-shrink-0">🤖</span>
          <div className="flex-1">
            <p className="font-bold text-white">
              Add AI Agents from{" "}
              <span style={{ color: "#22c55e" }}>£49/month</span>
            </p>
            <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>
              Scouting, Lead Generation, Call Handling, Analytics &amp; more.
              All trained by an IRCA Registered Principal Auditor.
            </p>
          </div>
          <Link
            href="/get-started"
            className="flex-shrink-0 text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap transition-all hover:opacity-90"
            style={{
              background: "rgba(34,197,94,0.1)",
              color: "#22c55e",
              border: "1px solid rgba(34,197,94,0.3)",
            }}
          >
            Learn more →
          </Link>
        </div>
      </section>

      {/* ── Pricing preview ── */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          Simple, transparent pricing
        </h2>
        <p className="text-center mb-12" style={{ color: "#94a3b8" }}>
          No lock-in. Cancel anytime. First month completely free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            tier="Starter"
            price="£49"
            features={[
              "3–5 page professional website",
              "AEO & schema markup",
              "Hosting & SSL included",
              "Mobile responsive",
              "1 content update/month",
            ]}
          />
          <PricingCard
            tier="Growth"
            price="£99"
            popular
            features={[
              "5–10 page website + blog",
              "4 AI blog posts/month",
              "AI visibility monitoring",
              "Analytics dashboard",
              "Priority support",
            ]}
          />
          <PricingCard
            tier="Authority"
            price="£179"
            features={[
              "10–20 page site + full CMS",
              "8 AI blog posts/month",
              "Competitor AEO tracking",
              "Citation building",
              "Monthly strategy call",
            ]}
          />
        </div>

        <p className="text-center mt-8">
          <Link
            href="/pricing"
            className="text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#22c55e" }}
          >
            See full pricing details →
          </Link>
        </p>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-10 md:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get found by AI?
          </h2>
          <p className="max-w-xl mx-auto mb-8" style={{ color: "#94a3b8" }}>
            We&apos;ll check how your business shows up in ChatGPT, Google AI &amp;
            voice search — and show you exactly what&apos;s missing. Free.
          </p>
          <Link
            href="/get-started"
            className="inline-block px-10 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#22c55e", color: "#000" }}
          >
            Get Your Free AI Visibility Audit
          </Link>
        </div>
      </section>
    </>
  );
}
