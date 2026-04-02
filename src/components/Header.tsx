"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { label: "Rent Reviews", href: "/phone-mast-services/rent-reviews" },
  { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals" },
  { label: "New Lettings", href: "/phone-mast-services/new-lettings" },
  { label: "Mast Sales", href: "/phone-mast-services/mast-sales" },
  { label: "Removal & Redevelopment", href: "/phone-mast-services/removal-and-redevelopment" },
  { label: "Electricity Costs Recovery", href: "/phone-mast-services/electricity-costs-recovery" },
  { label: "Lease Retrievals", href: "/phone-mast-services/lease-retrievals" },
  { label: "Other Services", href: "/phone-mast-services/other-services" },
];

const operatorLinks = [
  { label: "Vodafone", href: "/vodafone-phone-mast-lease" },
  { label: "O2", href: "/o2-phone-mast-lease" },
  { label: "EE", href: "/ee-phone-mast-lease" },
  { label: "Three", href: "/three-phone-mast-lease" },
  { label: "CTIL / Cornerstone", href: "/ctil-cornerstone-phone-mast-lease" },
  { label: "Cellnex", href: "/cellnex-phone-mast-lease" },
  { label: "On Tower (formerly Arqiva)", href: "/on-tower-arqiva-phone-mast-lease" },
  { label: "Airwave", href: "/airwave-phone-mast-lease" },
  { label: "WIG", href: "/wireless-infrastructure-group-phone-mast-lease" },
];

