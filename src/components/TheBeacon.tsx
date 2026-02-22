"use client";

import { useState } from "react";
import Link from "next/link";

type Step = "closed" | "intro" | "bottleneck" | "hours" | "proposal" | "booked";

interface Proposal {
  agent: string;
  title: string;
  description: string;
  saving: string;
}

const proposals: Record<string, Proposal> = {
  leads: {
    agent: "🎯",
    title: "Lead Nurture Agent",
    description:
      "Responds to every enquiry instantly, qualifies prospects against your criteria, and books calls into your calendar — automatically, around the clock.",
    saving: "Typically saves 8–12 hours of follow-up per week.",
  },
  booking: {
    agent: "📅",
    title: "Appointment Booking Agent",
    description:
      "Handles all inbound booking requests 24/7. Checks availability, confirms appointments, sends reminders, and rearranges no-shows — without your involvement.",
    saving: "Eliminates the back-and-forth that wastes hours every week.",
  },
  admin: {
    agent: "📄",
    title: "Document & Admin Agent",
    description:
      "Reads incoming documents, extracts key data, routes to the right place, and logs everything automatically. No more copy-paste, no more missed paperwork.",
    saving: "Saves most businesses 10+ hours of admin per week.",
  },
  queries: {
    agent: "💬",
    title: "AI Customer Support Agent",
    description:
      "Trained on your business — knows your services, prices, and processes. Answers routine queries instantly and escalates only when a human is genuinely needed.",
    saving: "Handles up to 80% of inbound queries without human involvement.",
  },
  online: {
    agent: "🌐",
    title: "GEO-Optimised Website",
    description:
      "Built from the ground up to get found by ChatGPT, Google AI Overviews, and voice search. Full schema markup, semantic structure, and local entity signals included.",
    saving: "Most clients see AI visibility results within 30 days.",
  },
};

const bottleneckOptions = [
  { key: "leads", label: "Chasing leads & follow-ups", icon: "🎯" },
  { key: "booking", label: "Booking & scheduling", icon: "📅" },
  { key: "admin", label: "Admin & paperwork", icon: "📄" },
  { key: "queries", label: "Answering customer queries", icon: "💬" },
  { key: "online", label: "Not being found online", icon: "🌐" },
];

const hourOptions = [
  { key: "low", label: "Under 5 hours" },
  { key: "mid", label: "5–10 hours" },
  { key: "high", label: "10–20 hours" },
  { key: "very-high", label: "20+ hours" },
];

