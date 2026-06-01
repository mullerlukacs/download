import { NextRequest, NextResponse } from "next/server";
import { extractMediaMetadata } from "@/lib/media";
import { rateLimit } from "@/lib/rate-limit";
import { downloadRequestSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const limited = await rateLimit(`api:${ip}`, 30, 60);
  if (!limited.allowed) return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });

  const parsed = downloadRequestSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid request", details: parsed.error.flatten() }, { status: 400 });

  const metadata = await extractMediaMetadata(parsed.data.url);
  return NextResponse.json({ data: metadata, remaining: limited.remaining });
}
