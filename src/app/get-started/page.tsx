import type { Metadata } from "next";
import GetStartedContent from "./GetStartedContent";

export const metadata: Metadata = {
  title: "Get Your Free AI Visibility Audit",
  description:
    "Find out how your Portsmouth business shows up in ChatGPT, Google AI & voice search — and what's missing. Free audit, no card required.",
  alternates: { canonical: "https://solentsignal.com/get-started" },
  openGraph: {
    title: "Free AI Visibility Audit — Solent Signal",
    description:
      "Find out how your Portsmouth business shows up in ChatGPT, Google AI & voice search.",
    url: "https://solentsignal.com/get-started",
  },
};

export default function GetStartedPage() {
  return <GetStartedContent />;
}
