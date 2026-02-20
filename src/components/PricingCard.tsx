import Link from "next/link";

interface PricingCardProps {
  tier: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  tier,
  price,
  features,
  popular = false,
}: PricingCardProps) {
  const wrapperStyle = popular
    ? {
        background:
          "linear-gradient(#0d1424, #0d1424) padding-box, linear-gradient(135deg, #22c55e, #06b6d4) border-box",
        border: "1px solid transparent",
        borderRadius: "1rem",
        boxShadow: "0 0 40px rgba(34,197,94,0.18), 0 0 80px rgba(6,182,212,0.08)",
      }
    : {
        background:
          "linear-gradient(#0d1424, #0d1424) padding-box, linear-gradient(135deg, rgba(34,197,94,0.25), rgba(59,130,246,0.25)) border-box",
        border: "1px solid transparent",
        borderRadius: "1rem",
        boxShadow: "0 0 20px rgba(34,197,94,0.05)",
      };

  return (
    <div className="flex flex-col h-full p-6" style={wrapperStyle}>
      {/* Tier label + badge */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-xs font-black tracking-widest uppercase"
          style={{ color: "#22c55e" }}
        >
          {tier}
        </span>
        {popular && (
          <span
            className="text-xs font-bold px-2.5 py-0.5 rounded-full"
            style={{ background: "#22c55e", color: "#000" }}
          >
            POPULAR
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className="text-5xl font-black text-white">{price}</span>
        <span className="text-sm ml-1.5" style={{ color: "#94a3b8" }}>
          / month
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#e2e8f0" }}>
            <span
              className="mt-0.5 flex-shrink-0 font-bold"
              style={{ color: "#22c55e" }}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/get-started"
        className="block text-center text-sm font-bold py-3.5 rounded-full transition-all hover:opacity-90 active:scale-95"
        style={
          popular
            ? { background: "#22c55e", color: "#000" }
            : {
                background: "rgba(34,197,94,0.08)",
                color: "#22c55e",
                border: "1px solid rgba(34,197,94,0.3)",
              }
        }
      >
        Get Started
      </Link>
    </div>
  );
}
