"use client";

import { useState, FormEvent } from "react";

// Replace YOUR_FORM_ID with your Formspree form ID after creating one at formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function LeadCaptureForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{
          background: "linear-gradient(#0d1424, #0d1424) padding-box, linear-gradient(135deg, #22c55e, #06b6d4) border-box",
          border: "1px solid transparent",
        }}
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Thanks! We&apos;re on it.
        </h3>
        <p style={{ color: "#94a3b8" }}>
          We&apos;ll review your site and get back to you within 24 hours with
          your free AI visibility audit.
        </p>
      </div>
    );
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid #1e293b",
    color: "#f1f5f9",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.15s",
  } as const;

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#94a3b8",
    marginBottom: "0.375rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Business name */}
      <div>
        <label htmlFor="business" style={labelStyle}>
          Business name <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="business"
          name="business"
          type="text"
          required
          placeholder="e.g. Portsmouth Plumbing Co."
          style={inputStyle}
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" style={labelStyle}>
          Your name <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="e.g. Jane Smith"
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" style={labelStyle}>
          Email address <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          style={inputStyle}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" style={labelStyle}>
          Phone number <span style={{ color: "#475569" }}>(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+44 7700 000000"
          style={inputStyle}
        />
      </div>

      {/* Website */}
      <div>
        <label htmlFor="website" style={labelStyle}>
          Website URL <span style={{ color: "#475569" }}>(optional)</span>
        </label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://yourbusiness.co.uk"
          style={inputStyle}
        />
      </div>

      {/* Challenge */}
      <div>
        <label htmlFor="challenge" style={labelStyle}>
          What&apos;s your biggest challenge?{" "}
          <span style={{ color: "#475569" }}>(optional)</span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          placeholder="e.g. We don't appear in any local searches, or customers can't find us on ChatGPT..."
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {/* Submit */}
      {status === "error" && (
        <p className="text-sm" style={{ color: "#ef4444" }}>
          Something went wrong. Please try again or email us at{" "}
          <a
            href="mailto:hello@solentsignal.com"
            style={{ color: "#22c55e" }}
          >
            hello@solentsignal.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-full font-bold text-base transition-all hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "#22c55e", color: "#000" }}
      >
        {status === "submitting" ? "Sending..." : "Request Free Audit"}
      </button>

      <p className="text-xs text-center" style={{ color: "#475569" }}>
        No card required. We&apos;ll get back to you within 24 hours.
      </p>
    </form>
  );
}
