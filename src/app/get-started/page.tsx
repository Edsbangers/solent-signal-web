import type { Metadata } from "next";
import AgenticLeadForm from "@/components/AgenticLeadForm";

export const metadata: Metadata = {
  title: "Get Your Free AI Visibility Audit",
  description:
    "Find out how your Portsmouth business shows up in ChatGPT, Google AI & voice search — and what's missing. Free audit, no card required.",
  alternates: { canonical: "https://solentsignal.com/get-started" },
  openGraph: {
    title: "Free AI Visibility Audit — Solent Signal",
    description:
      "Find out how your Portsmouth business shows up in ChatGPT, Google AI & voice search.",
    url: "https://solentsignal.com/get-started",
  },
};

export default function GetStartedPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest"
          style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)", color: "#06b6d4" }}
        >
          🔦 Powered by The Beacon AI
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
          Get Your Free{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Visibility Audit
          </span>
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          Describe your business — The Beacon analyses your needs and dispatches
          a personalised project brief to Jason within seconds.
        </p>
      </div>

      {/* Trust signals */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { icon: "⚡", label: "24hr turnaround" },
          { icon: "🔒", label: "No card needed" },
          { icon: "🏆", label: "IRCA auditor" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="rounded-xl p-4 text-center"
            style={{
              background: "rgba(13,20,36,0.8)",
              border: "1px solid #1e293b",
            }}
          >
            <div className="text-2xl mb-1">{icon}</div>
            <div className="text-xs font-semibold" style={{ color: "#94a3b8" }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Agentic form */}
      <AgenticLeadForm />

      {/* Reassurance */}
      <div
        className="mt-8 rounded-xl p-5 text-sm"
        style={{
          background: "rgba(13,20,36,0.8)",
          border: "1px solid #1e293b",
          color: "#94a3b8",
        }}
      >
        <p className="font-semibold text-white mb-2">What happens next:</p>
        <ol className="space-y-1.5 list-none">
          {[
            "We review your current AI visibility (ChatGPT, Google AI, voice search)",
            "We identify gaps in your schema, content structure, and local signals",
            "We send you a personalised audit report within 24 hours",
            "We recommend the right plan — or tell you honestly if you don't need us",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="flex-shrink-0 font-bold text-xs mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e" }}
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
