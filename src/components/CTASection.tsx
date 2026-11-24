import { COMPANY } from "@/content/company";
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
          <a href={COMPANY.phone.href}>
            <PhoneIcon size={20} color="#b6f414" />
            {COMPANY.phone.display}
          </a>
          <a href={`mailto:${COMPANY.email}`}>
            <MailIcon size={20} color="#b6f414" />
            {COMPANY.email}
          </a>
          <a href={COMPANY.whatsapp.href} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={20} color="#b6f414" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
