import Link from "next/link";
import { platforms, siteConfig } from "@/data/site";

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
    <div className="container flex h-16 items-center justify-between">
      <Link href="/" className="text-xl font-black tracking-tight">{siteConfig.name}</Link>
      <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
        <Link href="/platforms">Platforms</Link>
        {platforms.slice(0, 4).map((p) => <Link key={p.slug} href={`/${p.slug}`}>{p.name}</Link>)}
        <Link href="/blog">Blog</Link>
        <Link href="/admin/dashboard">Admin</Link>
      </nav>
      <Link href="/chrome-extension" className="btn py-2 text-sm">Extension</Link>
    </div>
  </header>;
}
