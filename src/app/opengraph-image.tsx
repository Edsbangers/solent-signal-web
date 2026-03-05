import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Solent Signal — Websites AI Actually Recommends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0f1e 0%, #0d1424 50%, #0a0f1e 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            Solent Signal
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              backgroundClip: "text",
              color: "#06b6d4",
              textAlign: "center",
            }}
          >
            Websites AI Actually Recommends
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: "700px",
            }}
          >
            GEO-optimised websites for Portsmouth & Solent businesses. Built by an IRCA Registered Principal Auditor.
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "14px",
              fontWeight: 700,
              color: "#000",
              background: "#22c55e",
              padding: "10px 28px",
              borderRadius: "999px",
            }}
          >
            solentsignal.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
