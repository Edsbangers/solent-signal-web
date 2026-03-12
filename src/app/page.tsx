import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Solent Signal | AI Search & GEO Optimisation Portsmouth",
  description:
    "Get found by ChatGPT & Google AI. Solent Signal provides GEO-optimised websites and digital audits in Portsmouth, led by an IRCA Registered Principal Auditor.",
  alternates: { canonical: "https://solentsignal.com" },
  openGraph: {
    title: "Solent Signal | AI Search & GEO Optimisation Portsmouth",
    description:
      "Get found by ChatGPT & Google AI. GEO-optimised websites and digital audits in Portsmouth.",
    url: "https://solentsignal.com",
  },
};

const faqItems = [
  {
    question: "What is GEO and why does my Portsmouth business need it?",
    answer:
      "GEO (Generative Engine Optimisation) ensures your business is cited by AI tools like ChatGPT. Unlike traditional SEO, it focuses on E-E-A-T and structured data to make you the \"recommended\" local choice.",
  },
  {
    question: "How does an IRCA Principal Auditor help my website?",
    answer:
      "Trust is the #1 signal for AI. Our IRCA-registered lead uses ISO-level auditing rigour to ensure your site meets the highest standards of data accuracy and authority, which AI engines reward with higher visibility.",
  },
  {
    question: "What is GEO (Generative Engine Optimisation)?",
    answer:
      "GEO is the new layer of SEO — built for AI-generated answers. It helps your pages surface inside responses from ChatGPT, Gemini, Perplexity, and other LLM assistants. Where SEO improves rankings, GEO improves visibility inside AI answers. We optimise both traditional SEO signals (title tags, headings, meta data, page speed) and GEO signals (structured data, entity clarity, E-E-A-T, AI summary readiness).",
  },
  {
    question: "How is Solent Signal different from a regular web agency?",
    answer:
      "Solent Signal specialises exclusively in GEO — making your website visible to AI search engines. Every site we build includes full schema markup, semantic HTML, LocalBusiness entity signals, and AI-readable structured content. Most agencies build for Google's old algorithm; we build for the AI-first web.",
  },
  {
    question: "Which businesses does Solent Signal work with?",
    answer:
      "We work with local businesses across Portsmouth, Southampton, Fareham, Gosport, and the wider Solent region — including trades, solicitors, restaurants, retailers, estate agents, and professional service businesses.",
  },
  {
    question: "How much does a GEO website cost?",
    answer:
      "Plans start from £49/month for a 3–5 page GEO website with hosting, SSL, and schema markup. Growth is £99/month and Authority is £179/month. The first month is completely free.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Solent Signal",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "2",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rok" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Solent Signal provide best service and are very supportive. They design my website and jaws dropping I just love it.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marion Morris" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "So happy with the website provided. A really professional approach, I felt heard and understood as to what I needed from a website and Jason was so patient to truly capture everything I asked for. So happy with the finished product I would definitely recommend.",
    },
  ],
};

const testimonials = [
  {
    name: "Rok",
    business: "Photo By Rok",
    type: "Photography",
    website: "https://www.photobyrok.co.uk",
    text: "Solent Signal provide best service and are very supportive. They design my website and jaws dropping I just love it.",
  },
  {
    name: "Marion Morris",
    business: "MM Counselling",
    type: "Counselling & Therapy",
    website: "https://www.mm-counselling.co.uk",
    text: "So happy with the website provided. A really professional approach, I felt heard and understood as to what I needed from a website and Jason was so patient to truly capture everything I asked for. So happy with the finished product I would definitely recommend.",
  },
];

