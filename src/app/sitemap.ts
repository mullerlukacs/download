import type { MetadataRoute } from "next";
import { blogPosts, platforms, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/platforms", "/chrome-extension", "/about", "/contact", "/privacy", "/terms", "/blog", "/admin/dashboard"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date() })),
    ...platforms.map((p) => ({ url: `${siteConfig.url}/${p.slug}`, lastModified: new Date() })),
    ...blogPosts.map((p) => ({ url: `${siteConfig.url}/blog/${p.slug}`, lastModified: new Date() }))
  ];
}
