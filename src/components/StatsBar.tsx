"use client";

import { useEffect, useRef, useState } from "react";

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
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
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
