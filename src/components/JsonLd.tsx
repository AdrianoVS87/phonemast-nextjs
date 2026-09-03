export interface ProfessionalServiceJsonLd {
  type: "ProfessionalService";
  name: string;
  url: string;
  telephone: string;
  email: string;
  description: string;
  priceRange?: string;
  areaServed?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
}

export interface ServiceJsonLd {
  type: "Service";
  name: string;
  description: string;
  provider: string;
  url: string;
  areaServed?: string;
}

export interface ArticleJsonLd {
  type: "Article";
  headline: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  description?: string;
  author?: string;
  image?: string;
}

export interface FAQJsonLd {
  type: "FAQPage";
  questions: Array<{ question: string; answer: string }>;
}

export interface WebSiteJsonLd {
  type: "WebSite";
  name: string;
  url: string;
  description: string;
}

export interface LocalBusinessJsonLd {
  type: "LocalBusiness";
  name: string;
  telephone: string;
  email: string;
  url: string;
  offices: Array<{
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
  }>;
}

type JsonLdData =
  | ProfessionalServiceJsonLd
  | ServiceJsonLd
  | ArticleJsonLd
  | FAQJsonLd
  | WebSiteJsonLd
  | LocalBusinessJsonLd;

function buildSchema(data: JsonLdData): object {
  switch (data.type) {
    case "ProfessionalService":
      return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: data.name,
        url: data.url,
        telephone: data.telephone,
        email: data.email,
        description: data.description,
        priceRange: data.priceRange,
        areaServed: data.areaServed ?? "United Kingdom",
        address: data.address
          ? {
              "@type": "PostalAddress",
              ...data.address,
            }
          : {
              "@type": "PostalAddress",
              streetAddress: "167-169 Great Portland Street, 5th Floor",
              addressLocality: "London",
              postalCode: "W1W 5PF",
              addressCountry: "GB",
            },
        legalName: "The Phone Mast Advice Company Ltd",
        alternateName: "Phone Mast Advice",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "Companies House",
          value: "13115582",
        },
        founder: {
          "@type": "Person",
          name: "Matt Restall",
          jobTitle: "Founder and Director",
        },
        knowsAbout: [
          "Phone mast lease renewals",
          "Phone mast rent reviews",
          "Electronic Communications Code",
          "Landlord and Tenant Act 1954 telecoms leases",
          "Phone mast lease sales",
          "Telecoms wayleaves",
        ],
        sameAs: [
          "https://www.linkedin.com/company/93187362",
          "https://www.facebook.com/thephonemastadvicecompany",
          "https://www.instagram.com/thephonemastadvicecompany/",
          "https://www.youtube.com/@PhoneMastAdviceCompany",
          "https://www.tiktok.com/@thephonemastadviceco",
          "https://twitter.com/phonemastadvice",
          "https://find-and-update.company-information.service.gov.uk/company/13115582",
        ],
      };

    case "Service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.name,
        description: data.description,
        url: data.url,
        areaServed: data.areaServed ?? "United Kingdom",
        provider: {
          "@type": "Organization",
          name: data.provider,
          url: "https://www.phonemastadvice.co.uk",
        },
      };

    case "Article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.headline,
        url: data.url,
        datePublished: data.datePublished,
        dateModified: data.dateModified ?? data.datePublished,
        description: data.description,
        author: data.author
          ? { "@type": "Person", name: data.author }
          : {
              "@type": "Organization",
              name: "The Phone Mast Advice Company",
              url: "https://www.phonemastadvice.co.uk",
            },
        image: data.image,
        publisher: {
          "@type": "Organization",
          name: "The Phone Mast Advice Company",
          url: "https://www.phonemastadvice.co.uk",
        },
      };

    case "FAQPage":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      };

    case "WebSite":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.name,
        url: data.url,
        description: data.description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${data.url}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    case "LocalBusiness":
      return data.offices.map((office) => ({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: data.name,
        telephone: data.telephone,
        email: data.email,
        url: data.url,
        address: {
          "@type": "PostalAddress",
          streetAddress: office.streetAddress,
          addressLocality: office.addressLocality,
          postalCode: office.postalCode,
          addressCountry: "GB",
        },
      }));
  }
}

export default function JsonLd({ data }: { data: JsonLdData }) {
  const schema = buildSchema(data);
  // LocalBusiness returns an array of schemas
  if (Array.isArray(schema)) {
    return (
      <>
        {schema.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </>
    );
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
