export const siteConfig = {
  name: "MediaSave Pro",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://mediasave.pro",
  description: "A fast, secure SaaS platform for media download tools, educational guides, and creator workflow analytics.",
  supportEmail: "support@mediasave.pro"
};

export type Platform = {
  slug: string;
  name: string;
  description: string;
  color: string;
  tools: string[];
};

export const platforms: Platform[] = [
  { slug: "youtube", name: "YouTube", color: "from-red-500 to-rose-600", description: "Download videos, Shorts, audio, songs, and convert to MP3 or MP4.", tools: ["YouTube Downloader", "YouTube Video Downloader", "YouTube Shorts Downloader", "YouTube Audio Downloader", "YouTube Song Downloader", "YouTube Music Downloader", "YouTube to MP3", "YouTube to MP4"] },
  { slug: "instagram", name: "Instagram", color: "from-fuchsia-500 to-orange-500", description: "Save Reels, videos, photos, stories, carousels, and public profile media.", tools: ["Instagram Downloader", "Instagram Video Downloader", "Instagram Photo Downloader", "Instagram Reels Downloader", "Instagram Story Downloader", "Instagram Carousel Downloader", "Instagram Profile Downloader"] },
  { slug: "facebook", name: "Facebook", color: "from-blue-500 to-blue-700", description: "Extract public Facebook video metadata and download-ready formats.", tools: ["Facebook Video Downloader"] },
  { slug: "tiktok", name: "TikTok", color: "from-slate-900 to-cyan-500", description: "Process public TikTok video URLs with format selection and history.", tools: ["TikTok Video Downloader"] },
  { slug: "pinterest", name: "Pinterest", color: "from-red-600 to-pink-700", description: "Download public Pinterest videos and visual inspiration assets.", tools: ["Pinterest Downloader"] },
  { slug: "linkedin", name: "LinkedIn", color: "from-sky-600 to-blue-800", description: "Save public LinkedIn videos, images, and PDF documents for research.", tools: ["LinkedIn Video Downloader", "LinkedIn Photo Downloader", "LinkedIn PDF Downloader"] }
];

export const blogPosts = [
  { slug: "how-to-download-youtube-shorts", title: "How to Download YouTube Shorts", category: "YouTube Downloader", excerpt: "A responsible guide to saving your own Shorts or public videos with permission.", minutes: 5 },
  { slug: "how-to-convert-video-to-mp3", title: "How to Convert Video to MP3", category: "YouTube to MP3", excerpt: "Learn safe audio extraction workflows, format choices, and quality settings.", minutes: 6 },
  { slug: "how-to-download-instagram-reels", title: "How to Download Instagram Reels", category: "Instagram Reels Downloader", excerpt: "Understand Reel URL parsing, metadata preview, and creator-friendly usage.", minutes: 4 },
  { slug: "how-to-download-pinterest-videos", title: "How to Download Pinterest Videos", category: "Pinterest Downloader", excerpt: "A step-by-step Pinterest media workflow for boards and inspiration libraries.", minutes: 4 },
  { slug: "how-to-download-tiktok-videos", title: "How to Download TikTok Videos", category: "TikTok Video Downloader", excerpt: "Best practices for processing TikTok URLs, previews, and format selection.", minutes: 5 }
];

export const faqs = [
  { q: "Is MediaSave Pro production ready?", a: "Yes. The codebase includes typed APIs, Prisma models, rate limiting hooks, SEO routes, Docker services, and deployment documentation." },
  { q: "Does this bypass platform restrictions?", a: "No. It is designed as a compliant SaaS foundation for user-owned or authorized public media workflows." },
  { q: "Can I add a real extractor provider?", a: "Yes. Replace the metadata service adapter with your licensed provider, queue worker, or internal processing pipeline." }
];
