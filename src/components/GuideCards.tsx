import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

/**
 * "Start with the right guide" cards (design package, 5 Nov 2026).
 * Same four internal links the homepage carried before the redesign, in the same order.
 */
const guides = [
  { href: "/phone-mast-lease/", title: "Phone Mast Lease Advice", text: "Understand your agreement and protect your rights." },
  { href: "/phone-mast-rent/", title: "Phone Mast Rent Advice", text: "Find out what your site could be earning." },
  { href: "/phone-mast-services/lease-renewals/", title: "Lease Renewal Advice", text: "Negotiate on equal terms with operators." },
  { href: "/phone-mast-services/rent-reviews/", title: "Rent Review Advice", text: "Get expert evidence-led rent review support." },
];

export default function GuideCards() {
  return (
    <section className="guides-section" aria-labelledby="guides-heading">
      <div className="container-max">
        <p className="section-kicker">Start with the right guide</p>
        <h2 id="guides-heading" className="guides-heading">
          Clear advice for every stage of your phone mast agreement.
        </h2>
        <div className="guide-grid">
          {guides.map((g, i) => (
            <Link key={g.href} href={g.href} className="guide-card">
              <span className="guide-index">{String(i + 1).padStart(2, "0")}</span>
              <strong>{g.title}</strong>
              <span className="guide-text">{g.text}</span>
              <span className="guide-arrow" aria-hidden="true">
                <ArrowUpRightIcon size={22} />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .guides-section{padding:4.5rem 0 5rem;background:#fff}
        .guides-heading{font-family:var(--font-jakarta),system-ui,sans-serif;font-size:clamp(1.875rem,3vw,2.625rem);letter-spacing:-.03em;line-height:1.15;max-width:700px;margin:0;color:#092543;text-wrap:balance}
        .guide-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.125rem;margin-top:2.2rem}
        .guide-card{min-height:235px;background:#fff;border:1px solid #e2eaf1;border-radius:15px;box-shadow:0 8px 30px rgba(9,46,84,.06);padding:1.7rem 1.45rem 1.4rem;display:flex;align-items:flex-start;flex-direction:column;gap:.6rem;text-decoration:none;color:#092543;transition:transform .2s,border-color .2s,box-shadow .2s;position:relative}
        .guide-card:hover{transform:translateY(-4px);border-color:#8dd42e;box-shadow:0 18px 50px rgba(4,35,68,.13);color:#092543}
        .guide-card:focus-visible{outline:3px solid #0669af;outline-offset:3px}
        .guide-index{font-size:.875rem;letter-spacing:.08em;color:#3d8a17;font-weight:800;margin-bottom:.6rem}
        .guide-card strong{font-family:var(--font-jakarta),system-ui,sans-serif;font-size:1.1875rem;line-height:1.25;color:#092543}
        .guide-text{font-size:1.0625rem;color:#5b7087;line-height:1.45}
        .guide-arrow{position:absolute;bottom:1.25rem;right:1.4rem;color:#3b7e0a;display:inline-flex}
        @media (max-width:1080px){.guide-grid{grid-template-columns:repeat(2,1fr)}}
        @media (max-width:700px){
          .guides-section{padding:3.25rem 0 4rem}
          .guides-heading{font-size:1.875rem}
          .guide-grid{grid-template-columns:1fr;gap:.8rem;margin-top:1.5rem}
          .guide-card{min-height:0;padding:1.4rem 1.25rem 1.25rem}
          .guide-arrow{bottom:1.1rem;right:1.1rem}
        }
        @media (prefers-reduced-motion:reduce){.guide-card{transition:none}.guide-card:hover{transform:none}}
      `}</style>
    </section>
  );
}
