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
  headline = "Phone Mast Lease & Rent Advice for UK Landlords",
  subheadline = "Independent specialist telecom surveyors acting only for UK landlords. Get expert help with phone mast leases, phone mast rent, renewals, reviews, and operator negotiations.",
  ctaText = "Free Lease Check",
  ctaHref = "/free-lease-check/",
  secondaryCtaText = "Free Rent Estimate",
  secondaryCtaHref = "/free-rent-estimate/",
  highlight = "UK Landlords",
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
            // fetchPriority hints Chromium that this is the LCP candidate
            {...({ fetchpriority: "high" } as Record<string, string>)}
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
            <a href="tel:01691791543" aria-label="Call us on 01691 791543">
              <PhoneIcon size={22} color="#b6f414" />
              <strong>01691 791543</strong>
            </a>
            <span className="hero-sep" aria-hidden="true" />
            <span className="hero-contact-item">
              <CalendarIcon size={22} color="#b6f414" />
              Mon–Fri 9am–5:30pm
            </span>
            <span className="hero-sep" aria-hidden="true" />
            <a href="https://wa.me/447843352654" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={22} color="#b6f414" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-root{position:relative;isolation:isolate;overflow:hidden;background:linear-gradient(100deg,#063f74 2%,#07518f 49%,#197ac0 100%);color:#fff}
        /* Art layer spans the whole hero: the mast sits in a right-anchored box pushed past the right edge, and ONE blend
           layer on top carries the hero's own blues from fully opaque on the left to transparent over the mast, so there is
           no container edge and no colour step between the artwork and the background (Matt's note, 5 Nov 2026). */
        .hero-art{position:absolute;inset:0;z-index:-2;overflow:hidden}
                /* Wide and ultrawide screens (Adriano, 5 Nov 2026): the mast box is a FIXED 640px anchored to the page centre, like
           the 1200px content container, so the 552px artwork is never blown up past ~1.16x and the composition stays
           centred with plain gradient either side. The blend gradient is measured from the centre too. */
        .hero-art-img{position:absolute;top:0;bottom:0;left:calc(50% + 125px);width:640px}
        .hero-art-blend{position:absolute;inset:0;background:
          radial-gradient(ellipse 650px 500px at calc(50% - 260px) 50%,rgba(17,126,205,.38),transparent 75%),
          linear-gradient(180deg,rgba(5,44,80,.45) 0%,rgba(5,44,80,0) 38%),
          linear-gradient(0deg,rgba(6,63,116,.4) 0%,rgba(6,63,116,0) 32%),
          linear-gradient(90deg,#063f74 0,#07518f calc(50% - 60px),rgba(7,81,143,.9) calc(50% + 60px),rgba(10,95,160,.55) calc(50% + 190px),rgba(14,110,180,.2) calc(50% + 320px),rgba(25,122,192,0) calc(50% + 470px))}
        .hero-hills{position:absolute;z-index:-1;bottom:0;left:0;width:65%;height:28px;background:linear-gradient(180deg,transparent 0,rgba(22,82,46,.18) 45%,rgba(15,70,48,.42) 100%);clip-path:polygon(0 42%,5% 52%,12% 39%,17% 53%,23% 25%,32% 45%,42% 27%,50% 47%,64% 18%,80% 43%,100% 9%,100% 100%,0 100%)}
        .hero-inner{position:relative;min-height:610px;display:flex;align-items:center;padding-top:3rem;padding-bottom:3rem}
        .hero-content{max-width:760px}
        .hero-eyebrow{display:inline-flex;gap:.5rem;align-items:center;padding:.6rem 1.05rem;border:2px solid #b6f414;border-radius:100px;font-size:1rem;font-weight:700;color:#fff;background:rgba(5,43,77,.2)}
        .hero-headline{font-family:var(--font-jakarta),system-ui,sans-serif;font-size:clamp(2.5rem,4.5vw,4rem);line-height:1.08;letter-spacing:-.03em;font-weight:800;margin:1.5rem 0 1.25rem;color:#fff;max-width:850px;text-wrap:balance}
        .hero-headline span{color:#b6f414}
        .hero-subheadline{font-size:clamp(1.125rem,1.6vw,1.375rem);line-height:1.5;max-width:720px;margin:0 0 2rem;color:#f0f8ff;text-wrap:pretty}
        .hero-cta-group{display:flex;gap:1rem;flex-wrap:wrap;align-items:stretch}
        .hero-cta-group .btn-primary,.hero-cta-group .btn-secondary{min-width:240px;padding:1.125rem 1.65rem;font-size:1.1875rem;gap:1rem}
        .hero-cta-group .btn-secondary{background:rgba(4,47,86,.18)}
        .hero-cta-group .btn-secondary:hover{background:rgba(255,255,255,.12);color:#fff}
        .hero-contact{display:flex;gap:1.1rem;align-items:center;flex-wrap:wrap;margin-top:1.9rem;font-size:1.0625rem;line-height:1.4}
        .hero-contact a,.hero-contact .hero-contact-item{display:inline-flex;align-items:center;gap:.55rem;color:#fff;text-decoration:none;min-height:44px}
        .hero-contact a:hover{text-decoration:underline;color:#fff}
        .hero-contact strong{font-size:1.125rem}
        .hero-sep{height:25px;width:1px;background:rgba(255,255,255,.62)}
        @media (max-width:1199px){
          .hero-inner{min-height:575px}
          .hero-art-img{left:auto;right:-22%;width:62%;opacity:.55}
          .hero-art-blend{background:
            linear-gradient(180deg,rgba(5,44,80,.45) 0%,rgba(5,44,80,0) 38%),
            linear-gradient(90deg,#044677 0%,#07518f 48%,rgba(7,81,143,.9) 60%,rgba(10,95,160,.6) 72%,rgba(25,122,192,.3) 100%)}
        }
        @media (max-width:700px){
          .hero-inner{min-height:0;padding-top:1.5rem;padding-bottom:1.75rem}
          .hero-art-img{left:auto;right:-28%;width:90%;opacity:.35}
          .hero-art-blend{background:linear-gradient(90deg,rgba(3,47,86,.95) 0%,rgba(5,64,108,.75) 55%,rgba(6,68,114,.5) 100%)}
          .hero-hills{display:none}
          .hero-eyebrow{font-size:.875rem;padding:.45rem .75rem}
          .hero-headline{font-size:clamp(1.9rem,8.6vw,2.6rem);margin:1rem 0 .75rem;letter-spacing:-.02em}
          .hero-subheadline{font-size:1.0625rem;line-height:1.5;margin-bottom:1.25rem}
          .hero-cta-group{flex-direction:column;align-items:stretch;gap:.75rem}
          .hero-cta-group .btn-primary,.hero-cta-group .btn-secondary{min-width:0;width:100%;font-size:1.0625rem;padding:1rem}
          .hero-contact{gap:.5rem 1rem;margin-top:1.25rem;font-size:1rem}
          .hero-contact strong{font-size:1.0625rem}
          .hero-sep{display:none}
        }
      `}</style>
    </section>
  );
}
