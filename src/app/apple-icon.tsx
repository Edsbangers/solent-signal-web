import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            fontSize: "110px",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
