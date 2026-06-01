import Link from "next/link";
import { platforms, siteConfig } from "@/data/site";

export function Footer() {
  return <footer className="border-t border-white/10 bg-slate-950 py-12">
    <div className="container grid gap-8 md:grid-cols-4">
      <div><h2 className="text-2xl font-black">{siteConfig.name}</h2><p className="mt-3 text-sm text-slate-400">Secure SaaS infrastructure for compliant media workflows, guides, analytics, and administration.</p></div>
      <div><h3 className="font-bold">Platforms</h3><ul className="mt-3 space-y-2 text-sm text-slate-400">{platforms.map((p) => <li key={p.slug}><Link href={`/${p.slug}`}>{p.name}</Link></li>)}</ul></div>
      <div><h3 className="font-bold">Company</h3><ul className="mt-3 space-y-2 text-sm text-slate-400"><li><Link href="/about">About</Link></li><li><Link href="/contact">Contact</Link></li><li><Link href="/privacy">Privacy</Link></li><li><Link href="/terms">Terms</Link></li></ul></div>
      <div><h3 className="font-bold">SEO</h3><p className="mt-3 text-sm text-slate-400">Dynamic metadata, Open Graph, Twitter Cards, JSON-LD, sitemap, robots, FAQ schema, and article schema are built in.</p></div>
    </div>
  </footer>;
}
