"use client";

import { useEffect, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 10000, suffix: "+", label: "Deals Completed" },
  { value: 3, suffix: "", label: "UK Offices" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("stats-animate");
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // CRITICAL: Render target value immediately for SEO (SSR) - never use client-only 0
  // Animation via CSS class, not JS content changes
  return (
    <span ref={ref} className="stats-counter">
      {target.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section
      style={{
        backgroundColor: "#f9f8f5",
        borderBottom: "1px solid #e5e7eb",
        padding: "2.5rem 0",
      }}
      aria-label="Company statistics"
    >
      <div className="container-max">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  color: "#1B4F72",
                  lineHeight: 1,
                  marginBottom: "0.375rem",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
