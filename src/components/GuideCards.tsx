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
    </section>
  );
}
