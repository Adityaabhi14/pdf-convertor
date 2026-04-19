import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://omniformat.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OmniFormat AI Studio | Convert, Analyze, Summarize",
    template: "%s | OmniFormat AI Studio"
  },
  description:
    "Advanced file converter and AI document platform with premium workflows, Gemini intelligence, GPDatabase tuning, Google auth, and Razorpay checkout.",
  keywords: [
    "pdf converter",
    "smallpdf alternative",
    "ilovepdf alternative",
    "document summarizer",
    "gemini api integration",
    "razorpay subscription",
    "google auth nextjs"
  ],
  openGraph: {
    title: "OmniFormat AI Studio",
    description: "Convert, analyze, summarize, and automate files with AI.",
    url: siteUrl,
    siteName: "OmniFormat AI Studio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniFormat AI Studio",
    description: "Top-tier file conversion + AI workflows."
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
