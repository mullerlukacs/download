import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Chrome Extension", description: "Install the MediaSave Pro Chrome extension for faster media workflow previews.", path: "/chrome-extension" });

export default function ChromeExtensionPage() {
  const features = ["One-click URL capture", "Metadata previews", "Queue handoff", "Team policy controls", "Extension documentation"];
  return <main className="container py-16"><h1 className="text-5xl font-black">MediaSave Pro Chrome Extension</h1><p className="mt-4 max-w-3xl text-slate-300">A landing page, features guide, installation walkthrough, FAQ, and documentation hub for browser-assisted workflows.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{features.map((feature) => <div className="card" key={feature}><h2 className="text-xl font-bold">{feature}</h2><p className="mt-3 text-slate-300">Designed for compliant capture of page URLs into your authenticated MediaSave Pro dashboard.</p></div>)}</div></main>;
}
