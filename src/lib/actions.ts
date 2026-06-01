"use server";

import { headers } from "next/headers";
import { extractMediaMetadata } from "@/lib/media";
import { rateLimit } from "@/lib/rate-limit";
import { downloadRequestSchema } from "@/lib/validators";

export async function createDownload(formData: FormData) {
  const ip = (await headers()).get("x-forwarded-for") ?? "local";
  const limited = await rateLimit(ip);
  if (!limited.allowed) return { ok: false, error: "Too many requests. Please try again shortly." };

  const parsed = downloadRequestSchema.safeParse({
    url: formData.get("url"),
    platform: formData.get("platform"),
    captchaToken: formData.get("captchaToken") || undefined
  });
  if (!parsed.success) return { ok: false, error: "Enter a valid supported media URL." };

  const metadata = await extractMediaMetadata(parsed.data.url);
  return { ok: true, data: metadata };
}
