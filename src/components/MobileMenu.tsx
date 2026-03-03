"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/saas", label: "Bespoke SaaS" },
  { href: "/blog", label: "Blog" },
  { href: "/get-started", label: "Get Free Audit →" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="md:hidden flex-shrink-0 flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-colors"
        style={{ color: "#94a3b8" }}
      >
        <span
          style={{
            display: "block",
            width: "20px",
            height: "2px",
            background: "currentColor",
            borderRadius: "2px",
            transition: "transform 0.2s, opacity 0.2s",
            transform: open ? "translateY(6px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "20px",
            height: "2px",
            background: "currentColor",
            borderRadius: "2px",
            transition: "opacity 0.2s",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: "20px",
            height: "2px",
            background: "currentColor",
            borderRadius: "2px",
            transition: "transform 0.2s, opacity 0.2s",
            transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: "64px", background: "rgba(0,0,0,0.5)" }}
            onClick={() => setOpen(false)}
          />

          {/* Menu panel */}
          <nav
            className="fixed left-0 right-0 z-50 md:hidden"
            style={{
              top: "64px",
              background: "rgba(10,15,30,0.98)",
              borderBottom: "1px solid rgba(30,41,59,0.8)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{
                    color: label.includes("→") ? "#000" : "#94a3b8",
                    background: label.includes("→") ? "#22c55e" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!label.includes("→"))
                      e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    if (!label.includes("→"))
                      e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
