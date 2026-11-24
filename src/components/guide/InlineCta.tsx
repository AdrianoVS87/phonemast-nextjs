import Link from "next/link";

/** The single mid-page call to action. */
export default function InlineCta({ text, label, href }: { text: string; label: string; href: string }) {
  return (
    <aside className="inline-cta" aria-label="Next step">
      <p>{text}</p>
      <Link href={href} className="btn-primary">
        {label}
      </Link>
    </aside>
  );
}
