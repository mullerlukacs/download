import { BlogPreview, FAQ, PlatformCards } from "@/components/Sections";
import { Downloader } from "@/components/Downloader";
import { JsonLd } from "@/components/JsonLd";
import { faqs, platforms, siteConfig } from "@/data/site";

export default function HomePage() {
  return <main>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: siteConfig.name, applicationCategory: "MultimediaApplication", offers: { "@type": "Offer", price: "0" } }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <section className="container py-20 text-center">
      <p className="mx-auto mb-4 w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-brand-50">REST API · Server Actions · Prisma · Redis · SEO</p>
      <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-tight md:text-7xl">Media downloading tools and guides for modern creator workflows.</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">MediaSave Pro is a production-ready SaaS starter for compliant public media parsing, metadata previews, download history, analytics, admin content management, and SEO growth.</p>
      <div className="mt-10"><Downloader /></div>
    </section>
    <section className="container py-12"><h2 className="mb-8 text-3xl font-black">Popular downloads</h2><PlatformCards /></section>
    <section className="container grid gap-6 py-16 md:grid-cols-3">
      {platforms.flatMap((p) => p.tools).slice(0, 12).map((tool) => <div className="card" key={tool}><h3 className="font-bold">{tool}</h3><p className="mt-2 text-sm text-slate-300">Fast URL parsing, cached metadata, thumbnails, format selection, history, and abuse protection.</p></div>)}
    </section>
    <BlogPreview /><FAQ />
  </main>;
}
