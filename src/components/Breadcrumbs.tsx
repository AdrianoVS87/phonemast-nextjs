import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://phonemastadvice.co.uk${item.href ?? ""}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          backgroundColor: "#f9f8f5",
          borderBottom: "1px solid #e5e7eb",
          padding: "0.75rem 0",
        }}
      >
        <div className="container-max">
          <ol
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.25rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: "0.9375rem",
            }}
          >
            <li>
              <Link
                href="/"
                style={{ color: "#1B4F72" }}
              >
                Home
              </Link>
            </li>
            {items.map((item, index) => (
              <li
                key={index}
                style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
              >
                <span style={{ color: "#9ca3af", margin: "0 0.25rem" }}>›</span>
                {item.href ? (
                  <Link href={item.href} style={{ color: "#1B4F72" }}>
                    {item.label}
                  </Link>
                ) : (
                  <span style={{ color: "#6b7280" }} aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
