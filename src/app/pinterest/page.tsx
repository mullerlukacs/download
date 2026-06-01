import { notFound } from "next/navigation";
import { Downloader } from "@/components/Downloader";
import { JsonLd } from "@/components/JsonLd";
import { platforms } from "@/data/site";
import { createMetadata } from "@/lib/seo";

const platform = platforms.find((item) => item.slug === "pinterest");
export const metadata = createMetadata({ title: platform?.name ?? "Platform", description: platform?.description ?? "MediaSave Pro platform tools.", path: "/pinterest" });

export default function PlatformPage() {
  if (!platform) notFound();
  return <main className="container py-16">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: platform.name, item: "/pinterest" }] }} />
    <h1 className="text-5xl font-black">{platform.name} downloader tools</h1>
    <p className="mt-4 max-w-3xl text-slate-300">{platform.description}</p>
    <div className="mt-10"><Downloader /></div>
    <section className="mt-12 grid gap-5 md:grid-cols-2">{platform.tools.map((tool) => <article className="card" key={tool}><h2 className="text-2xl font-bold">{tool}</h2><p className="mt-3 text-slate-300">Paste an authorized public URL, preview metadata, choose a format, and store download history for analytics and compliance.</p></article>)}</section>
  </main>;
}
