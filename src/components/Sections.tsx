import Link from "next/link";
import { blogPosts, faqs, platforms } from "@/data/site";

export function PlatformCards() {
  return <div className="grid gap-5 md:grid-cols-3">{platforms.map((p) => <Link href={`/${p.slug}`} key={p.slug} className="card hover:border-brand-500/60"><div className={`mb-5 h-2 rounded-full bg-gradient-to-r ${p.color}`} /><h3 className="text-2xl font-black">{p.name}</h3><p className="mt-3 text-slate-300">{p.description}</p><p className="mt-4 text-sm text-brand-50">{p.tools.length} tools →</p></Link>)}</div>;
}

export function FAQ() {
  return <section className="container py-16"><h2 className="text-3xl font-black">Frequently asked questions</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{faqs.map((f) => <div className="card" key={f.q}><h3 className="font-bold">{f.q}</h3><p className="mt-3 text-sm text-slate-300">{f.a}</p></div>)}</div></section>;
}

export function BlogPreview() {
  return <section className="container py-16"><div className="flex items-end justify-between"><h2 className="text-3xl font-black">Latest guides</h2><Link href="/blog" className="text-brand-50">View blog</Link></div><div className="mt-8 grid gap-5 md:grid-cols-3">{blogPosts.slice(0, 3).map((post) => <Link className="card" href={`/blog/${post.slug}`} key={post.slug}><p className="text-xs uppercase tracking-wide text-brand-50">{post.category}</p><h3 className="mt-3 text-xl font-bold">{post.title}</h3><p className="mt-3 text-sm text-slate-300">{post.excerpt}</p></Link>)}</div></section>;
}
