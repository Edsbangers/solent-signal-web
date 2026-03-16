import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.business} — Case Study | Solent Signal`,
    description: cs.heroTagline,
    alternates: { canonical: `https://solentsignal.com/work/${cs.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10">
        <Link
          href="/work"
          className="text-sm font-medium mb-6 inline-block hover:opacity-80 transition-opacity"
          style={{ color: "#06b6d4" }}
        >
          ← Back to Our Work
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
              {cs.business}
            </h1>
            <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>{cs.type}</p>
          </div>
          <a
            href={cs.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-full hover:opacity-80 transition-opacity flex-shrink-0"
            style={{
              background: "rgba(13,148,136,0.1)",
              color: "#0D9488",
              border: "1px solid rgba(13,148,136,0.25)",
            }}
          >
            Visit site ↗
          </a>
        </div>
        <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
          {cs.heroTagline}
        </p>
      </section>

      {/* Challenge */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div
          className="rounded-2xl p-8"
          style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
        >
          <h2 className="text-xl font-bold text-white mb-4">The Challenge</h2>
          <p className="leading-relaxed" style={{ color: "#94a3b8" }}>{cs.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(13,20,36,0.8)",
            border: "1px solid rgba(6,182,212,0.2)",
            borderLeft: "3px solid #06b6d4",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-4">What We Delivered</h2>
          <p className="leading-relaxed" style={{ color: "#94a3b8" }}>{cs.solution}</p>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="text-xl font-bold text-white mb-6">Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cs.results.map(({ metric, label }) => (
            <div
              key={label}
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
            >
              <div
                className="text-2xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {metric}
              </div>
              <p className="text-xs leading-snug" style={{ color: "#94a3b8" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(13,148,136,0.04)",
            borderLeft: "3px solid #0D9488",
            border: "1px solid rgba(13,148,136,0.15)",
            borderLeftWidth: "3px",
          }}
        >
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} style={{ color: "#D4A843", fontSize: "18px" }}>★</span>
            ))}
          </div>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#cbd5e1" }}>
            &ldquo;{cs.quote}&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: "#0D9488" }}>
            — {cs.quoteName}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-10 md:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get similar results?
          </h2>
          <p className="max-w-xl mx-auto mb-8" style={{ color: "#94a3b8" }}>
            We&apos;ll audit your AI visibility for free and show you exactly
            what&apos;s needed to get your business recommended by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#22c55e", color: "#000" }}
            >
              Get Your Free Audit
            </Link>
            <a
              href="mailto:hello@solentsignal.com?subject=15-Min Call Request"
              className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:text-white"
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
      </section>
    </>
  );
}
