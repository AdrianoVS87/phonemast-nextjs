"use client";

import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HandbookPopup = lazy(() => import("./HandbookPopup"));

const SESSION_KEY = "handbook_popup_seen_v1";
const SCROLL_THRESHOLD = 0.45; // 45% of page height
const SHOW_DELAY_MS = 600;     // small delay to feel intentional, not jumpy
const MIN_DWELL_MS = 8_000;    // never fire in the first 8s of a visit

const EXCLUDED_PREFIXES = ["/handbook", "/studio", "/contact", "/free-lease-check", "/free-rent-estimate"];

function isExcluded(pathname: string | null): boolean {
  if (!pathname) return false;
  return EXCLUDED_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function HandbookPopupGate() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const excluded = isExcluded(pathname);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* private mode / disabled storage — fine to ignore */
    }
  }, []);

  useEffect(() => {
    if (excluded) return;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (alreadySeen) return;

    const startedAt = Date.now();
    let armed = true;
    let timer: number | null = null;

    const trigger = () => {
      if (!armed) return;
      if (Date.now() - startedAt < MIN_DWELL_MS) return;
      armed = false;
      timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      const ratio = doc.scrollTop / max;
      if (ratio >= SCROLL_THRESHOLD) trigger();
    };

    const onMouseLeave = (e: MouseEvent) => {
      // Desktop exit-intent: cursor leaves the top of the viewport
      if (e.clientY <= 0) trigger();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (timer !== null) window.clearTimeout(timer);
      armed = false;
    };
  }, [excluded, pathname]);

  if (excluded || !open) return null;

  return (
    <Suspense fallback={null}>
      <HandbookPopup source={`popup:${pathname ?? "/"}`} onClose={close} />
    </Suspense>
  );
}
