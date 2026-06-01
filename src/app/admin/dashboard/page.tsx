import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Admin Dashboard", description: "Manage users, analytics, traffic reports, tools, content, blogs, and FAQs.", path: "/admin/dashboard" });

const cards = ["User Management", "Analytics", "Traffic Reports", "Tool Statistics", "Content Management", "Blog Management", "FAQ Management", "Error Tracking", "Monitoring"];

export default function AdminDashboardPage() {
  return <main className="container py-16"><h1 className="text-5xl font-black">Admin dashboard</h1><p className="mt-4 text-slate-300">Operational command center for MediaSave Pro teams.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{cards.map((card, index) => <section className="card" key={card}><h2 className="text-xl font-bold">{card}</h2><p className="mt-3 text-3xl font-black">{index === 0 ? "1,248" : index === 1 ? "98.7k" : "Live"}</p><p className="mt-2 text-sm text-slate-400">Connect to Prisma-backed reports and Redis cached rollups.</p></section>)}</div></main>;
}
