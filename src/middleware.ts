import { NextRequest, NextResponse } from "next/server";

const protectedPrefixes = ["/admin", "/api/admin"];

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-request-id", crypto.randomUUID());

  if (["POST", "PUT", "PATCH", "DELETE"].includes(request.method)) {
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (origin && host && !origin.includes(host)) return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  }

  if (protectedPrefixes.some((prefix) => request.nextUrl.pathname.startsWith(prefix))) {
    const token = request.headers.get("authorization") ?? request.cookies.get("admin_session")?.value;
    if (request.nextUrl.pathname.startsWith("/api/admin") && (!process.env.ADMIN_API_TOKEN || token !== `Bearer ${process.env.ADMIN_API_TOKEN}`)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return response;
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
