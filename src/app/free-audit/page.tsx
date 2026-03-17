import type { Metadata } from "next";
import SimpleLeadForm from "@/components/SimpleLeadForm";

export const metadata: Metadata = {
  title: "Free AI Visibility Audit | Solent Signal",
  description:
    "Find out if ChatGPT, Google AI and voice search can find your business. Free audit, no obligation. Portsmouth & Solent businesses.",
  robots: { index: false, follow: false },
};

export default function FreeAuditPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      {/* Hero — tight, no distractions */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
          Can AI Find{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Business?
          </span>
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
          When someone asks ChatGPT for a recommendation in your area, does your
          business appear? Most don&apos;t. We&apos;ll check for free.
        </p>
      </div>

      {/* Trust signals */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {[
          "100% free",
          "Results in 48 hours",
          "No spam, ever",
          "5/5 on Google",
        ].map((text) => (
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

      {/* Form */}
      <SimpleLeadForm />

      {/* Social proof */}
      <div className="mt-10 text-center">
        <p className="text-xs mb-3" style={{ color: "#475569" }}>
          Trusted by 80+ Portsmouth &amp; Solent businesses
        </p>
        <div className="flex flex-col gap-4">
          {[
            {
              text: "Solent Signal provide best service and are very supportive. They design my website and jaws dropping I just love it.",
              name: "Rok — Photo By Rok",
            },
            {
              text: "A really professional approach. So happy with the finished product I would definitely recommend.",
              name: "Marion Morris — MM Counselling",
            },
          ].map(({ text, name }) => (
            <div
              key={name}
              className="rounded-xl p-4 text-left"
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
                borderLeft: "3px solid #0D9488",
              }}
            >
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: "#D4A843", fontSize: "14px" }}>★</span>
                ))}
              </div>
              <p className="text-xs leading-relaxed mb-2" style={{ color: "#cbd5e1" }}>
                &ldquo;{text}&rdquo;
              </p>
              <p className="text-xs font-semibold" style={{ color: "#0D9488" }}>
                — {name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative contact */}
      <p className="text-center mt-8 text-sm" style={{ color: "#64748b" }}>
        Prefer to talk? Call{" "}
        <a href="tel:07956139772" style={{ color: "#06b6d4" }}>07956 139772</a>
        {" "}or email{" "}
        <a href="mailto:hello@solentsignal.com" style={{ color: "#06b6d4" }}>hello@solentsignal.com</a>
      </p>
    </main>
  );
}
