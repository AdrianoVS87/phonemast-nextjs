/**
 * Pure JSON-LD builders. Every node gets a stable `@id` so nodes reference each other instead of
 * repeating the organisation on every page. Pages render one graph via `jsonLdGraph`.
 * Only mark up what the page shows.
 */
import { COMPANY, STATEMENTS } from "../content/company.ts";
import { SITE_NAME, SITE_URL, absoluteUrl } from "./site.ts";

export type JsonLdNode = { readonly "@type": string | readonly string[]; readonly [key: string]: unknown };

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${absoluteUrl(COMPANY.founder.profilePath)}#person`;

const ref = (id: string) => ({ "@id": id });

export function organization(): JsonLdNode {
  const office = COMPANY.registeredOffice;
  return {
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: COMPANY.legalName,
    alternateName: COMPANY.brandName,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}${COMPANY.logo}`,
    image: `${SITE_URL}${COMPANY.logo}`,
    description: `${STATEMENTS.independence} ${STATEMENTS.serviceArea}`,
    telephone: COMPANY.phone.international,
    email: COMPANY.email,
    identifier: { "@type": "PropertyValue", propertyID: "Companies House", value: COMPANY.registrationNumber },
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.locality,
      postalCode: office.postalCode,
      addressCountry: office.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: COMPANY.phone.international,
      email: COMPANY.email,
      areaServed: "GB",
      availableLanguage: "en-GB",
    },
    areaServed: COMPANY.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    founder: ref(FOUNDER_ID),
    ...(COMPANY.sameAs.length ? { sameAs: [...COMPANY.sameAs] } : {}),
  };
}

export function website(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-GB",
    publisher: ref(ORGANIZATION_ID),
  };
}

export interface Crumb {
  readonly name: string;
  /** Omit for the current page (schema.org allows the last item without `item`). */
  readonly path?: string;
}

export function breadcrumbList(crumbs: readonly Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
    })),
  };
}

export function founderPerson(): JsonLdNode {
  const f = COMPANY.founder;
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: f.name,
    jobTitle: f.jobTitle,
    url: absoluteUrl(f.profilePath),
    image: `${SITE_URL}${f.image}`,
    sameAs: [f.linkedIn],
    worksFor: ref(ORGANIZATION_ID),
  };
}

export interface ArticleInput {
  readonly path: string;
  readonly headline: string;
  readonly description: string;
  readonly datePublished: string;
  readonly dateModified: string;
  /** `@id` of the author Person; defaults to the founder. */
  readonly authorId?: string;
  readonly authorName?: string;
  readonly image?: string;
}

export function article(input: ArticleInput): JsonLdNode {
  const url = absoluteUrl(input.path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "en-GB",
    author: input.authorId || !input.authorName ? ref(input.authorId ?? FOUNDER_ID) : { "@type": "Person", name: input.authorName },
    publisher: ref(ORGANIZATION_ID),
    image: input.image ? `${SITE_URL}${input.image}` : `${SITE_URL}/images/og-handbook.jpg`,
  };
}

export interface ServiceInput {
  readonly path: string;
  readonly name: string;
  readonly description: string;
  readonly serviceType: string;
}

export function service(input: ServiceInput): JsonLdNode {
  const url = absoluteUrl(input.path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url,
    provider: ref(ORGANIZATION_ID),
    areaServed: COMPANY.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
  };
}

export interface QuestionAnswer {
  readonly question: string;
  readonly answer: string;
}

export function faqPage(path: string, items: readonly QuestionAnswer[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function profilePage(path: string, personId: string): JsonLdNode {
  return { "@type": "ProfilePage", "@id": `${absoluteUrl(path)}#page`, url: absoluteUrl(path), mainEntity: ref(personId) };
}

export function jsonLdGraph(nodes: readonly JsonLdNode[]): { "@context": "https://schema.org"; "@graph": readonly JsonLdNode[] } {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Serialised for a `<script type="application/ld+json">`; `<` is escaped so content can never close the tag. */
export function serialiseJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
