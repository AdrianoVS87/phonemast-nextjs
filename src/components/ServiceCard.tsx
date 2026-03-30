import Link from "next/link";

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Icon */}
      <div
        style={{
          width: "3rem",
          height: "3rem",
          backgroundColor: "rgba(27,79,114,0.08)",
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
      <h3
        style={{
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "1.1875rem",
          color: "#1B4F72",
          marginBottom: "0.75rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

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
          color: "#1B4F72",
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
