import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return createMetadata({ title: post?.title ?? "Guide", description: post?.excerpt ?? siteConfig.description, path: `/blog/${slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <main className="container py-16">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name } }} />
    <article className="prose prose-invert max-w-3xl"><p className="text-brand-50">{post.category} · {post.minutes} min read</p><h1>{post.title}</h1><p>{post.excerpt}</p><h2>Step-by-step workflow</h2><ol><li>Copy the URL for media you own or are authorized to process.</li><li>Paste the URL into MediaSave Pro and select the platform.</li><li>Review metadata, thumbnail, duration, and available formats.</li><li>Choose a format and retain the history record for compliance.</li></ol><h2>Best practices</h2><p>Respect creator rights, avoid private content, keep audit logs, and configure rate limits and abuse protection before launch.</p></article>
  </main>;
}
