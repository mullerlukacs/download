import { createMetadata } from "@/lib/seo";
export const metadata = createMetadata({ title: "About Us", description: "Learn about MediaSave Pro's compliant media SaaS mission.", path: "/about" });
export default function AboutPage() { return <main className="container py-16"><h1 className="text-5xl font-black">About MediaSave Pro</h1><p className="mt-6 max-w-3xl text-slate-300">We build secure, SEO-optimized software foundations for authorized media workflows, educational guides, analytics, and operational governance.</p></main>; }