const navLinks = [
  { label: "About", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [operatorsOpen, setOperatorsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOperatorsOpen, setMobileOperatorsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 8;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
        setOperatorsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const isServicesActive =
    pathname.startsWith("/phone-mast-services") ||
    pathname.includes("-phone-mast-lease");

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "#1B4F72",
        boxShadow: scrolled ? "0 2px 16px rgba(27,79,114,0.18)" : "none",
      }}
    >
      <div className="container-max">
        <div
          className="flex items-center justify-between"
          style={{ paddingTop: "0.875rem", paddingBottom: "0.875rem" }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Phone Mast Advice — Home">
            <Image
              src="/images/logo-all-white.svg"
              alt="Phone Mast Advice"
              width={180}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-5"
            aria-label="Main navigation"
            ref={dropdownRef}
          >
            {/* Services mega dropdown */}
            <div className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setOperatorsOpen(false); }}
                onMouseEnter={() => setServicesOpen(true)}
                className="font-medium transition-colors duration-150 flex items-center gap-1"
                style={{
                  color: isServicesActive ? "#a4ca62" : "#ffffff",
                  fontSize: "1rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  borderBottom: isServicesActive ? "2px solid #a4ca62" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ marginTop: 1 }}>
                  <path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => { setServicesOpen(false); }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "0.5rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
                    width: "680px",
                    zIndex: 100,
                    padding: "1.5rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "0.25rem",
                  }}
                >
                  {/* Column 1: Services */}
                  <div>
                    <Link href="/phone-mast-services" onClick={() => setServicesOpen(false)}
                      style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#1B4F72", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: "0.75rem", textDecoration: "none" }}>
                      Our Services
                    </Link>
                    {serviceLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setServicesOpen(false)}
                        style={{ display: "block", padding: "0.375rem 0", color: "#1a1a2e", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1B4F72"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#1a1a2e"; }}>
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Column 2: Operators */}
                  <div style={{ borderLeft: "1px solid #f0f0f0", paddingLeft: "1.25rem" }}>
                    <Link href="/phone-mast-services/lease-renewals" onClick={() => setServicesOpen(false)}
                      style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#1B4F72", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: "0.75rem", textDecoration: "none" }}>
                      By Operator
                    </Link>
                    {operatorLinks.map((op) => (
                      <Link key={op.href} href={op.href} onClick={() => setServicesOpen(false)}
                        style={{ display: "block", padding: "0.375rem 0", color: "#1a1a2e", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1B4F72"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#1a1a2e"; }}>
                        {op.label}
                      </Link>
                    ))}
                  </div>

                  {/* Column 3: 2026 + CTA */}
                  <div style={{ borderLeft: "1px solid #f0f0f0", paddingLeft: "1.25rem" }}>
                    <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#1B4F72", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                      2026 Updates
                    </span>
                    <Link href="/phone-mast-rent-2026" onClick={() => setServicesOpen(false)}
                      style={{ display: "block", padding: "0.5rem 0.75rem", marginBottom: "0.5rem", color: "#1a1a2e", fontSize: "0.875rem", textDecoration: "none", backgroundColor: "#f9f8f5", borderRadius: "8px", borderLeft: "3px solid #a4ca62", transition: "background 0.15s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f0efe8"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f8f5"; }}>
                      <span style={{ fontWeight: 600 }}>Phone Mast Rent 2026</span>
                      <span style={{ display: "block", fontSize: "0.75rem", color: "#71717a", marginTop: "0.125rem" }}>PSTI Act changes 7 April</span>
                    </Link>
                    <Link href="/phone-mast-lease-2026" onClick={() => setServicesOpen(false)}
                      style={{ display: "block", padding: "0.5rem 0.75rem", marginBottom: "1rem", color: "#1a1a2e", fontSize: "0.875rem", textDecoration: "none", backgroundColor: "#f9f8f5", borderRadius: "8px", borderLeft: "3px solid #a4ca62", transition: "background 0.15s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f0efe8"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f8f5"; }}>
                      <span style={{ fontWeight: 600 }}>Phone Mast Lease 2026</span>
                      <span style={{ display: "block", fontSize: "0.75rem", color: "#71717a", marginTop: "0.125rem" }}>Code renewals explained</span>
                    </Link>
                    <Link href="/free-rent-estimate" onClick={() => setServicesOpen(false)}
                      style={{ display: "block", padding: "0.625rem 1rem", backgroundColor: "#a4ca62", color: "#1a1a2e", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", borderRadius: "8px", textAlign: "center" as const, transition: "background 0.15s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#8fb854"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#a4ca62"; }}>
                      Free Rent Estimate →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other nav links */}
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium transition-colors duration-150"
                  style={{
                    color: active ? "#a4ca62" : "#ffffff",
                    fontSize: "1rem",
                    textDecoration: "none",
                    borderBottom: active ? "2px solid #a4ca62" : "2px solid transparent",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#a4ca62";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = "#a4ca62";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = active ? "#a4ca62" : "#ffffff";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = active ? "#a4ca62" : "transparent";
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Phone number */}
            <a href="tel:01691791543" className="font-semibold" style={{ color: "#ffffff", fontSize: "1rem" }}>
              📞 01691 791543
            </a>

            {/* CTA pill */}
            <Link href="/free-rent-estimate" className="btn-pill">
              Free Rent Estimate
            </Link>
          </nav>

          {/* Mobile: phone + burger */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:01691791543" style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 600 }}>
              01691 791543
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "0.75rem", minWidth: "48px", minHeight: "48px",
                display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff",
              }}
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingBottom: "1rem" }}>
            <div className="flex flex-col gap-1 pt-2">
              {/* Mobile Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  color: isServicesActive ? "#a4ca62" : "#ffffff",
                  fontSize: "1.0625rem", padding: "0.75rem 0.75rem",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  background: "none", border: "none", cursor: "pointer", width: "100%",
                  fontWeight: isServicesActive ? 700 : 500,
                  borderLeft: isServicesActive ? "3px solid #a4ca62" : "3px solid transparent",
                }}
              >
                Services
                <span style={{ fontSize: "0.75rem" }}>{mobileServicesOpen ? "▲" : "▼"}</span>
              </button>
              {mobileServicesOpen && (
                <div style={{ paddingLeft: "1.5rem" }}>
                  <Link href="/phone-mast-services" onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "0.5rem 0", color: "#a4ca62", fontSize: "0.9375rem", fontWeight: 600 }}>
                    All Services
                  </Link>
                  {serviceLinks.map((link) => (
                    <div key={link.href}>
                      <Link href={link.href} onClick={() => setMobileOpen(false)}
                        style={{ display: "block", padding: "0.5rem 0", color: "#ffffff", fontSize: "0.9375rem" }}>
                        {link.label}
                      </Link>
                      {link.label === "Lease Renewals" && (
                        <>
                          <button onClick={() => setMobileOperatorsOpen(!mobileOperatorsOpen)}
                            style={{ color: "#a4ca62", fontSize: "0.8125rem", background: "none", border: "none", cursor: "pointer", paddingLeft: "0.75rem", paddingTop: "0.25rem", paddingBottom: "0.25rem" }}>
                            {mobileOperatorsOpen ? "▲ Operators" : "▼ Operators"}
                          </button>
                          {mobileOperatorsOpen && (
                            <div style={{ paddingLeft: "1.5rem" }}>
                              {operatorLinks.map((op) => (
                                <Link key={op.href} href={op.href} onClick={() => setMobileOpen(false)}
                                  style={{ display: "block", padding: "0.375rem 0", color: "rgba(255,255,255,0.85)", fontSize: "0.875rem" }}>
                                  {op.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                  <Link href="/phone-mast-rent-2026" onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "0.5rem 0", color: "#ffffff", fontSize: "0.9375rem" }}>
                    Phone Mast Rent 2026
                  </Link>
                  <Link href="/phone-mast-lease-2026" onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "0.5rem 0", color: "#ffffff", fontSize: "0.9375rem" }}>
                    Phone Mast Lease 2026
                  </Link>
                </div>
              )}

              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                    style={{
                      color: active ? "#a4ca62" : "#ffffff", fontSize: "1.0625rem",
                      padding: "0.75rem 0.75rem", display: "block", fontWeight: active ? 700 : 500,
                      borderLeft: active ? "3px solid #a4ca62" : "3px solid transparent",
                    }}>
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/free-rent-estimate" onClick={() => setMobileOpen(false)}
                className="btn-pill" style={{ marginTop: "0.75rem", marginLeft: "0.75rem", alignSelf: "flex-start" }}>
                Free Rent Estimate
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
