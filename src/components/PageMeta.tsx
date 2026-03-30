import type { Metadata } from "next";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Generates a Next.js Metadata object for a page.
 * Usage: export const metadata = generateMetadata({ title, description, path });
 */
export function generateMetadata({
  title,
  description,
  path,
  image = "/og-default.jpg",
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `https://phonemastadvice.co.uk${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Phone Mast Advice",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// PageMeta can also be used as a server component wrapper — not needed in App Router
// but exported for convenience when composing metadata.
export default function PageMeta() {
  return null; // App Router uses generateMetadata export
}
