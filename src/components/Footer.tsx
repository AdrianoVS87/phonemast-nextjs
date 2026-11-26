import Link from "next/link";
import Image from "next/image";
import ManageCookiesLink from "@/components/consent/ManageCookiesLink";
import { PhoneIcon, MailIcon, WhatsAppIcon, FacebookIcon, InstagramIcon, XIcon } from "@/components/icons";
import { COMPANY, SOCIAL_PROFILES, STATEMENTS, registrationLine } from "@/content/company";

const SOCIAL_ICONS = { Facebook: FacebookIcon, Instagram: InstagramIcon, X: XIcon } as const;

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Rent reviews", href: "/phone-mast-services/rent-reviews/" },
      { label: "Lease renewals", href: "/phone-mast-services/lease-renewals/" },
      { label: "New lettings", href: "/phone-mast-services/new-lettings/" },
      { label: "Mast sales", href: "/phone-mast-services/mast-sales/" },
      { label: "Removal and redevelopment", href: "/phone-mast-services/removal-and-redevelopment/" },
      { label: "Electricity costs recovery", href: "/phone-mast-services/electricity-costs-recovery/" },
      { label: "Lease retrievals", href: "/phone-mast-services/lease-retrievals/" },
      { label: "Other services", href: "/phone-mast-services/other-services/" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { label: "Phone mast rent", href: "/phone-mast-rent/" },
      { label: "Phone mast leases explained", href: "/phone-mast-lease/" },
      { label: "Phone mast operators", href: "/phone-mast-operators/" },
      { label: "Electronic Communications Code", href: "/electronic-communications-code/" },
      { label: "Section 26 notices", href: "/section-26-notice/" },
      { label: "Solicitor or surveyor?", href: "/phone-mast-solicitors/" },
      { label: "News and case notes", href: "/blog/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about-us/" },
      { label: "Our team", href: "/team/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Privacy policy", href: "/privacy-policy/" },
      { label: "Cookie policy", href: "/cookie-policy/" },
      { label: "Disclaimer", href: "/disclaimer/" },
    ],
  },
];

/** Site footer: server-rendered, every contact detail from src/content/company.ts. */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-max site-footer-main">
        <div className="site-footer-brand">
          <Image src="/images/logo-white.svg" alt="Phone Mast Advice" width={180} height={48} />
          <p>{STATEMENTS.independence}</p>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.heading} aria-label={col.heading} className="site-footer-col">
            <h2>{col.heading}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="site-footer-col">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={COMPANY.phone.href}>
                <PhoneIcon size={16} color="#b6f414" /> {COMPANY.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`}>
                <MailIcon size={16} color="#b6f414" /> {COMPANY.email}
              </a>
            </li>
            <li>
              <a href={COMPANY.whatsapp.href} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} color="#b6f414" /> WhatsApp
              </a>
            </li>
          </ul>
          <h2>Follow us</h2>
          <ul>
            {SOCIAL_PROFILES.map((p) => {
              const Icon = SOCIAL_ICONS[p.network];
              return (
                <li key={p.network}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.network}: @${p.handle} (opens in a new tab)`}>
                    <Icon size={16} color="#ffffff" /> {p.network}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="container-max">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. {registrationLine()}
          </p>
          <ManageCookiesLink className="site-footer-cookies" />
        </div>
      </div>
    </footer>
  );
}
