import Link from "next/link";

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  /** Heading level for the title: h2 when the cards sit directly under the page H1. */
  headingLevel?: 2 | 3;
}

export default function ServiceCard({ icon, title, description, href, headingLevel = 3 }: ServiceCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Icon */}
      <div
        style={{
          width: "3rem",
          height: "3rem",
          backgroundColor: "rgba(4,43,77,0.08)",
          borderRadius: "0.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          marginBottom: "1.25rem",
        }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Title */}
      <Heading
        style={{
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "1.1875rem",
          color: "#042b4d",
          marginBottom: "0.75rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </Heading>

      {/* Description */}
      <p
        style={{
          color: "#4b5563",
          fontSize: "1rem",
          lineHeight: 1.65,
          flexGrow: 1,
          marginBottom: "1.5rem",
        }}
      >
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        style={{
          color: "#042b4d",
          fontWeight: 600,
          fontSize: "0.9375rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          textDecoration: "none",
        }}
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
