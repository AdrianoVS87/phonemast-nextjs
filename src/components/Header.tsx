"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/phone-mast-services" },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className="sticky top-0 z-50 w-full transition-shadow duration-200"
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
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
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
                    transition: "color 0.15s ease, border-color 0.15s ease",
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
            <a
              href="tel:01691791543"
              className="font-semibold"
              style={{ color: "#ffffff", fontSize: "1rem" }}
            >
              📞 01691 791543
            </a>

            {/* CTA pill */}
            <Link href="/free-rent-estimate" className="btn-pill">
              Free Rent Estimate
            </Link>
          </nav>

          {/* Mobile: phone + burger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:01691791543"
              style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 600 }}
            >
              01691 791543
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                minWidth: "44px",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <nav
            className="lg:hidden"
            aria-label="Mobile navigation"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingBottom: "1rem",
            }}
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      color: active ? "#a4ca62" : "#ffffff",
                      fontSize: "1.0625rem",
                      padding: "0.75rem 0",
                      display: "block",
                      fontWeight: active ? 700 : 500,
                      borderLeft: active ? "3px solid #a4ca62" : "3px solid transparent",
                      paddingLeft: "0.75rem",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/free-rent-estimate"
                onClick={() => setMobileOpen(false)}
                className="btn-pill"
                style={{ marginTop: "0.75rem", alignSelf: "flex-start" }}
              >
                Free Rent Estimate
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
