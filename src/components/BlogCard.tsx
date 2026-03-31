"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blog-types";
import { formatDate } from "@/lib/blog-types";

const categoryColours: Record<string, { bg: string; text: string }> = {
  "Industry News": { bg: "#eff6ff", text: "#1d4ed8" },
  "Informative": { bg: "#f0fdf4", text: "#166534" },
  "Advice": { bg: "#fefce8", text: "#854d0e" },
  "Cases": { bg: "#fdf4ff", text: "#7e22ce" },
  "Uncategorised": { bg: "#f3f4f6", text: "#374151" },
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const colours = categoryColours[post.category] ?? categoryColours["Uncategorised"];

  return (
    <article
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(27,79,114,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {/* Category tag */}
      <div style={{ marginBottom: "1rem" }}>
        <span
          style={{
            display: "inline-block",
            backgroundColor: colours.bg,
            color: colours.text,
            fontSize: "0.8125rem",
            fontWeight: 600,
            padding: "0.25rem 0.75rem",
            borderRadius: "50px",
          }}
        >
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "1.1875rem",
          color: "#1a1a2e",
          lineHeight: 1.35,
          marginBottom: "0.75rem",
          flexGrow: 1,
        }}
      >
        <Link
          href={`/blog/${post.slug}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {post.title}
        </Link>
      </h2>

      {/* Excerpt */}
      <p
        style={{
          color: "#4b5563",
          fontSize: "1rem",
          lineHeight: 1.65,
          marginBottom: "1.5rem",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {post.excerpt}
      </p>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1rem",
          borderTop: "1px solid #f3f4f6",
        }}
      >
        <time dateTime={post.date} style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
          {formatDate(post.date)}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          style={{
            color: "#1B4F72",
            fontWeight: 600,
            fontSize: "0.9375rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.25rem",
            textDecoration: "none",
          }}
          aria-label={`Read ${post.title}`}
        >
          Read more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
