import { jsonLdGraph, serialiseJsonLd, type JsonLdNode } from "@/seo/schema";

/** One server-rendered JSON-LD graph. Pages pass the nodes for what they actually show. */
export default function StructuredData({ nodes }: { nodes: readonly JsonLdNode[] }) {
  if (nodes.length === 0) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiseJsonLd(jsonLdGraph(nodes)) }} />;
}
