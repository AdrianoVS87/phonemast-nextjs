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
    <div className="card service-card">
      <div className="service-card-icon" aria-hidden="true">
        {icon}
      </div>
      <Heading className="service-card-title">{title}</Heading>
      <p className="service-card-text">{description}</p>
      <Link href={href} className="service-card-link" aria-label={`Learn more about ${title}`}>
        Learn more
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
