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
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Stars */}
      <div
        style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{
              color: i < rating ? "#a4ca62" : "#d1d5db",
              fontSize: "1.125rem",
            }}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <blockquote
        style={{
          margin: 0,
          padding: 0,
          color: "#374151",
          fontSize: "1.0625rem",
          lineHeight: 1.7,
          flexGrow: 1,
          fontStyle: "italic",
          marginBottom: "1.5rem",
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {/* Initials avatar */}
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            backgroundColor: "#1B4F72",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "0.875rem",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.9375rem",
              color: "#1a1a2e",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              margin: 0,
            }}
          >
            {county}
          </p>
        </div>
      </footer>
    </div>
  );
}
