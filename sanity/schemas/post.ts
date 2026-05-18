import { defineField, defineType } from "sanity";

/**
 * Blog Post schema.
 *
 * Fields mirror the MDX frontmatter at src/content/blog/*.mdx exactly,
 * so renderer behaviour (remark → HTML) is unchanged after migration.
 * Body is stored as raw Markdown in `content` (text) — keeps custom
 * inline HTML (<figure>, <img>) and external links intact.
 */
export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Advice", value: "Advice" },
          { title: "Cases", value: "Cases" },
          { title: "Industry News", value: "Industry News" },
          { title: "Informative", value: "Informative" },
          { title: "Guides", value: "Guides" },
          { title: "Operators", value: "Operators" },
          { title: "Uncategorised", value: "Uncategorised" },
        ],
      },
      initialValue: "Advice",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Matt Restall",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description:
        "Used as meta description, OG card, and blog index card. ~158 chars ideal for SEO.",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image (path)",
      type: "string",
      description:
        'Absolute path under /public, e.g. "/images/blog/my-post.jpg". Leave empty to use default OG image.',
    }),
    defineField({
      name: "featuredImageAlt",
      title: "Featured Image Alt Text",
      type: "string",
      description: "Required if featuredImage is set.",
    }),
    defineField({
      name: "featuredImageCredit",
      title: "Featured Image Credit",
      type: "string",
      description: 'Optional, e.g. "Image credit: David Neale".',
    }),
    defineField({
      name: "content",
      title: "Content (Markdown)",
      type: "text",
      rows: 40,
      description:
        "Raw Markdown body. Supports inline HTML (<figure>, <img>), links, ## headings, blockquotes, lists. Rendered via remark → HTML at request time.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      date: "date",
    },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: `${subtitle || "Uncategorised"} · ${
          date ? new Date(date).toLocaleDateString("en-GB") : "No date"
        }`,
      };
    },
  },
  orderings: [
    {
      title: "Date (newest first)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Title (A→Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
