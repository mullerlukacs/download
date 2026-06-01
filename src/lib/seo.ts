import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function createMetadata({ title, description, path = "" }: { title: string; description: string; path?: string }): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, type: "website" },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) };
}
