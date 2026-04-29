import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConsentDefault from "@/components/analytics/ConsentDefault";
import GoogleScripts from "@/components/analytics/GoogleScripts";
import ConsentBanner from "@/components/consent/ConsentBanner";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Phone Mast Advice | Expert Lease & Rent Reviews | UK Specialists",
    template: "%s | Phone Mast Advice",
  },
  description:
    "Independent specialist telecom surveyors acting only for UK landlords. Expert phone mast lease renewals, rent reviews, and new lettings. 30+ years experience. Call 01691 791543.",
  metadataBase: new URL("https://phonemastadvice.co.uk"),
  alternates: {
    languages: {
      "en-GB": "https://phonemastadvice.co.uk",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    // URL is set per-page in their own metadata export
    siteName: "Phone Mast Advice",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Phone Mast Advice — Expert UK Telecom Surveyors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${jakarta.variable} ${inter.variable} antialiased`}
    >
      <head>
        {/* MUST be first: sets Google Consent Mode v2 defaults to denied
             before any Google script loads. See src/components/analytics/ConsentDefault.tsx */}
        <ConsentDefault />
        {/* Google Tag / GA4 / Ads — only render when env vars populated. */}
        <GoogleScripts />
      </head>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "1.125rem" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCtaBar />
        <WhatsAppButton />
        <ConsentBanner />
      </body>
    </html>
  );
}