export default function TheBeacon() {
  const [step, setStep] = useState<Step>("closed");
  const [bottleneck, setBottleneck] = useState<string | null>(null);

  const proposal = bottleneck ? proposals[bottleneck] : null;

  const progressSteps = ["intro", "bottleneck", "hours", "proposal"];
  const currentIndex = progressSteps.indexOf(step);

  function reset() {
    setStep("closed");
    setBottleneck(null);
  }

  if (step === "closed") {
    return (
      <button
        onClick={() => setStep("intro")}
        aria-label="Open The Beacon — AI discovery agent"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "12px 18px",
          borderRadius: "999px",
          background: "linear-gradient(135deg, #0891b2, #06b6d4)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 0 0 0 rgba(6,182,212,0.5)",
          animation: "beacon-pulse-btn 2.5s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: "20px", lineHeight: 1 }}>🔦</span>
        <span>The Beacon</span>
        <style>{`
          @keyframes beacon-pulse-btn {
            0%, 100% { box-shadow: 0 4px 24px rgba(6,182,212,0.4), 0 0 0 0 rgba(6,182,212,0.3); }
            50%       { box-shadow: 0 4px 24px rgba(6,182,212,0.6), 0 0 0 8px rgba(6,182,212,0); }
          }
        `}</style>
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 50,
        width: "360px",
        maxWidth: "calc(100vw - 32px)",
        borderRadius: "20px",
        background: "rgba(8,12,24,0.97)",
        border: "1px solid rgba(6,182,212,0.3)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(6,182,212,0.1)",
        backdropFilter: "blur(16px)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          borderBottom: "1px solid rgba(30,41,59,0.8)",
          background: "rgba(6,182,212,0.05)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>🔦</span>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "14px", lineHeight: 1.2 }}>
              The Beacon
            </div>
            <div style={{ color: "#06b6d4", fontSize: "11px" }}>
              Solent Signal Discovery Agent
            </div>
          </div>
        </div>
        <button
          onClick={reset}
          aria-label="Close"
          style={{
            background: "none",
            border: "none",
            color: "#475569",
            cursor: "pointer",
            fontSize: "18px",
            lineHeight: 1,
            padding: "2px 4px",
          }}
        >
          ×
        </button>
      </div>

      {/* Progress dots */}
      {currentIndex >= 0 && (
        <div
          style={{
            display: "flex",
            gap: "6px",
            padding: "10px 18px 0",
            justifyContent: "center",
          }}
        >
          {progressSteps.map((s, i) => (
            <div
              key={s}
              style={{
                width: i <= currentIndex ? "20px" : "6px",
                height: "4px",
                borderRadius: "2px",
                background:
                  i < currentIndex
                    ? "#22c55e"
                    : i === currentIndex
                    ? "#06b6d4"
                    : "rgba(30,41,59,1)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}

      {/* Body */}
      <div style={{ padding: "18px" }}>
        {/* ── Intro ── */}
        {step === "intro" && (
          <div>
            <p style={{ color: "#e2e8f0", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
              Hi! I&apos;m The Beacon — I help find the right AI solution for your
              business in under 2 minutes.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px" }}>
              No jargon, no sales pitch. Just a quick look at where your business
              could save time and scale faster with AI.
            </p>
            <button
              onClick={() => setStep("bottleneck")}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                background: "#06b6d4",
                color: "#000",
                fontWeight: 700,
                fontSize: "14px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Let&apos;s go →
            </button>
          </div>
        )}

        {/* ── Bottleneck ── */}
        {step === "bottleneck" && (
          <div>
            <p
              style={{
                color: "#e2e8f0",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "14px",
                lineHeight: 1.4,
              }}
            >
              What&apos;s taking up the most time in your business right now?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {bottleneckOptions.map(({ key, label, icon }) => (
                <button
                  key={key}
                  onClick={() => {
                    setBottleneck(key);
                    setStep("hours");
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    background: "rgba(30,41,59,0.5)",
                    border: "1px solid rgba(30,41,59,0.8)",
                    color: "#e2e8f0",
                    fontSize: "13px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(30,41,59,0.8)")
                  }
                >
                  <span style={{ fontSize: "16px" }}>{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Hours ── */}
        {step === "hours" && (
          <div>
            <p
              style={{
                color: "#e2e8f0",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "14px",
                lineHeight: 1.4,
              }}
            >
              How many hours a week does this cost you?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {hourOptions.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setStep("proposal")}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    background: "rgba(30,41,59,0.5)",
                    border: "1px solid rgba(30,41,59,0.8)",
                    color: "#e2e8f0",
                    fontSize: "13px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(30,41,59,0.8)")
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Proposal ── */}
        {step === "proposal" && proposal && (
          <div>
            <p style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "12px" }}>
              Based on what you&apos;ve told me, here&apos;s what I&apos;d recommend:
            </p>
            <div
              style={{
                borderRadius: "12px",
                padding: "14px",
                background: "rgba(6,182,212,0.06)",
                border: "1px solid rgba(6,182,212,0.2)",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  marginBottom: "6px",
                  lineHeight: 1,
                }}
              >
                {proposal.agent}
              </div>
              <div
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  marginBottom: "8px",
                }}
              >
                {proposal.title}
              </div>
              <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6, marginBottom: "10px" }}>
                {proposal.description}
              </p>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#22c55e",
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  borderRadius: "6px",
                  padding: "5px 10px",
                  display: "inline-block",
                }}
              >
                ✓ {proposal.saving}
              </div>
            </div>

            <p style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "14px" }}>
              I&apos;d love to build this for you. Let&apos;s have a quick
              30-minute call — completely free, no commitment.
            </p>

            <Link
              href="/get-started"
              onClick={reset}
              style={{
                display: "block",
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                background: "#22c55e",
                color: "#000",
                fontWeight: 700,
                fontSize: "14px",
                textAlign: "center",
                textDecoration: "none",
                marginBottom: "8px",
              }}
            >
              Book a Free Discovery Call →
            </Link>

            <button
              onClick={() => {
                setBottleneck(null);
                setStep("bottleneck");
              }}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                borderRadius: "10px",
                background: "none",
                border: "none",
                color: "#475569",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              ← Start again
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "10px 18px",
          borderTop: "1px solid rgba(30,41,59,0.6)",
          textAlign: "center",
          fontSize: "10px",
          color: "#334155",
        }}
      >
        Powered by Solent Signal · solentsignal.com
      </div>
    </div>
  );
}
