import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bespoke AI SaaS Builds for Portsmouth Businesses",
  description:
    "Custom AI-powered SaaS platforms built for your business. Automate workflows, generate leads, and streamline operations with the latest agentic AI solutions. Portsmouth & Solent region.",
  alternates: { canonical: "https://solentsignal.com/saas" },
  openGraph: {
    title: "Bespoke AI SaaS Builds — Solent Signal",
    description:
      "Custom AI-powered platforms that automate workflows and generate leads. Portsmouth & Solent.",
    url: "https://solentsignal.com/saas",
  },
};

const useCases = [
  {
    icon: "🤖",
    title: "AI Agents & Automation",
    description:
      "Autonomous agents that handle lead qualification, follow-ups, appointment booking, and reporting — working 24/7 without you lifting a finger.",
  },
  {
    icon: "📋",
    title: "Client Portals",
    description:
      "Branded self-service portals where your clients can book, pay, submit documents, and track their projects — no email chains required.",
  },
  {
    icon: "📞",
    title: "AI Voice & Chat Agents",
    description:
      "Intelligent call handling and chat agents trained on your business. Answers queries, books appointments, and escalates when needed.",
  },
  {
    icon: "📊",
    title: "Operations Dashboards",
    description:
      "Real-time visibility across your business — pipeline, revenue, tasks, and team performance — all in one custom-built dashboard.",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Connect your tools and eliminate manual data entry. CRM sync, invoice generation, document processing, email sequences — automated end to end.",
  },
  {
    icon: "📈",
    title: "Lead Generation Platforms",
    description:
      "AI-driven prospecting, outreach, and nurture sequences that identify your ideal clients and move them towards a conversation — automatically.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your business, your bottlenecks, and where time is being lost. No jargon, no sales pitch — just an honest conversation about what's possible.",
  },
  {
    step: "02",
    title: "Scoping & Design",
    description:
      "We map out the solution architecture, the integrations needed, and the exact workflows to be automated. You approve before a line of code is written.",
  },
  {
    step: "03",
    title: "Agile Build",
    description:
      "We build in short sprints, keeping you updated throughout. You see working software within weeks, not months.",
  },
  {
    step: "04",
    title: "Deploy & Iterate",
    description:
      "We launch, train your team, and continue to refine based on real usage. Your platform evolves as your business does.",
  },
];

const techStack = [
  "Claude AI (Anthropic)",
  "n8n Automation",
  "OpenAI / GPT-4",
  "Next.js & React",
  "PostgreSQL & Supabase",
  "Stripe Payments",
  "Twilio Voice & SMS",
  "Zapier / Make",
  "REST APIs & Webhooks",
];

const sectors = [
  { icon: "⚖️", name: "Legal & Solicitors" },
  { icon: "🏗️", name: "Trades & Construction" },
  { icon: "🏡", name: "Estate Agents" },
  { icon: "💼", name: "Accountants & Finance" },
  { icon: "🏥", name: "Healthcare & Wellness" },
  { icon: "🛒", name: "Retail & E-commerce" },
  { icon: "🎓", name: "Training & Education" },
  { icon: "🚛", name: "Logistics & Operations" },
];

