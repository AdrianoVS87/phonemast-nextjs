"use client";

import { useEffect, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// Same figures the site already states (TrustSignals, Footer offices, "we only act for landlords").
const stats: Stat[] = [
  { value: 30, suffix: "+", label: "Years' Experience" },
  { value: 10000, suffix: "+", label: "Deals Completed" },
  { value: 3, suffix: "", label: "UK Offices" },
  { value: 100, suffix: "%", label: "Landlord Focused" },
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
      {target.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-strip" aria-label="Company statistics">
      <div className="container-max stats-grid">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="stats-value">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="stats-label">{stat.label}</p>
          </div>
        ))}
      </div>
      <style>{`
        .stats-strip{background:linear-gradient(180deg,#eff5fa,#e8f0f8)}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);padding-top:1.75rem;padding-bottom:1.85rem}
        .stats-grid>div{display:flex;align-items:center;flex-direction:column;text-align:center;border-right:1px solid #c0ccd9;padding:0 .75rem}
        .stats-grid>div:last-child{border-right:0}
        .stats-value{font-family:var(--font-jakarta),system-ui,sans-serif;font-size:clamp(2rem,3.4vw,3.3rem);font-weight:800;letter-spacing:-.04em;line-height:1.1;color:#062d52;margin:0}
        .stats-label{font-size:1.0625rem;margin:.25rem 0 0;color:#374151}
        @media (max-width:700px){
          .stats-grid{grid-template-columns:1fr 1fr;gap:1.25rem 0;padding-top:1.5rem;padding-bottom:1.5rem}
          .stats-grid>div:nth-child(2){border-right:0}
          .stats-value{font-size:2.3rem}
          .stats-label{font-size:1rem}
        }
      `}</style>
    </section>
  );
}
