import { confirmedClaim } from "@/content/company";

export interface TestimonialCardProps {
  name: string;
  county: string;
  quote: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  county,
  quote,
  rating = 5,
}: TestimonialCardProps) {
  const verified = confirmedClaim("verifiedTestimonials");
  const stars = Math.max(0, Math.min(5, Math.round(rating)));
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div className="card testimonial-card">
      <p className="testimonial-stars" role="img" aria-label={`Rated ${stars} out of 5 stars`}>
        <span aria-hidden="true">{"★".repeat(stars)}</span>
        {stars < 5 ? (
          <span aria-hidden="true" className="testimonial-stars-off">
            {"★".repeat(5 - stars)}
          </span>
        ) : null}
      </p>

      {verified ? (
        <p className="verified-badge">
          <span aria-hidden="true">✓</span> {verified}
        </p>
      ) : null}

      <blockquote className="testimonial-quote">&ldquo;{quote}&rdquo;</blockquote>

      <footer className="testimonial-by">
        <div className="testimonial-initials" aria-hidden="true">
          {initials}
        </div>
        <div>
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-county">{county}</p>
        </div>
      </footer>
    </div>
  );
}
