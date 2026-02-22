"use client";

import { useState, FormEvent, useEffect } from "react";

type Status = "idle" | "processing" | "success" | "error";

const PROCESSING_LINES = [
  "Initialising signal analysis...",
  "Parsing business intelligence...",
  "Categorising service requirements...",
  "Drafting project brief for Jason...",
  "Composing personalised response...",
  "Dispatching signals...",
];

function TerminalLine({ text, delay }: { text: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  if (!visible) return null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
      <span style={{ color: "#22c55e", fontSize: "12px" }}>›</span>
      <span style={{ color: "#94a3b8", fontSize: "13px", fontFamily: "monospace" }}>{text}</span>
    </div>
  );
}

function BlinkingCursor() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "8px",
        height: "14px",
        background: "#06b6d4",
        marginLeft: "4px",
        verticalAlign: "middle",
        animation: "beacon-blink 1s step-end infinite",
      }}
    />
  );
}

export default function AgenticLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [linesShown, setLinesShown] = useState(0);

  // Cycle through terminal lines during processing
  useEffect(() => {
    if (status !== "processing") return;
    setLinesShown(0);
    const interval = setInterval(() => {
      setLinesShown((n) => {
        if (n >= PROCESSING_LINES.length) {
          clearInterval(interval);
          return n;
        }
        return n + 1;
      });
    }, 700);
    return () => clearInterval(interval);
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("processing");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/beacon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please try again or email us directly.");
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "rgba(6,182,212,0.03)",
    border: "1px solid #1e293b",
    color: "#f1f5f9",
    borderRadius: "8px",
    padding: "10px 14px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    fontFamily: "monospace",
    transition: "border-color 0.15s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontWeight: 700,
    color: "#06b6d4",
    marginBottom: "5px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontFamily: "monospace",
  };

  // ── Success ────────────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(8,12,24,0.98)",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "16px",
          padding: "32px 28px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <div style={{ color: "#22c55e", fontSize: "12px", marginBottom: "12px" }}>
            THE BEACON — SOLENT SIGNAL
          </div>
          {PROCESSING_LINES.map((line, i) => (
            <TerminalLine key={line} text={line} delay={i * 200} />
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "6px",
            }}
          >
            <span style={{ color: "#22c55e", fontSize: "12px" }}>✓</span>
            <span style={{ color: "#22c55e", fontSize: "13px", fontWeight: 700 }}>
              Complete.
            </span>
          </div>
        </div>

        <div
          style={{
            background: "rgba(34,197,94,0.06)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: "12px",
            padding: "20px 22px",
          }}
        >
          <div style={{ fontSize: "24px", marginBottom: "10px" }}>🔦</div>
          <div
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              marginBottom: "8px",
              fontFamily: "inherit",
            }}
          >
            Signal Received.
          </div>
          <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
            The Beacon has dispatched your brief to our team. Jason will review
            your personalised report and be in touch within one business day.
            Check your inbox — we&apos;ve sent you a copy of your brief too.
          </p>
        </div>
      </div>
    );
  }

  // ── Processing ─────────────────────────────────────────────────────────────
  if (status === "processing") {
    return (
      <div
        style={{
          background: "rgba(8,12,24,0.98)",
          border: "1px solid rgba(6,182,212,0.3)",
          borderRadius: "16px",
          padding: "32px 28px",
          minHeight: "260px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ color: "#06b6d4", fontSize: "12px", marginBottom: "16px" }}>
          THE BEACON — ANALYSING SIGNAL
        </div>
        {PROCESSING_LINES.slice(0, linesShown).map((line) => (
          <TerminalLine key={line} text={line} delay={0} />
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
          <span style={{ color: "#06b6d4", fontSize: "12px" }}>›</span>
          <BlinkingCursor />
        </div>
        <style>{`
          @keyframes beacon-blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        `}</style>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        background: "rgba(8,12,24,0.98)",
        border: "1px solid rgba(6,182,212,0.2)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Terminal header bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          padding: "12px 18px",
          borderBottom: "1px solid #1e293b",
          background: "rgba(6,182,212,0.04)",
        }}
      >
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }} />
        <span
          style={{
            marginLeft: "10px",
            fontSize: "11px",
            color: "#475569",
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}
        >
          beacon — signal transmission
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: "10px",
            color: "#22c55e",
            fontFamily: "monospace",
          }}
        >
          ● LIVE
        </span>
      </div>

      <form onSubmit={handleSubmit} style={{ padding: "24px 22px" }} className="space-y-4">
        <div style={{ marginBottom: "18px" }}>
          <div style={{ color: "#94a3b8", fontSize: "12px", fontFamily: "monospace", lineHeight: 1.6 }}>
            <span style={{ color: "#22c55e" }}>$</span>{" "}
            <span style={{ color: "#e2e8f0" }}>beacon</span> --mode=audit --ai=true
          </div>
          <div style={{ color: "#475569", fontSize: "12px", fontFamily: "monospace" }}>
            Ready to analyse your business. Complete the fields below.
          </div>
        </div>

        <div>
          <label htmlFor="name" style={labelStyle}>
            <span style={{ color: "#475569" }}>01 /</span> Your name <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            <span style={{ color: "#475569" }}>02 /</span> Email address <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@yourbusiness.co.uk"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          />
        </div>

        <div>
          <label htmlFor="company" style={labelStyle}>
            <span style={{ color: "#475569" }}>03 /</span> Company / Business
            <span style={{ color: "#475569" }}> (optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Portsmouth Plumbing Co."
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          />
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>
            <span style={{ color: "#475569" }}>04 /</span> Tell The Beacon about your business{" "}
            <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Describe your biggest challenge. What's eating your time? What would you love to automate? The more detail you give, the sharper the brief The Beacon produces."
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          />
        </div>

        {status === "error" && (
          <div
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "13px",
              color: "#fca5a5",
              fontFamily: "monospace",
            }}
          >
            <span style={{ color: "#ef4444" }}>✕ ERROR:</span> {errorMsg}
            {" — or "}
            <a href="mailto:hello@solentsignal.com" style={{ color: "#06b6d4" }}>
              email us directly
            </a>
            .
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "13px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #0891b2, #06b6d4)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "14px",
            fontFamily: "monospace",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.04em",
            transition: "opacity 0.15s",
          }}
        >
          transmit_signal() →
        </button>

        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "#334155",
            fontFamily: "monospace",
            margin: 0,
          }}
        >
          // No card required · Processed by The Beacon AI · Response within 1 business day
        </p>
      </form>
    </div>
  );
}
