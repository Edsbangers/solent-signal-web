import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeaconWrapper from "@/components/BeaconWrapper";
import StickyCTA from "@/components/StickyCTA";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Solent Signal — Websites AI Actually Recommends",
    template: "%s — Solent Signal",
  },
  description:
    "GEO-optimised websites for Portsmouth & Solent area businesses. Get found by ChatGPT, Google AI & voice search. Made in Portsmouth.",
  keywords: [
    "AI Visibility Audit Portsmouth",
    "GEO SEO Agency Portsmouth",
    "IRCA Registered Principal Auditor Portsmouth",
    "E-E-A-T Website Optimisation UK",
    "AI-driven Business Growth Solent",
    "ISO Compliant Digital Strategy",
    "ChatGPT Optimisation for Portsmouth Businesses",
    "Local SEO for Solent Trades",
    "Digital Authority Audit Hampshire",
    "GEO",
    "Generative Engine Optimisation",
    "Google AI Overview",
    "voice search",
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
  other: {
    "facebook-domain-verification": "dkl5p0464tdlxgu8rcyomro5mhd49y",
    "apple-domain-verification": "PPr9e6qG4ICKXU4kPjvhDLeDTZkwrajADs1gYDOpU_0",
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.solentsignal.com/#organization",
      name: "Solent Signal",
      alternateName: "Solent Signal - Agentic Solutions",
      url: "https://www.solentsignal.com",
      description:
        "GEO-optimised websites for Portsmouth & Solent area businesses. AI search optimisation, web design, and digital authority engineering.",
      email: "hello@solentsignal.com",
      knowsAbout: [
        "GEO",
        "Generative Engine Optimisation",
        "ISO Auditing",
        "AI Search Visibility",
        "E-E-A-T Website Optimisation",
        "Schema Markup",
        "ISO 42001",
        "AI Governance",
      ],
      areaServed: [
        { "@type": "City", name: "Portsmouth" },
        { "@type": "City", name: "Southampton" },
        { "@type": "City", name: "Fareham" },
        { "@type": "City", name: "Gosport" },
        { "@type": "City", name: "Havant" },
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
        jobTitle: "Founder & IRCA Registered Principal Auditor",
      },
      priceRange: "£49-£179/month",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "2",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.solentsignal.com/#website",
      url: "https://www.solentsignal.com",
      name: "Solent Signal",
      publisher: { "@id": "https://www.solentsignal.com/#organization" },
    },
  ],
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
            __html: JSON.stringify(siteSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BeaconWrapper />
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
