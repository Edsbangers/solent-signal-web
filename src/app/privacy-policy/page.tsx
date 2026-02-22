import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Solent Signal",
  description: "Privacy policy for Solent Signal. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-16 pb-24">
      <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
      <p className="text-sm mb-10" style={{ color: "#475569" }}>
        Last updated: 20 February 2026
      </p>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
        <div>
          <h2 className="text-lg font-bold text-white mb-3">1. Who we are</h2>
          <p>
            Solent Signal is a trading name operated from Portsmouth, Hampshire, UK.
            We provide GEO-optimised websites, AI agent services, and bespoke SaaS
            platforms for businesses across the Solent region. You can contact us at{" "}
            <a
              href="mailto:hello@solentsignal.com"
              style={{ color: "#22c55e" }}
              className="hover:opacity-80 transition-opacity"
            >
              hello@solentsignal.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">2. What data we collect</h2>
          <p className="mb-3">
            When you submit an enquiry via our website, we collect:
          </p>
          <ul className="space-y-2 ml-4">
            {[
              "Your name",
              "Your business name",
              "Your email address",
              "Your phone number (optional)",
              "Your current website URL (optional)",
              "A description of your business challenge or goals",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            We may also collect standard website analytics data (page views, referring
            URLs, device type) via anonymised analytics tools.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">3. How we use your data</h2>
          <p className="mb-3">We use the information you provide to:</p>
          <ul className="space-y-2 ml-4">
            {[
              "Respond to your enquiry",
              "Provide a free AI visibility audit",
              "Discuss and deliver our services to you",
              "Send you relevant service updates (where you have consented)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            We will never sell, rent, or share your personal data with third parties
            for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">4. Legal basis for processing</h2>
          <p>
            We process your data on the basis of legitimate interest (to respond to
            your enquiry) and, where applicable, contractual necessity (to deliver
            agreed services). Where we send marketing communications, we rely on your
            consent, which you can withdraw at any time.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">5. Third-party processors</h2>
          <p className="mb-3">
            We use the following trusted third-party services to operate our website
            and handle your data:
          </p>
          <ul className="space-y-2 ml-4">
            {[
              "Formspree — processes contact form submissions on our behalf",
              "Vercel — hosts and serves our website",
              "Google Analytics (if enabled) — anonymised site analytics",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            All processors are GDPR-compliant and operate under appropriate data
            processing agreements.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">6. Data retention</h2>
          <p>
            We retain enquiry data for up to 2 years, or for as long as a client
            relationship exists. You may request deletion at any time by emailing{" "}
            <a
              href="mailto:hello@solentsignal.com"
              style={{ color: "#22c55e" }}
              className="hover:opacity-80 transition-opacity"
            >
              hello@solentsignal.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">7. Your rights</h2>
          <p className="mb-3">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="space-y-2 ml-4">
            {[
              "Access the personal data we hold about you",
              "Request correction of inaccurate data",
              "Request deletion of your data",
              "Object to processing or withdraw consent",
              "Lodge a complaint with the ICO (ico.org.uk)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:hello@solentsignal.com"
              style={{ color: "#22c55e" }}
              className="hover:opacity-80 transition-opacity"
            >
              hello@solentsignal.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">8. Cookies</h2>
          <p>
            Our website uses only essential cookies required for site functionality.
            We do not use advertising or tracking cookies. If we introduce optional
            analytics cookies in future, we will request your consent.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">9. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The current version will
            always be available at{" "}
            <span style={{ color: "#e2e8f0" }}>solentsignal.com/privacy-policy</span>
            . Significant changes will be communicated to active clients by email.
          </p>
        </div>
      </div>
    </section>
  );
}
