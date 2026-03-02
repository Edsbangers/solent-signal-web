import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeaconWrapper from "@/components/BeaconWrapper";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Solent Signal — Websites AI Actually Recommends",
    template: "%s — Solent Signal",
  },
  description:
    "GEO-optimised websites for Portsmouth & Solent area businesses. Get found by ChatGPT, Google AI & voice search. Made in Portsmouth.",
  keywords: [
    "GEO",
    "Generative Engine Optimisation",
    "Portsmouth website",
    "local business SEO",
    "ChatGPT optimisation",
    "Google AI Overview",
    "voice search",
    "Hampshire web design",
  ],
  openGraph: {
    title: "Solent Signal — Websites AI Actually Recommends",
    description:
      "GEO-optimised websites for Portsmouth & Solent area businesses.",
    url: "https://solentsignal.com",
    siteName: "Solent Signal",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solent Signal — Websites AI Actually Recommends",
    description:
      "GEO-optimised websites for Portsmouth & Solent area businesses.",
  },
  metadataBase: new URL("https://solentsignal.com"),
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Solent Signal",
  url: "https://solentsignal.com",
  description:
    "GEO-optimised websites for Portsmouth and Solent area businesses. We help local businesses get recommended by AI search engines including ChatGPT, Google AI Overview, and voice assistants.",
  email: "hello@solentsignal.com",
  areaServed: [
    { "@type": "City", name: "Portsmouth" },
    { "@type": "City", name: "Southampton" },
    { "@type": "City", name: "Fareham" },
    { "@type": "City", name: "Gosport" },
    { "@type": "AdministrativeArea", name: "Hampshire" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portsmouth",
    addressRegion: "Hampshire",
    addressCountry: "GB",
  },
  founder: {
    "@type": "Person",
    name: "Jason Misters",
    jobTitle: "Founder & IRCA Principal Auditor",
  },
  knowsAbout: [
    "GEO",
    "Generative Engine Optimisation",
    "Local SEO",
    "AI Search Optimisation",
    "Schema Markup",
    "Web Development",
    "ISO 42001",
    "AI Governance",
  ],
  priceRange: "££",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0DPPYSH1L9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0DPPYSH1L9');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BeaconWrapper />
        <Analytics />
      </body>
    </html>
  );
}
