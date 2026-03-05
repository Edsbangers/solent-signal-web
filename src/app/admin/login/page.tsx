"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        const from = searchParams.get("from") || "/admin/leads";
        router.push(from);
        router.refresh();
      } else {
        setError("Invalid token");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0f1e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "rgba(13,20,36,0.8)",
          border: "1px solid #1e293b",
          borderRadius: "16px",
          padding: "32px 28px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔒</div>
          <h1 style={{ color: "#fff", fontSize: "20px", fontWeight: 800, margin: "0 0 4px" }}>
            Admin Access
          </h1>
          <p style={{ color: "#475569", fontSize: "13px", margin: 0 }}>
            Solent Signal · Internal use only
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter admin token"
            autoFocus
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "8px",
              border: "1px solid #1e293b",
              background: "rgba(6,182,212,0.03)",
              color: "#f1f5f9",
              fontSize: "14px",
              outline: "none",
              marginBottom: "12px",
              boxSizing: "border-box",
            }}
          />

          {error && (
            <div
              style={{
                color: "#fca5a5",
                fontSize: "13px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !token}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: loading ? "#1e293b" : "#22c55e",
              color: loading ? "#94a3b8" : "#000",
              fontWeight: 700,
              fontSize: "14px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Verifying..." : "Access Dashboard"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
