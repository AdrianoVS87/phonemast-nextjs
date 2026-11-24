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
    </section>
  );
}