export default function SaaSPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(59,130,246,0.1)",
            color: "#3b82f6",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          🛠️ Bespoke Builds · Agentic AI · Built in Portsmouth
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6">
          Your business,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            powered by AI.
          </span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          We build bespoke AI-powered platforms that automate your workflows,
          generate leads, and save your team hours every week — tailored
          exactly to how your business operates.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#22c55e", color: "#000" }}
          >
            Book a Discovery Call
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
            View Pricing
          </Link>
        </div>
      </section>

      {/* ── What are AI Agents? ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(6,182,212,0.06))",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl flex-shrink-0">🤖</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                What are AI Agents?
              </h2>
              <p className="text-sm" style={{ color: "#06b6d4" }}>
                And why every business should have them
              </p>
            </div>
          </div>

          <p className="text-base leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
            An AI agent is software that can <span className="text-white font-semibold">think, decide, and act</span> on
            your behalf — without you needing to be involved. Unlike a simple chatbot that answers
            questions, an agent can take actions: book appointments, send follow-up emails, qualify
            leads, update your CRM, generate reports, and escalate only when a human is genuinely needed.
          </p>

          <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
            Think of it as a member of staff that works{" "}
            <span className="text-white font-semibold">24 hours a day, 7 days a week</span>,
            never takes a sick day, handles your most repetitive tasks instantly, and costs a fraction
            of a part-time hire. The latest generation of agentic AI — powered by models like
            Claude and GPT-4 — can handle complex, multi-step tasks that would previously have
            required a human to manage from start to finish.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "⏱️",
                title: "Save time",
                detail: "Eliminate hours of manual admin every week — chasing leads, logging data, sending follow-ups.",
              },
              {
                icon: "💰",
                title: "Save money",
                detail: "Automate tasks that would otherwise require additional headcount. ROI from day one.",
              },
              {
                icon: "📈",
                title: "Scale without hiring",
                detail: "Handle 10x the enquiries and workflows with the same team. Agents don't have a ceiling.",
              },
              {
                icon: "🎯",
                title: "Never miss a lead",
                detail: "Agents respond instantly, 24/7. No more prospects slipping through the cracks at 11pm.",
              },
              {
                icon: "🔗",
                title: "Connect your tools",
                detail: "Agents work across your CRM, email, calendar, and invoicing software simultaneously.",
              },
              {
                icon: "🧠",
                title: "Trained on your business",
                detail: "Your agent knows your services, prices, tone, and processes — not generic responses.",
              },
            ].map(({ icon, title, detail }) => (
              <div
                key={title}
                className="rounded-xl p-5"
                style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
              >
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-bold text-white text-sm mb-1">{title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{detail}</div>
              </div>
            ))}
          </div>

          <p className="text-sm mt-8 text-center" style={{ color: "#475569" }}>
            AI Agents can be added to any Solent Signal website plan from{" "}
            <span style={{ color: "#22c55e" }}>£49/month</span> — or built into a bespoke platform from scratch.
          </p>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still running your business on spreadsheets and email chains?
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
            Most small and mid-size businesses are drowning in manual processes —
            chasing invoices, manually updating CRMs, copying data between tools,
            and missing follow-ups. AI can eliminate most of that. We build the
            platforms that make it happen, without the enterprise price tag.
          </p>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          What we build
        </h2>
        <p className="text-center mb-12" style={{ color: "#94a3b8" }}>
          Every platform is built from scratch to fit your exact needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ icon, title, description }) => (
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

      {/* ── How it works ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          How we work
        </h2>
        <p className="text-center mb-12" style={{ color: "#94a3b8" }}>
          From first conversation to live platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map(({ step, title, description }) => (
            <div
              key={step}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
              }}
            >
              <div
                className="text-4xl font-black mb-4 leading-none"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Built for businesses across every sector
          </h2>
          <p className="mb-8" style={{ color: "#94a3b8" }}>
            We work with businesses across Portsmouth, Southampton, and the wider
            Solent region — and remotely across the UK.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {sectors.map(({ icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg"
                style={{
                  background: "rgba(59,130,246,0.05)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  color: "#e2e8f0",
                }}
              >
                <span>{icon}</span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Built with the best tools available
        </h2>
        <p className="text-center mb-10" style={{ color: "#94a3b8" }}>
          We use battle-tested, production-grade technologies
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium px-4 py-2 rounded-full"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.2)",
                color: "#06b6d4",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(6,182,212,0.06))",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-3">
              Why trust Solent Signal with your platform?
            </h2>
            <ul className="space-y-3">
              {[
                "IRCA Registered Principal Auditor — process design is in our DNA",
                "500+ audits across 5 countries — we understand how businesses actually work",
                "ISO 42001 AI Management Systems expertise",
                "Agentic AI-first approach — we build with the latest models, not yesterday's automation",
                "Portsmouth-based, UK-focused — we're available, accountable, and local",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "#94a3b8" }}
                >
                  <span style={{ color: "#22c55e", marginTop: "2px", flexShrink: 0 }}>✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex-shrink-0 rounded-xl p-6 text-center"
            style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b", minWidth: "200px" }}
          >
            <div className="text-4xl mb-2">🏆</div>
            <div className="font-bold text-white text-sm">IRCA Registered</div>
            <div className="text-xs mt-1" style={{ color: "#94a3b8" }}>
              Principal Auditor
            </div>
            <div className="text-xs mt-3 font-semibold" style={{ color: "#06b6d4" }}>
              500+ Audits
            </div>
            <div className="text-xs" style={{ color: "#94a3b8" }}>
              5 Countries
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing note ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-8 text-center"
          style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Pricing</h2>
          <p className="max-w-xl mx-auto mb-2" style={{ color: "#94a3b8" }}>
            Bespoke SaaS builds are scoped individually. Most projects start from{" "}
            <span className="text-white font-semibold">£2,500</span> with optional
            monthly retainer support from{" "}
            <span className="text-white font-semibold">£299/month</span>.
          </p>
          <p className="text-sm" style={{ color: "#475569" }}>
            AI Agents can also be added to any existing Solent Signal website plan from £49/month.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
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
            Ready to automate and scale?
          </h2>
          <p className="max-w-xl mx-auto mb-8" style={{ color: "#94a3b8" }}>
            Book a free 30-minute discovery call. We&apos;ll map out exactly
            what&apos;s possible for your business and give you a clear picture
            of the ROI.
          </p>
          <Link
            href="/get-started"
            className="inline-block px-10 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#22c55e", color: "#000" }}
          >
            Book Your Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
