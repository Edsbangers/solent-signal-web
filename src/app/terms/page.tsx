import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Solent Signal",
  description: "Terms of service for Solent Signal website plans, AI agents, and bespoke SaaS builds.",
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-16 pb-24">
      <h1 className="text-4xl font-black text-white mb-2">Terms of Service</h1>
      <p className="text-sm mb-10" style={{ color: "#475569" }}>
        Last updated: 20 February 2026
      </p>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
        <div>
          <h2 className="text-lg font-bold text-white mb-3">1. About Solent Signal</h2>
          <p>
            Solent Signal is a trading name operated from Portsmouth, Hampshire, UK.
            We provide GEO-optimised websites, AI agent services, and bespoke SaaS
            platforms. By engaging our services or using our website, you agree to
            these terms. For questions, contact us at{" "}
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
          <h2 className="text-lg font-bold text-white mb-3">2. Services</h2>
          <p className="mb-3">
            Solent Signal offers three categories of service:
          </p>
          <ul className="space-y-2 ml-4">
            {[
              "Website Plans (Starter, Growth, Authority) — monthly subscription websites with GEO optimisation, hosting, and content updates",
              "AI Agent Add-ons — autonomous agents for lead generation, call handling, analytics, and more",
              "Bespoke SaaS Builds — custom-scoped AI-powered platforms built to your specification",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">3. Free first month</h2>
          <p>
            New website plan subscribers receive their first month free. No payment
            details are required during the free month. At the end of the free period,
            we will contact you to arrange payment to continue the service. No charge
            is applied without your explicit agreement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">4. Subscriptions and payment</h2>
          <p>
            Website plans and AI agent add-ons are billed monthly. Payment is due at
            the start of each billing period. Invoices are issued by email. Failure to
            pay within 14 days of the invoice date may result in suspension of the
            service. We accept payment by bank transfer or card.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">5. Cancellation</h2>
          <p>
            You may cancel your subscription at any time by notifying us in writing
            to{" "}
            <a
              href="mailto:hello@solentsignal.com"
              style={{ color: "#22c55e" }}
              className="hover:opacity-80 transition-opacity"
            >
              hello@solentsignal.com
            </a>
            . Cancellations take effect at the end of the current billing period. No
            partial refunds are issued for unused days within a billing period. There
            are no minimum contract terms or exit fees on monthly plans.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">6. Bespoke SaaS projects</h2>
          <p>
            Bespoke builds are governed by a separate Statement of Work (SOW) agreed
            in writing prior to commencement. The SOW will set out scope, deliverables,
            timeline, and payment schedule. Any changes to scope must be agreed in
            writing and may result in additional charges.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">7. Intellectual property</h2>
          <p>
            Upon full payment, all design assets and custom code created for your
            website or platform are assigned to you. Solent Signal retains the right
            to display completed work in our portfolio unless you request otherwise in
            writing. Generic components, frameworks, and third-party libraries remain
            subject to their respective licences.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">8. Your responsibilities</h2>
          <p className="mb-3">You agree to:</p>
          <ul className="space-y-2 ml-4">
            {[
              "Provide accurate information when engaging our services",
              "Supply any content, branding, or materials required in a timely manner",
              "Not use our services for any unlawful, deceptive, or harmful purpose",
              "Comply with all applicable laws, including UK GDPR if you collect data via your website",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">9. Limitation of liability</h2>
          <p>
            Solent Signal will not be liable for indirect, incidental, or consequential
            losses arising from use of our services. Our total liability in any 12-month
            period is limited to the fees paid by you to us during that period. Nothing
            in these terms excludes liability for fraud or death and personal injury
            caused by negligence.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">10. Third-party services</h2>
          <p>
            Our services may integrate with or depend upon third-party platforms
            (including AI model providers, hosting infrastructure, and automation tools).
            We are not responsible for outages or changes to third-party services outside
            our control, though we will work to resolve any impact promptly.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">11. Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes
            will be subject to the exclusive jurisdiction of the courts of England
            and Wales.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">12. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The current version will always
            be available at{" "}
            <span style={{ color: "#e2e8f0" }}>solentsignal.com/terms</span>. We will
            notify active clients of material changes by email with at least 14 days&apos;
            notice.
          </p>
        </div>
      </div>
    </section>
  );
}
