import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AEO website packages from £49/month for Portsmouth businesses. Starter, Growth, and Authority tiers. First month completely free — no card required.",
};

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          style={{
            background: "rgba(34,197,94,0.1)",
            color: "#22c55e",
            border: "1px solid rgba(34,197,94,0.2)",
          }}
        >
          🎉 First month completely FREE
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Simple, transparent pricing
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          No setup fees. No lock-in. Cancel anytime.
          <br />
          Every plan includes full AEO, schema markup, and AI visibility.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

      {/* AI Agents add-on strip */}
      <div
        className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
        style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
      >
        <span className="text-4xl flex-shrink-0">🤖</span>
        <div className="flex-1">
          <p className="font-bold text-white">
            Add AI Agents from{" "}
            <span style={{ color: "#22c55e" }}>£49/month</span>
          </p>
          <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>
            Scouting, Lead Generation, Call Handling, Analytics &amp; more. All
            trained by an IRCA Registered Principal Auditor.
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
          Add to plan
        </Link>
      </div>

      {/* Promo banner */}
      <div
        className="rounded-2xl p-5 text-center mb-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(6,182,212,0.06))",
          border: "1px solid rgba(34,197,94,0.15)",
        }}
      >
        <p className="font-bold text-white">
          🎉 First month completely FREE — no card required to get started
        </p>
        <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>
          Start with a free AI visibility audit. We&apos;ll recommend the right
          plan after reviewing your site.
        </p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Common questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Do I need to have an existing website?",
              a: "No — we can build from scratch or rebuild your existing site with full AEO. Either way you get the same AI-first result.",
            },
            {
              q: "Is there a contract?",
              a: "Month-to-month only. No lock-in, no cancellation fees. You can pause or cancel at any time.",
            },
            {
              q: "What does 'first month free' mean exactly?",
              a: "Your first full calendar month is completely free. No credit card required to start. You only pay from month two if you want to continue — and we think you will.",
            },
            {
              q: "How long does it take to build?",
              a: "Starter sites are typically live within 2 weeks. Growth and Authority plans are 3–4 weeks depending on content provided.",
            },
            {
              q: "Does this work with my existing domain?",
              a: "Yes — we work with your existing domain and hosting, or we can set everything up fresh for you.",
            },
            {
              q: "What's included in 'Hosting & SSL'?",
              a: "Fast UK-based hosting, SSL certificate, automated backups, and uptime monitoring. Everything needed to keep your site live and fast.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              className="rounded-xl p-5"
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
              }}
            >
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Not sure which plan?
        </h2>
        <p className="mb-6" style={{ color: "#94a3b8" }}>
          Get a free audit first — we&apos;ll tell you exactly what you need.
        </p>
        <Link
          href="/get-started"
          className="inline-block px-8 py-4 rounded-full font-bold transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#22c55e", color: "#000" }}
        >
          Get Your Free Audit
        </Link>
      </div>
    </main>
  );
}
