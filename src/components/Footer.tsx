import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: "#1e293b" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
              <div
                style={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "6px 12px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/logo.jpg"
                  alt="Solent Signal"
                  width={140}
                  height={50}
                  style={{ height: "50px", width: "auto" }}
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              AEO-optimised websites for Portsmouth &amp; the Solent region.
              We help local businesses get found by ChatGPT, Google AI &amp;
              voice search.
            </p>
            <a
              href="mailto:hello@solentsignal.com"
              className="text-sm mt-4 block hover:text-white transition-colors"
              style={{ color: "#22c55e" }}
            >
              hello@solentsignal.com
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-16 text-sm">
            <nav className="flex flex-col gap-3">
              <span className="font-semibold text-white mb-1">Pages</span>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/pricing", label: "Pricing" },
                { href: "/get-started", label: "Get Started" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-white transition-colors"
                  style={{ color: "#94a3b8" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white mb-1">Services</span>
              {[
                "AEO Audit",
                "Website Build",
                "AI Blog Content",
                "AI Agents",
                "Schema Markup",
              ].map((s) => (
                <span key={s} style={{ color: "#94a3b8" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ borderColor: "#1e293b", color: "#475569" }}
        >
          <span>© Solent Signal 2026 · Portsmouth, Hampshire, UK</span>
          <span>
            Built by an{" "}
            <span className="text-white">IRCA Registered Principal Auditor</span>{" "}
            · AI-first web development
          </span>
        </div>
      </div>
    </footer>
  );
}
