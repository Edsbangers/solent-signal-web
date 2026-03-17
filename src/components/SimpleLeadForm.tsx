"use client";

import { useState, FormEvent } from "react";
import { track } from "@vercel/analytics";

type Status = "idle" | "processing" | "success" | "error";

export default function SimpleLeadForm({ defaultBusiness = "" }: { defaultBusiness?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("processing");
    setErrorMsg("");
    track("beacon_form_submitted");
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "generate_lead", {
        event_category: "conversion",
        event_label: "free_audit_form",
      });
    }

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
        track("beacon_form_success");
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

  // ── Success ──
  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(13,20,36,0.8)",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "16px",
          padding: "40px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "rgba(34,197,94,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: "28px",
          }}
        >
          ✓
        </div>
        <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, marginBottom: "10px" }}>
          We&apos;ve got your details!
        </h3>
        <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto" }}>
          Jason will review your AI visibility and send you a personalised audit
          report within one business day. Check your inbox — we&apos;ve sent you a
          confirmation too.
        </p>
      </div>
    );
  }

  // ── Processing ──
  if (status === "processing") {
    return (
      <div
        style={{
          background: "rgba(13,20,36,0.8)",
          border: "1px solid rgba(6,182,212,0.2)",
          borderRadius: "16px",
          padding: "48px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "3px solid rgba(6,182,212,0.2)",
            borderTopColor: "#06b6d4",
            borderRadius: "50%",
            margin: "0 auto 20px",
            animation: "simpleFormSpin 0.8s linear infinite",
          }}
        />
        <p style={{ color: "#e2e8f0", fontSize: "16px", fontWeight: 600, marginBottom: "6px" }}>
          Preparing your audit...
        </p>
        <p style={{ color: "#64748b", fontSize: "14px" }}>
          This usually takes a few seconds
        </p>
        <style>{`
          @keyframes simpleFormSpin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // ── Form ──
  return (
    <div
      style={{
        background: "rgba(13,20,36,0.8)",
        border: "1px solid #1e293b",
        borderRadius: "16px",
        padding: "32px 28px",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>
          Get Your Free AI Visibility Audit
        </h3>
        <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6 }}>
          Tell us about your business and we&apos;ll show you how you appear in AI search — completely free.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <label
            htmlFor="simple-name"
            style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#e2e8f0", marginBottom: "6px" }}
          >
            Your name <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="simple-name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid #1e293b",
              color: "#f1f5f9",
              borderRadius: "10px",
              padding: "12px 16px",
              width: "100%",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.15s",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          />
        </div>

        <div>
          <label
            htmlFor="simple-email"
            style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#e2e8f0", marginBottom: "6px" }}
          >
            Email address <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="simple-email"
            name="email"
            type="email"
            required
            placeholder="jane@yourbusiness.co.uk"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid #1e293b",
              color: "#f1f5f9",
              borderRadius: "10px",
              padding: "12px 16px",
              width: "100%",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.15s",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          />
        </div>

        <div>
          <label
            htmlFor="simple-company"
            style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#e2e8f0", marginBottom: "6px" }}
          >
            Company or website <span style={{ color: "#64748b", fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            id="simple-company"
            name="company"
            type="text"
            defaultValue={defaultBusiness}
            placeholder="e.g. Portsmouth Plumbing Co or yoursite.co.uk"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid #1e293b",
              color: "#f1f5f9",
              borderRadius: "10px",
              padding: "12px 16px",
              width: "100%",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.15s",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          />
        </div>

        <div>
          <label
            htmlFor="simple-message"
            style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#e2e8f0", marginBottom: "6px" }}
          >
            What does your business do? <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="simple-message"
            name="message"
            type="text"
            required
            placeholder="e.g. Plumber in Southsea, Restaurant in Old Portsmouth"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid #1e293b",
              color: "#f1f5f9",
              borderRadius: "10px",
              padding: "12px 16px",
              width: "100%",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.15s",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          />
        </div>

        {status === "error" && (
          <div
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: "10px",
              padding: "12px 16px",
              fontSize: "14px",
              color: "#fca5a5",
            }}
          >
            {errorMsg}{" — or "}
            <a href="mailto:hello@solentsignal.com" style={{ color: "#06b6d4", textDecoration: "underline" }}>
              email us directly
            </a>
            .
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            background: "#22c55e",
            color: "#000",
            fontWeight: 700,
            fontSize: "15px",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get Your Free Audit
        </button>

        <p style={{ textAlign: "center", fontSize: "12px", color: "#64748b", margin: 0 }}>
          No card required · Free audit delivered within 48 hours · No spam, ever
        </p>
      </form>
    </div>
  );
}
