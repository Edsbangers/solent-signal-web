import type { Metadata } from "next";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Get Your Free AI Visibility Audit",
  description:
    "Find out how your Portsmouth business shows up in ChatGPT, Google AI & voice search — and what's missing. Free audit, no card required.",
};

export default function GetStartedPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
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
          We&apos;ll check how your business shows up in ChatGPT, Google AI &amp;
          voice search — and show you exactly what&apos;s missing.
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

      {/* Form card */}
      <div
        className="rounded-2xl p-8"
        style={{
          background:
            "linear-gradient(#0d1424, #0d1424) padding-box, linear-gradient(135deg, rgba(34,197,94,0.3), rgba(59,130,246,0.3)) border-box",
          border: "1px solid transparent",
        }}
      >
        <LeadCaptureForm />
      </div>

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
