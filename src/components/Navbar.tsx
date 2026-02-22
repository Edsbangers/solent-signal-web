import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(10,15,30,0.92)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(30,41,59,0.8)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink">
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "3px 6px",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.jpg"
              alt="Solent Signal logo"
              width={200}
              height={72}
              className="h-10 md:h-[72px] w-auto"
              priority
            />
          </div>
          <div style={{ lineHeight: 1.15 }} className="hidden sm:block">
            <div className="text-white font-black tracking-tight" style={{ fontSize: "18px" }}>
              Solent Signal
            </div>
            <div style={{ fontSize: "10px", color: "#06b6d4", fontWeight: 600, letterSpacing: "0.05em" }}>
              Agentic Solutions
            </div>
          </div>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "#94a3b8" }}>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/saas" className="hover:text-white transition-colors">
            Bespoke SaaS
          </Link>
        </div>

        {/* Mobile hamburger */}
        <MobileMenu />

        {/* CTA — desktop only (mobile version is inside MobileMenu) */}
        <Link
          href="/get-started"
          className="hidden md:inline-block flex-shrink-0 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#22c55e", color: "#000" }}
        >
          Get Free Audit
        </Link>
      </nav>
    </header>
  );
}
