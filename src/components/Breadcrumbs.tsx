import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import { breadcrumbList } from "@/seo/schema";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Visible breadcrumb trail plus its BreadcrumbList. The current page is the last item and has no link. */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const crumbs = [{ name: "Home", path: "/" }, ...items.map((i) => ({ name: i.label, path: i.href }))];
  return (
    <>
      <StructuredData nodes={[breadcrumbList(crumbs)]} />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <div className="container-max">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {items.map((item) => (
              <li key={item.label}>
                <span aria-hidden="true">›</span>
                {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
