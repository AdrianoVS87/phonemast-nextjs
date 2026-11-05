/**
 * Four-benefit strip under the hero (design package, 5 Nov 2026).
 * Icons are original line drawings from the package; the claims repeat what the site already says
 * (landlord-only, rent reviews, lease terms, UK-wide).
 */
const items = [
  {
    title: "Landlord Only",
    text: "Independent & impartial",
    icon: (
      <>
        <path d="M24 4 41 11v12c0 11-7 17-17 21C14 40 7 34 7 23V11L24 4Z" />
        <path d="m16 24 6 6 11-13" />
      </>
    ),
  },
  {
    title: "Maximise Rent",
    text: "Expert rent review advice",
    icon: (
      <>
        <ellipse cx="19" cy="15" rx="12" ry="6" />
        <path d="M7 15v10c0 4 5 7 12 7 3 0 6-.6 8-2M7 21c0 4 5 7 12 7" />
        <ellipse cx="31" cy="29" rx="12" ry="6" />
        <path d="M19 29v9c0 4 5 7 12 7s12-3 12-7v-9M19 35c0 4 5 7 12 7s12-3 12-7" />
      </>
    ),
  },
  {
    title: "Lease Expertise",
    text: "Terms & negotiations",
    icon: <path d="M11 4h19l8 8v32H11Z M30 4v9h8M17 21h15M17 28h15M17 35h11" />,
  },
  {
    title: "UK Wide Service",
    text: "Nationwide landlord support",
    icon: (
      <>
        <path d="M24 44s15-17 15-27a15 15 0 1 0-30 0c0 10 15 27 15 27Z" />
        <circle cx="24" cy="17" r="5" />
      </>
    ),
  },
];

export default function BenefitsStrip() {
  return (
    <section className="benefits-strip" aria-label="Why work with us">
      <div className="container-max benefits-grid">
        {items.map((item) => (
          <div key={item.title} className="benefit">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              {item.icon}
            </svg>
            <div>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .benefits-strip{background:#fff;border-bottom:1px solid #e5edf5}
        .benefits-grid{display:grid;grid-template-columns:repeat(4,1fr);padding-top:1.5rem;padding-bottom:1.5rem}
        .benefit{display:flex;gap:.875rem;align-items:center;padding:.375rem 1.4rem;border-right:1px solid #c8d3df;min-width:0}
        .benefit:first-child{padding-left:0}
        .benefit:last-child{border-right:0;padding-right:0}
        .benefit svg{flex-shrink:0;width:44px;height:44px;stroke:#6fbf0d;stroke-width:2.1;fill:none;stroke-linejoin:round;stroke-linecap:round}
        .benefit div{display:flex;flex-direction:column;gap:.2rem}
        .benefit strong{font-family:var(--font-jakarta),system-ui,sans-serif;font-size:1.125rem;letter-spacing:-.01em;color:#092543;line-height:1.2}
        .benefit span{font-size:1rem;color:#50647b;line-height:1.3}
        @media (max-width:1080px){
          .benefits-grid{grid-template-columns:repeat(2,1fr);row-gap:1.25rem}
          .benefit:nth-child(2){border-right:0;padding-right:0}
          .benefit:nth-child(3){padding-left:0}
        }
        @media (max-width:700px){
          .benefits-grid{gap:1.25rem .75rem;padding-top:1.5rem;padding-bottom:1.5rem}
          .benefit,.benefit:nth-child(3){padding:0;border:0;align-items:flex-start;gap:.5rem}
          .benefit svg{width:32px;height:32px}
          .benefit strong{font-size:1rem}
          .benefit span{font-size:.9375rem}
        }
      `}</style>
    </section>
  );
}
