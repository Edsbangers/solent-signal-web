import Link from "next/link";
import Image from "next/image";

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
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/logo.jpg"
              alt="Solent Signal"
              width={120}
              height={42}
              style={{ height: "42px", width: "auto" }}
              priority
            />
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
        </div>

        {/* CTA */}
        <Link
          href="/get-started"
          className="text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#22c55e", color: "#000" }}
        >
          Get Free Audit
        </Link>
      </nav>
    </header>
  );
}
