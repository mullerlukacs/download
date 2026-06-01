# Production deployment guide

1. Provision PostgreSQL and Redis with private networking.
2. Set every variable in `.env.example`, including `NEXT_PUBLIC_APP_URL`, `DATABASE_URL`, `NEXTAUTH_SECRET`, `ADMIN_API_TOKEN`, captcha keys, and CDN URL.
3. Run `npx prisma migrate deploy` during release.
4. Build the image with `docker build -t mediasave-pro .` and deploy behind a TLS load balancer or CDN.
5. Configure CDN cache rules for static assets, sitemap, robots, and public blog pages while bypassing `/api/*` and authenticated admin routes.
6. Connect structured logs to your monitoring stack and route error logs to your incident management provider.
7. Replace the demo metadata adapter with a licensed provider or internal queue worker before accepting public traffic.

## Performance checklist

- Next.js App Router server rendering and static generation are used for marketing pages.
- Images are optimized through `next/image` remote patterns and static OG assets.
- Platform and blog pages are split by route for code-splitting.
- Redis/Upstash rate limiting is available for edge-friendly abuse protection.
