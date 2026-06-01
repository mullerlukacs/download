import { createMetadata } from "@/lib/seo";
export const metadata = createMetadata({ title: "Terms of Service", description: "MediaSave Pro terms of service.", path: "/terms" });
export default function TermsPage() { return <main className="container py-16 prose prose-invert max-w-4xl"><h1>Terms of Service</h1><p>Users must only process media they own, have permission to use, or may lawfully access. The platform does not authorize copyright infringement or access-control circumvention.</p></main>; }
