import { STATEMENTS } from "@/content/company";
import { ROUTES } from "@/seo/routes";
import { SITE_LOCALE, SITE_NAME, SITE_URL } from "@/seo/site";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/consent/ConsentBanner";
import ClickIdCapture from "@/components/analytics/ClickIdCapture";

// Two variable fonts, Latin only, self-hosted by next/font with size-adjusted fallbacks (no layout
// shift on swap). Variable files carry every weight the design uses (400 to 800) in one request each.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

/** Defaults for pages without their own metadata (404s). Every route sets its own through buildMetadata. */
export const metadata: Metadata = {
  title: { default: ROUTES.home.title, template: "%s | Phone Mast Advice" },
  description: `${STATEMENTS.independence} ${STATEMENTS.freeReview}`,
  metadataBase: new URL(SITE_URL),
  openGraph: { type: "website", locale: SITE_LOCALE, siteName: SITE_NAME },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${jakarta.variable} ${inter.variable} antialiased`}>
      <head>
        {/* Before first paint: if a consent decision is stored, hide the server-rendered banner via CSS. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('cookie_consent_v1'))document.documentElement.setAttribute('data-consent','set')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Google tags load from the banner only after consent (src/lib/googleTags.ts). */}
        <ConsentBanner />
        <ClickIdCapture />
      </body>
    </html>
  );
}
