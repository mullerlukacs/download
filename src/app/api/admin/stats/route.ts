import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ users: 1248, downloads: 98742, cacheHitRate: 0.91, topPlatforms: ["youtube", "instagram", "tiktok"] });
}
