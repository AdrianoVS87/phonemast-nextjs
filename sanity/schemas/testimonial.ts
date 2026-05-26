import { defineField, defineType } from "sanity";

/**
 * Client testimonial.
 *
 * Rendered on the homepage testimonials grid. Authoring is owned by the
 * The Phone Mast Advice Company team (Charleen / Raquel) via /studio —
 * see TESTIMONIALS_SELF_SERVE_GUIDE.md.
 */
export const testimonial = defineType({
  name: "testimonial",
  title: "Client Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client name",
      type: "string",
      description: 'e.g. "Mr. Robert Kell" or "John & Patricia Hargreaves"',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "role",
      title: "Role or client type",
      type: "string",
      description:
        'Optional. e.g. "Director", "Rent Review Client", or leave blank.',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "location",
      title: "Location or company",
      type: "string",
      description:
        'Optional. County, town, or company — e.g. "Yorkshire" or "Compton Beauchamp Estates".',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 6,
      description:
        "The testimonial itself. Do not include surrounding quotation marks — the site adds them.",
      validation: (Rule) => Rule.required().min(30).max(1200),
    }),
    defineField({
      name: "rating",
      title: "Rating (1–5 stars)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: "datePublished",
      title: "Date received",
      type: "date",
      description: "Date the testimonial was received. Used for sorting (newest first when no manual order).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Show on website",
      type: "boolean",
      initialValue: true,
      description:
        "Tick to display this testimonial on the homepage. Untick to keep it in Sanity but hide it from the site.",
    }),
    defineField({
      name: "order",
      title: "Manual order (optional)",
      type: "number",
      description:
        "Optional. Lower numbers appear first. Leave blank to sort by date (newest first).",
    }),
  ],
  preview: {
    select: {
      name: "name",
      role: "role",
      location: "location",
      featured: "featured",
      rating: "rating",
    },
    prepare({ name, role, location, featured, rating }) {
      const subParts = [role, location].filter(Boolean).join(" — ");
      const stars = "★".repeat(rating ?? 5);
      return {
        title: `${featured === false ? "[HIDDEN] " : ""}${name}`,
        subtitle: subParts ? `${stars}  ·  ${subParts}` : stars,
      };
    },
  },
  orderings: [
    {
      title: "Manual order, then newest first",
      name: "manualThenDate",
      by: [
        { field: "order", direction: "asc" },
        { field: "datePublished", direction: "desc" },
      ],
    },
    {
      title: "Newest first",
      name: "dateDesc",
      by: [{ field: "datePublished", direction: "desc" }],
    },
  ],
});
