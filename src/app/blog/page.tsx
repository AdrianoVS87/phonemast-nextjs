import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";

export const revalidate = 60;
export const metadata = buildMetadata(ROUTES.blog);

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="section-padding">
        <div className="container-max">
          <header className="blog-index-header">
            <h1>Phone mast news and case notes</h1>
            <p>Case notes, law changes and operator news for landlords with a phone mast, written and reviewed by our specialist surveyors.</p>
          </header>
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                post={{ slug: post.slug, title: post.title, date: post.date, category: post.category, excerpt: post.excerpt, author: post.author }}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
