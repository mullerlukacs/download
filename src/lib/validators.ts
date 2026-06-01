import { z } from "zod";

export const downloadRequestSchema = z.object({
  url: z.string().url().max(2048),
  platform: z.enum(["youtube", "instagram", "facebook", "tiktok", "pinterest", "linkedin"]),
  captchaToken: z.string().min(8).optional()
});

export function detectPlatform(url: string) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  if (host.includes("youtube") || host.includes("youtu.be")) return "youtube";
  if (host.includes("instagram")) return "instagram";
  if (host.includes("facebook") || host.includes("fb.watch")) return "facebook";
  if (host.includes("tiktok")) return "tiktok";
  if (host.includes("pinterest") || host.includes("pin.it")) return "pinterest";
  if (host.includes("linkedin")) return "linkedin";
  return null;
}
