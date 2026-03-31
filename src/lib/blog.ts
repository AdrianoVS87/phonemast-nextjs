import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "./blog-types";

export type { BlogPost };
export { formatDate } from "./blog-types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug)).filter(Boolean) as BlogPost[];
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug: data.slug || slug,
    title: data.title || slug,
    date: data.date || "",
    category: data.category || "Uncategorised",
    excerpt: data.excerpt || content.slice(0, 200).replace(/\n/g, " ") + "...",
    author: data.author || "Matt Restall",
    content,
  };
}
