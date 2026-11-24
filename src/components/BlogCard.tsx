import Link from "next/link";
import { formatDate } from "@/lib/blog-types";

export interface BlogCardPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
}

const CATEGORY_CLASS: Record<string, string> = {
  "Industry News": "cat-news",
  Informative: "cat-informative",
  Advice: "cat-advice",
  Cases: "cat-cases",
};

/** Server-rendered card: category, title, author and date, short excerpt. Hover is CSS only. */
export default function BlogCard({ post }: { post: BlogCardPost }) {
  return (
    <article className="blog-card">
      <span className={`blog-card-category ${CATEGORY_CLASS[post.category] ?? "cat-other"}`}>{post.category}</span>
      <h2>
        <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
      </h2>
      <p className="blog-card-meta">
        {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <p className="blog-card-excerpt">{post.excerpt.length > 160 ? `${post.excerpt.slice(0, post.excerpt.lastIndexOf(" ", 157))}…` : post.excerpt}</p>
    </article>
  );
}
