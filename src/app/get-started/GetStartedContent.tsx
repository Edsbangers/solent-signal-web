"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AgenticLeadForm from "@/components/AgenticLeadForm";

function GetStartedInner() {
  const searchParams = useSearchParams();
  const businessParam = searchParams.get("business") || "";

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
          See How AI{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Finds Your Business
          </span>
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          We&apos;ll check ChatGPT, Google AI, Gemini and voice search for your
          business — and show you exactly what&apos;s missing. Takes 2 minutes.
          Completely free.
        </p>
      </div>

      {/* What You'll Get */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{ background: "rgba(13,20,36,0.8)", border: "1px solid #1e293b" }}
      >
        <h2 className="text-base font-bold text-white mb-4">What You&apos;ll Get</h2>
        <div className="space-y-3">
          {[
            { icon: "🔍", text: "AI search snapshot — we'll show you exactly what ChatGPT and Google AI say about your business right now" },
            { icon: "⚔️", text: "Competitor comparison — see who AI IS recommending instead of you" },
            { icon: "📊", text: "GEO score — a simple rating of how AI-ready your current website is" },
            { icon: "📋", text: "Action plan — specific steps to start appearing in AI answers" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust signals */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { text: "Free, no obligation" },
          { text: "Results within 48 hours" },
          { text: "No spam, ever" },
          { text: "Rated 5/5 on Google" },
        ].map(({ text }) => (
          <div
            key={text}
            className="flex items-center gap-1.5 text-xs font-medium py-2.5 px-3 rounded-lg"
            style={{
              background: "rgba(34,197,94,0.05)",
              border: "1px solid rgba(34,197,94,0.12)",
              color: "#e2e8f0",
            }}
          >
            <span style={{ color: "#22c55e" }}>✓</span>
            {text}
          </div>
        ))}
      </div>

      {/* Agentic form */}
      <AgenticLeadForm defaultBusiness={businessParam} />

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
            "We send you a personalised audit report within 48 hours",
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

export default function GetStartedContent() {
  return (
    <Suspense>
      <GetStartedInner />
    </Suspense>
  );
}
