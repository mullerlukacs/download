import { PlatformCards } from "@/components/Sections";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Supported Platforms", description: "Explore all supported MediaSave Pro downloader categories and platform workflows.", path: "/platforms" });

export default function PlatformsPage() {
  return <main className="container py-16"><h1 className="text-5xl font-black">Supported platforms</h1><p className="mt-4 max-w-2xl text-slate-300">Dedicated sections for YouTube, Instagram, Facebook, TikTok, Pinterest, and LinkedIn downloader tools.</p><div className="mt-10"><PlatformCards /></div></main>;
}