const caseStudies = [
  {
    business: "Photo By Rok",
    type: "Photography Studio",
    website: "https://www.photobyrok.co.uk",
    delivered:
      "Built a GEO-optimised photography portfolio site with AI-readable structured data, local schema markup, and image optimisation for AI search visibility.",
    quote: testimonials[0].text,
    quoteName: "Rok",
  },
  {
    business: "MM Counselling",
    type: "Counselling & Therapy",
    website: "https://www.mm-counselling.co.uk",
    delivered:
      "Built a professional, GEO-optimised website with full schema markup, AI content strategy, and social media integration. Designed to position Marion as the counsellor AI recommends in Portsmouth.",
    quote: testimonials[1].text,
    quoteName: "Marion Morris",
  },
  {
    business: "Training Assurance Consultancy",
    type: "SHEQ & ISO Compliance",
    website: "https://www.trainingassuranceconsultancy.co.uk",
    delivered:
      "Full GEO-optimised rebuild with IRCA certification structured data, ISO service schema across 9001, 14001, and 45001, and an AI content engine producing compliance guides. Cited by Perplexity and Bing AI for ISO consultancy in Hampshire.",
    quote:
      "The site now works as hard as we do. We went from invisible in AI search to being the first consultancy recommended when businesses ask about ISO certification in Hampshire.",
    quoteName: "Jason Misters, IRCA Principal Auditor",
  },
  {
    business: "Portsmouth Local Trades",
    type: "Multi-Business Outreach",
    website: "https://solentsignal.com",
    delivered:
      "Ran AI visibility audits across 44 Portsmouth businesses, identifying missing schema markup, broken structured data, and GEO gaps. Delivered personalised outreach with specific technical recommendations for each business.",
    quote:
      "Solent Signal didn\u2019t just tell us we needed a better website \u2014 they showed us exactly what AI couldn\u2019t see about our business and how to fix it.",
    quoteName: "Local Business Owner, Southsea",
  },
  {
    business: "PICMS",
    type: "ISO Compliance SaaS Platform",
    website: "https://www.picms.com",
    delivered:
      "Deployed autonomous AI support agents, integrated Auth0 authentication, and built a real-time mission control dashboard. The platform now serves compliance teams with 24/7 AI-assisted ISO management across multiple standards.",
    quote:
      "Having AI agents that understand ISO standards and can answer compliance questions instantly has transformed how our users interact with the platform.",
    quoteName: "PICMS Team",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
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
            alt="Solent Signal logo watermark"
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
            alt="Solent Signal logo watermark"
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
            Websites That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Actually
              <br />
              Recommends
            </span>
            {" "}&mdash; Built in Portsmouth.
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            Solent Signal is a Portsmouth-based digital authority agency that ensures your
            business is the one AI recommends. Founded by an IRCA Registered Principal Auditor,
            we engineer high-trust, GEO-optimised platforms designed to dominate AI search
            results and voice queries across the Solent and beyond.
          </p>

          <p className="text-sm font-medium mb-10" style={{ color: "#64748b" }}>
            From £49/month · First month free · No lock-in
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

      {/* ── The Auditor's Edge ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          The Auditor&apos;s Edge: Why IRCA Standards Matter for Your Digital Trust
        </h2>
        <p
          className="text-center max-w-3xl mx-auto mb-12"
          style={{ color: "#94a3b8" }}
        >
          AI engines reward trust above all else. Our IRCA-registered Principal Auditor
          applies ISO-level rigour to every site we build &mdash; ensuring data accuracy,
          structured authority signals, and the kind of verifiable credibility that makes
          AI recommend you over the competition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🛡️",
              title: "ISO-Grade Quality",
              description:
                "Every site is built to ISO 9001/27001 quality benchmarks — not just developer best practice.",
            },
            {
              icon: "🔍",
              title: "Verified Authority",
              description:
                "IRCA Registered Principal Auditor status means your digital trust signals are independently credible.",
            },
            {
              icon: "🤖",
              title: "AI-First Architecture",
              description:
                "Structured data, entity clarity, and E-E-A-T signals engineered for ChatGPT, Gemini, and Google AI.",
            },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
              }}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works (GEO & SEO) ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          GEO &amp; SEO: Getting Found by ChatGPT, Gemini, and Google AI
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
                "We check exactly how your business appears (or doesn't) in ChatGPT, Gemini, Perplexity, and voice search — for free.",
            },
            {
              step: "02",
              title: "We build for GEO",
              description:
                "We build or rebuild your site optimised for both traditional SEO and GEO signals — structured data, entity clarity, E-E-A-T, and AI summary readiness.",
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

          {/* Scenario example */}
          <div
            className="mt-8 rounded-xl p-5"
            style={{
              borderLeft: "3px solid #0D9488",
              background: "rgba(13,148,136,0.04)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              Imagine you&apos;re a plumber in Southsea. Someone asks ChatGPT:{" "}
              <em className="text-white">&ldquo;Who&apos;s the best plumber near me?&rdquo;</em>{" "}
              Does your business appear in the answer? If not, you&apos;re losing customers
              to competitors who&apos;ve already optimised for AI search. That&apos;s exactly
              what we fix.
            </p>
            <Link
              href="/get-started"
              className="inline-block mt-3 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#0D9488" }}
            >
              Check your AI visibility for free →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          Why AI Search Prefers Solent Signal&apos;s High-Authority Frameworks
        </h2>
        <p className="text-center mb-10" style={{ color: "#94a3b8" }}>
          See how the Auditor&apos;s Edge compares to a standard SEO agency
        </p>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid #1e293b" }}
        >
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(6,182,212,0.08)" }}>
                <th className="text-left px-6 py-4 font-semibold" style={{ color: "#94a3b8", borderBottom: "1px solid #1e293b" }}>Feature</th>
                <th className="text-left px-6 py-4 font-semibold" style={{ color: "#94a3b8", borderBottom: "1px solid #1e293b" }}>Standard SEO Agency</th>
                <th className="text-left px-6 py-4 font-semibold" style={{ color: "#06b6d4", borderBottom: "1px solid #1e293b" }}>Solent Signal (The Auditor&apos;s Edge)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Strategy", "Keywords & Backlinks", "GEO, Schema & AI Visibility"],
                ["Trust Signal", "Portfolio only", "IRCA Registered Principal Auditor Status"],
                ["Standards", "General best practice", "ISO 9001/27001 Quality Benchmarks"],
                ["Local Focus", "Generic UK reach", "Deeply \"Made in Portsmouth\" Expertise"],
              ].map(([feature, standard, solent], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "rgba(13,20,36,0.8)" : "rgba(13,20,36,0.5)" }}>
                  <td className="px-6 py-4 font-medium text-white" style={{ borderBottom: "1px solid #1e293b" }}>{feature}</td>
                  <td className="px-6 py-4" style={{ color: "#94a3b8", borderBottom: "1px solid #1e293b" }}>{standard}</td>
                  <td className="px-6 py-4 font-medium" style={{ color: "#22c55e", borderBottom: "1px solid #1e293b" }}>{solent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          Trusted by Portsmouth Businesses
        </h2>
        <p className="text-center mb-10" style={{ color: "#94a3b8" }}>
          Real reviews from real clients
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ name, business, type, website, text }) => (
            <div
              key={name}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
                borderLeft: "3px solid #0D9488",
              }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: "#D4A843", fontSize: "18px" }}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#cbd5e1" }}>
                &ldquo;{text}&rdquo;
              </p>
              <div>
                <div className="font-bold text-white text-sm">{name}</div>
                <div className="text-xs" style={{ color: "#94a3b8" }}>{business} · {type}</div>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mt-1 inline-block hover:opacity-80 transition-opacity"
                  style={{ color: "#0D9488" }}
                >
                  {website.replace("https://www.", "")} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium" style={{ color: "#94a3b8" }}>
            <span style={{ fontSize: "16px" }}>G</span>
            <span>Verified Google Reviews</span>
            <span style={{ color: "#D4A843" }}>★★★★★</span>
            <span>5/5</span>
          </div>
        </div>
      </section>

      {/* ── Portfolio / Case Studies ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          Recent Work
        </h2>
        <p className="text-center mb-10" style={{ color: "#94a3b8" }}>
          GEO-optimised websites we&apos;ve built for Solent businesses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(({ business, type, website, delivered, quote, quoteName }) => (
            <div
              key={business}
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{business}</h3>
                    <p className="text-xs" style={{ color: "#94a3b8" }}>{type}</p>
                  </div>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity"
                    style={{
                      background: "rgba(13,148,136,0.1)",
                      color: "#0D9488",
                      border: "1px solid rgba(13,148,136,0.25)",
                    }}
                  >
                    View site ↗
                  </a>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
                  <strong className="text-white">What we delivered:</strong> {delivered}
                </p>
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(13,148,136,0.04)",
                    borderLeft: "3px solid #0D9488",
                  }}
                >
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "#cbd5e1" }}>
                    &ldquo;{quote}&rdquo;
                  </p>
                  <p className="text-xs font-semibold" style={{ color: "#0D9488" }}>
                    — {quoteName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rooted in Portsmouth ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(6,182,212,0.06))",
            border: "1px solid rgba(6,182,212,0.15)",
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Rooted in the Portsmouth Tech Scene
          </h2>
          <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
            From our base near Gunwharf Quays, we help businesses across Southsea,
            Old Portsmouth, and the wider Solent region bridge the gap between
            traditional trade and the future of AI search.
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
            href="/saas"
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
              "GEO & schema markup",
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
              "Competitor GEO tracking",
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

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-10" style={{ color: "#94a3b8" }}>
          Everything you need to know about GEO and working with Solent Signal
        </p>
        <div className="flex flex-col gap-3">
          {faqItems.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-xl"
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
              }}
            >
              <summary
                className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 font-semibold text-white text-sm select-none"
              >
                {question}
                <span
                  className="flex-shrink-0 transition-transform group-open:rotate-45"
                  style={{ color: "#06b6d4", fontSize: "20px", lineHeight: 1 }}
                >
                  +
                </span>
              </summary>
              <div
                className="px-6 pb-5 text-sm leading-relaxed"
                style={{ color: "#94a3b8" }}
              >
                {answer}
              </div>
            </details>
          ))}
        </div>
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
