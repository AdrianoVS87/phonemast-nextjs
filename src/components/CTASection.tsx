import Link from "next/link";
import { PhoneIcon, MailIcon, WhatsAppIcon, ArrowUpRightIcon } from "@/components/icons";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
}

/**
 * Closing call-to-action band (design package, 5 Nov 2026). Same props and links as before.
 */
export default function CTASection({
  headline = "Ready to Get Expert Phone Mast Advice?",
  subheadline = "Contact us today for a free, no-obligation consultation. We only act for landlords — never for mobile phone operators.",
  ctaText = "Get Your Free Rent Estimate",
  ctaHref = "/free-rent-estimate/",
}: CTASectionProps) {
  return (
    <section className="final-cta" aria-labelledby="cta-headline">
      <div className="container-max">
        <div className="cta-layout">
          <div>
            <p className="section-kicker cta-kicker">Independent advice</p>
            <h2 id="cta-headline" className="cta-heading">
              {headline}
            </h2>
            <p className="cta-sub">{subheadline}</p>
          </div>
          <div className="cta-actions">
            <Link href={ctaHref} className="btn-primary cta-btn">
              {ctaText}
              <ArrowUpRightIcon size={20} />
            </Link>
            <Link href="/contact/" className="cta-contact-link">
              or contact us online
            </Link>
          </div>
        </div>

        <div className="cta-contact">
          <a href="tel:01691791543">
            <PhoneIcon size={20} color="#b6f414" />
            01691 791543
          </a>
          <a href="mailto:info@phonemastadvice.co.uk">
            <MailIcon size={20} color="#b6f414" />
            info@phonemastadvice.co.uk
          </a>
          <a href="https://wa.me/447843352654" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={20} color="#b6f414" />
            WhatsApp
          </a>
        </div>
      </div>
      <style>{`
        .final-cta{background:#082f54;color:#fff;padding:3.5rem 0 3rem}
        .cta-layout{display:flex;align-items:center;justify-content:space-between;gap:2.2rem}
        .cta-kicker{color:#b6f414}
        .cta-heading{font-family:var(--font-jakarta),system-ui,sans-serif;font-size:clamp(1.875rem,3vw,2.625rem);letter-spacing:-.03em;line-height:1.15;max-width:700px;margin:0 0 .5rem;color:#fff;text-wrap:balance}
        .cta-sub{margin:0;color:#b9cede;font-size:1.125rem;line-height:1.6;max-width:640px}
        .cta-actions{display:flex;flex-direction:column;align-items:flex-start;gap:.75rem;flex-shrink:0}
        .cta-btn{font-size:1.0625rem;padding:1.0625rem 1.5rem;gap:.85rem}
        .cta-contact-link{color:#d7e5f2;font-size:1rem;text-decoration:underline;text-underline-offset:3px}
        .cta-contact-link:hover{color:#fff}
        .cta-contact{display:flex;flex-wrap:wrap;gap:1rem 2rem;margin-top:2.25rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.14)}
        .cta-contact a{display:inline-flex;align-items:center;gap:.55rem;color:#fff;font-size:1.0625rem;font-weight:600;text-decoration:none;min-height:44px}
        .cta-contact a:hover{color:#fff;text-decoration:underline}
        @media (max-width:860px){
          .cta-layout{align-items:flex-start;flex-direction:column;gap:1.5rem}
          .cta-actions{width:100%}
          .cta-btn{width:100%}
        }
      `}</style>
    </section>
  );
}
