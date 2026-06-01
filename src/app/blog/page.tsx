import Link from "next/link";
import { blogPosts } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Blog", description: "Guides for YouTube Shorts, MP3 conversion, Instagram Reels, Pinterest, and TikTok workflows.", path: "/blog" });

export default function BlogPage() {
  return <main className="container py-16"><h1 className="text-5xl font-black">MediaSave Pro Blog</h1><div className="mt-10 grid gap-5 md:grid-cols-2">{blogPosts.map((post) => <Link className="card" href={`/blog/${post.slug}`} key={post.slug}><p className="text-sm text-brand-50">{post.category} · {post.minutes} min read</p><h2 className="mt-3 text-2xl font-bold">{post.title}</h2><p className="mt-3 text-slate-300">{post.excerpt}</p></Link>)}</div></main>;
}
