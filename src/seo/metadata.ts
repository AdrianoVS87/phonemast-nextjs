import type { Metadata } from "next";
import { SITE_LOCALE, SITE_NAME, absoluteUrl } from "./site.ts";

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;
export const DEFAULT_SHARE_IMAGE = { url: "/images/og-handbook.jpg", width: 1200, height: 630 } as const;

export interface PageSeo {
  /** Full `<title>`, used as-is (no template suffix), 60 characters or fewer. */
  readonly title: string;
  /** 155 characters or fewer. */
  readonly description: string;
  /** Canonical path; normalised to a trailing slash. */
  readonly path: string;
  readonly type?: "website" | "article" | "profile";
  readonly image?: { readonly url: string; readonly width: number; readonly height: number; readonly alt?: string };
  readonly noIndex?: boolean;
  readonly publishedTime?: string;
  readonly modifiedTime?: string;
}

export interface LengthProblem {
  readonly field: "title" | "description";
  readonly length: number;
  readonly max: number;
}

export function lengthProblems(seo: Pick<PageSeo, "title" | "description">): LengthProblem[] {
  const problems: LengthProblem[] = [];
  const title = [...seo.title].length;
  const description = [...seo.description].length;
  if (title === 0 || title > TITLE_MAX) problems.push({ field: "title", length: title, max: TITLE_MAX });
  if (description === 0 || description > DESCRIPTION_MAX) problems.push({ field: "description", length: description, max: DESCRIPTION_MAX });
  return problems;
}

/**
 * Next.js metadata for one page: absolute title, self-referencing canonical on www with a trailing
 * slash, and Open Graph / Twitter tags whose URL is that same canonical.
 */
export function buildMetadata(seo: PageSeo): Metadata {
  const url = absoluteUrl(seo.path);
  const image = seo.image ?? DEFAULT_SHARE_IMAGE;
  const imageAlt = seo.image?.alt ?? seo.title;
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: seo.type ?? "website",
      images: [{ url: image.url, width: image.width, height: image.height, alt: imageAlt }],
      ...(seo.type === "article" && seo.publishedTime ? { publishedTime: seo.publishedTime } : {}),
      ...(seo.type === "article" && seo.modifiedTime ? { modifiedTime: seo.modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [image.url] },
    robots: seo.noIndex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
