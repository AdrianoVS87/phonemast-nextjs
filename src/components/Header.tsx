import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/content/company";
import { OPERATORS } from "@/content/operators";
import { PhoneIcon } from "@/components/icons";

const SERVICES = [
  { label: "Rent reviews", href: "/phone-mast-services/rent-reviews/" },
  { label: "Lease renewals", href: "/phone-mast-services/lease-renewals/" },
  { label: "New lettings", href: "/phone-mast-services/new-lettings/" },
  { label: "Mast sales", href: "/phone-mast-services/mast-sales/" },
  { label: "Removal and redevelopment", href: "/phone-mast-services/removal-and-redevelopment/" },
  { label: "Electricity costs recovery", href: "/phone-mast-services/electricity-costs-recovery/" },
  { label: "Lease retrievals", href: "/phone-mast-services/lease-retrievals/" },
  { label: "Other services", href: "/phone-mast-services/other-services/" },
];

const GUIDES = [
  { label: "Phone mast rent", href: "/phone-mast-rent/" },
  { label: "Phone mast leases explained", href: "/phone-mast-lease/" },
  { label: "Phone mast operators", href: "/phone-mast-operators/" },
  { label: "Section 26 notices", href: "/section-26-notice/" },
  { label: "The Electronic Communications Code", href: "/electronic-communications-code/" },
];

const ABOUT = [
  { label: "About us", href: "/about-us/" },
  { label: "Our team", href: "/team/" },
];

const LINKS = [
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

type NavLink = { label: string; href: string };

function LinkList({ links }: { links: readonly NavLink[] }) {
  return (
    <ul>
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href}>{l.label}</Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Site header, server-rendered with no JavaScript: dropdowns and the mobile menu are native
 * <details> elements (click, tap and keyboard work by default), and CSS opens the desktop panels on
 * hover. One phone link and one call to action, as the sitewide CTA budget allows.
 */
export default function Header() {
  const operatorLinks = OPERATORS.map((o) => ({ label: o.name, href: `/phone-mast-operators/#${o.id}` }));
  return (
    <header className="site-header">
      <div className="container-max site-header-inner">
        <Link href="/" className="site-logo">
          <Image src="/images/logo-white.svg" alt="Phone Mast Advice home" width={180} height={48} priority />
        </Link>

        <nav className="nav-desktop" aria-label="Main navigation">
          <details className="nav-item">
            <summary>Services</summary>
            <div className="nav-panel nav-panel-wide">
              <div>
                <p className="nav-panel-heading">
                  <Link href="/phone-mast-services/">Our services</Link>
                </p>
                <LinkList links={SERVICES} />
              </div>
              <div>
                <p className="nav-panel-heading">
                  <Link href="/phone-mast-operators/">By operator</Link>
                </p>
                <LinkList links={operatorLinks} />
              </div>
              <div>
                <p className="nav-panel-heading">Guides</p>
                <LinkList links={GUIDES} />
              </div>
            </div>
          </details>
          <details className="nav-item">
            <summary>About</summary>
            <div className="nav-panel">
              <LinkList links={ABOUT} />
            </div>
          </details>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <a href={COMPANY.phone.href} className="nav-phone">
            <PhoneIcon size={18} color="#b6f414" />
            {COMPANY.phone.display}
          </a>
          <Link href="/free-rent-estimate/" className="btn-pill">
            Free rent estimate
          </Link>
        </nav>

        <div className="nav-mobile">
          <a href={COMPANY.phone.href} className="nav-phone">
            {COMPANY.phone.display}
          </a>
          <details className="mobile-menu">
            <summary aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </summary>
            <nav className="mobile-panel" aria-label="Mobile navigation">
              <p className="nav-panel-heading">Services</p>
              <LinkList links={[{ label: "All services", href: "/phone-mast-services/" }, ...SERVICES]} />
              <p className="nav-panel-heading">Guides</p>
              <LinkList links={GUIDES} />
              <p className="nav-panel-heading">About</p>
              <LinkList links={[...ABOUT, ...LINKS]} />
              <Link href="/free-rent-estimate/" className="btn-primary mobile-cta">
                Free rent estimate
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
