import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SignalPost Privacy Policy — Solent Signal",
  description:
    "Privacy policy for SignalPost, a local AI social media posting tool by Solent Signal. How we handle your data, social accounts, and content.",
};

export default function SignalPostPrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-16 pb-24">
      <h1 className="text-4xl font-black text-white mb-2">
        SignalPost Privacy Policy
      </h1>
      <p className="text-sm mb-10" style={{ color: "#475569" }}>
        Last updated: 10 March 2026
      </p>

      <div
        className="space-y-10 text-sm leading-relaxed"
        style={{ color: "#94a3b8" }}
      >
        <div>
          <h2 className="text-lg font-bold text-white mb-3">
            1. What is SignalPost?
          </h2>
          <p>
            SignalPost is a local AI-powered social media posting tool built by{" "}
            <Link
              href="/"
              style={{ color: "#22c55e" }}
              className="hover:opacity-80 transition-opacity"
            >
              Solent Signal
            </Link>
            . It runs on your computer and helps you create, preview, and
            publish social media posts to platforms including LinkedIn, Meta
            (Facebook/Instagram), X, and TikTok.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">
            2. Data that stays on your device
          </h2>
          <p className="mb-3">
            SignalPost is designed with privacy first. The following data is
            stored locally on your device and never sent to Solent Signal
            servers:
          </p>
          <ul className="space-y-2 ml-4">
            {[
              "Social media OAuth tokens — encrypted with AES-256-GCM and stored in your home directory",
              "Platform credentials and API keys",
              "Your SignalPost configuration (brand voice, preferences)",
              "Post drafts and history",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">
            3. Data sent to third parties
          </h2>
          <p className="mb-3">
            When you use SignalPost, certain data is sent to third-party
            services to enable functionality:
          </p>
          <ul className="space-y-2 ml-4">
            {[
              "Anthropic (Claude API) — your post prompts and brand context are sent to generate content. Anthropic does not use API inputs for model training. See anthropic.com/privacy.",
              "Social media platforms — when you publish, your post content (text, images) is sent to the platforms you have connected (LinkedIn, Meta, X, TikTok) via their official APIs.",
              "Buffer (optional fallback) — if configured for X or TikTok, posts are routed through Buffer's API. See buffer.com/privacy.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">
            4. Admin sync (optional)
          </h2>
          <p>
            If you are a Solent Signal client and choose to enable admin sync,
            SignalPost can send a summary of published posts (title, platform,
            timestamp) to your Solent Signal admin dashboard for analytics and
            content calendar purposes. This is opt-in and can be disabled at any
            time in your SignalPost configuration. No OAuth tokens or credentials
            are ever sent during admin sync.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">
            5. OAuth and social account access
          </h2>
          <p>
            When you connect a social media account, SignalPost uses the
            platform&apos;s standard OAuth flow. You authorise SignalPost
            directly with the platform, and the resulting access token is stored
            encrypted on your device. We request only the minimum permissions
            needed to publish posts. You can revoke access at any time from the
            platform&apos;s settings or by disconnecting within SignalPost.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">
            6. No tracking or analytics
          </h2>
          <p>
            SignalPost does not include any analytics, telemetry, or tracking
            code. We do not collect usage data, crash reports, or behavioural
            data from the application.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">
            7. Data deletion
          </h2>
          <p>
            Since all data is stored locally, you can delete it at any time by
            removing your SignalPost configuration files. To disconnect social
            accounts, use the disconnect feature within SignalPost or revoke
            access from the platform directly.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">
            8. Your rights
          </h2>
          <p className="mb-3">Under UK GDPR, you have the right to:</p>
          <ul className="space-y-2 ml-4">
            {[
              "Know what data we process (this policy covers it — we process very little)",
              "Request deletion of any data held by Solent Signal",
              "Withdraw consent for admin sync at any time",
              "Lodge a complaint with the ICO (ico.org.uk)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#22c55e", flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mb-3">9. Contact</h2>
          <p>
            For any privacy questions about SignalPost, contact us at{" "}
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

        <div className="pt-4 border-t" style={{ borderColor: "#1e293b" }}>
          <p>
            See also:{" "}
            <Link
              href="/privacy-policy"
              style={{ color: "#22c55e" }}
              className="hover:opacity-80 transition-opacity"
            >
              Solent Signal Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
