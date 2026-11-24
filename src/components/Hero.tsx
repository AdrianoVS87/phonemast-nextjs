import { COMPANY } from "@/content/company";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, CalendarIcon, WhatsAppIcon, ArrowRightIcon, CheckIcon } from "@/components/icons";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  /** Trailing words of the headline rendered in the lime accent (must match the end of `headline`). */
  highlight?: string;
}

/**
 * Homepage hero, redesigned 5 Nov 2026 from the "Phone Mast Advice Homepage Developer Package".
 * Same H1, copy, links and phone number as before; new layout, palette and mast artwork
 * (/images/hero-mast-v2.png, AI-generated for this site; transparent fades on the left, top and right; renamed on each edit so image caches refresh).
 */
export default function Hero({
  headline = "Independent phone mast advice, only for landlords",
  subheadline = "Independent specialist telecom surveyors acting only for UK landlords. Get expert help with phone mast leases, phone mast rent, renewals, reviews, and operator negotiations.",
  ctaText = "Free Lease Check",
  ctaHref = "/free-lease-check/",
  secondaryCtaText = "Free Rent Estimate",
  secondaryCtaHref = "/free-rent-estimate/",
  highlight = "only for landlords",
}: HeroProps) {
  const cut = highlight && headline.endsWith(highlight) ? headline.length - highlight.length : -1;

  return (
    <section className="hero-section hero-root" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true">
        <div className="hero-art-img">
          <Image
            src="/images/hero-mast-v2.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 700px) 85vw, (max-width: 1080px) 52vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "50% 0%" }} /* top-aligned: the mast tip is never cropped, only the landscape at the bottom */
          />
        </div>
        <div className="hero-art-blend" />
      </div>
      <div className="hero-hills" aria-hidden="true" />

      <div className="container-max hero-container hero-inner">
        <div className="hero-content">
          <div className="hero-trust-badge hero-eyebrow">
            <CheckIcon size={20} color="#b6f414" />
            Representing Landlords, Never Operators
          </div>

          <h1
            id="hero-title"
            className="hero-headline"
          >
            {cut > 0 ? (
              <>
                {headline.slice(0, cut)}
                <span>{highlight}</span>
              </>
            ) : (
              headline
            )}
          </h1>

          <p className="hero-subheadline">{subheadline}</p>

          <div className="hero-cta-group">
            <Link href={ctaHref} className="btn-primary hero-cta-primary">
              {ctaText}
              <ArrowRightIcon size={21} />
            </Link>
            <Link href={secondaryCtaHref} className="btn-secondary hero-cta-secondary">
              {secondaryCtaText}
              <ArrowRightIcon size={21} />
            </Link>
          </div>

          <div className="hero-contact hero-phone-strip">
            <a href={COMPANY.phone.href} aria-label={`Call us on ${COMPANY.phone.display}`}>
              <PhoneIcon size={22} color="#b6f414" />
              <strong>{COMPANY.phone.display}</strong>
            </a>
            <span className="hero-sep" aria-hidden="true" />
            <span className="hero-contact-item">
              <CalendarIcon size={22} color="#b6f414" />
              Mon–Fri 9am–5:30pm
            </span>
            <span className="hero-sep" aria-hidden="true" />
            <a href={COMPANY.whatsapp.href} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={22} color="#b6f414" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
