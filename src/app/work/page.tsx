import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Our Work | Solent Signal",
  description:
    "GEO-optimised websites and AI visibility projects we've delivered for businesses across Portsmouth, Hampshire, and beyond.",
  alternates: { canonical: "https://solentsignal.com/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
          Our{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Work
          </span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
          Real results for real businesses. Here&apos;s how we&apos;ve helped companies across
          Portsmouth and beyond get found by AI search.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group rounded-2xl overflow-hidden transition-all hover:border-cyan-500/30"
              style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {cs.business}
                    </h2>
                    <p className="text-xs" style={{ color: "#94a3b8" }}>{cs.type}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
                  {cs.delivered}
                </p>
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(13,148,136,0.04)",
                    borderLeft: "3px solid #0D9488",
                  }}
                >
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "#cbd5e1" }}>
                    &ldquo;{cs.quote.length > 120 ? cs.quote.slice(0, 120) + "..." : cs.quote}&rdquo;
                  </p>
                  <p className="text-xs font-semibold" style={{ color: "#0D9488" }}>
                    — {cs.quoteName}
                  </p>
                </div>
                <p
                  className="mt-4 text-sm font-semibold group-hover:opacity-80 transition-opacity"
                  style={{ color: "#06b6d4" }}
                >
                  View case study →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-10 md:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get similar results?
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
