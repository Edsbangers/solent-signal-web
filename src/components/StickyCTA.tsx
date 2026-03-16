"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/get-started") return;

    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/get-started" || dismissed || !visible) return null;

  const auditHref = pathname === "/" ? "#contact-form" : "/#contact-form";

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: "#1B3A5C",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.4)",
        animation: "stickyCTASlideUp 300ms ease-out",
      }}
    >
      <style>{`
        @keyframes stickyCTASlideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center gap-3 relative">
        <p className="text-white text-sm font-medium flex-shrink-0">
          Want to see if AI can find your business?
        </p>
        <div className="flex gap-2 flex-1 w-full sm:w-auto sm:justify-end">
          <a
            href={auditHref}
            className="text-sm font-bold px-4 py-2 rounded-lg flex-shrink-0 hover:opacity-90 transition-opacity"
            style={{ background: "#22c55e", color: "#000" }}
          >
            Get Free Audit
          </a>
          <a
            href="mailto:hello@solentsignal.com?subject=15-Min Call Request"
            className="text-sm font-semibold px-4 py-2 rounded-lg flex-shrink-0 hover:opacity-90 transition-opacity"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            Book a 15-Min Call
          </a>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-1 right-2 sm:static sm:ml-2 text-white/50 hover:text-white text-lg leading-none"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
