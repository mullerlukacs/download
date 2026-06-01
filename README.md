# MediaSave Pro

MediaSave Pro is a production-ready SaaS starter inspired by media utility platforms. It includes a responsive Next.js 15 App Router frontend, TypeScript, Tailwind CSS, REST APIs, Server Actions, Prisma/PostgreSQL models, Redis-ready rate limiting, SEO automation, admin pages, and Docker support.

## Features

- Public pages for Home, Platforms, YouTube, Instagram, Facebook, TikTok, Pinterest, LinkedIn, Chrome Extension, About, Contact, Privacy, Terms, and Blog.
- Downloader UX with URL parsing, platform selection, metadata preview, thumbnail placeholder, and format selection.
- REST endpoint at `/api/download` plus Server Action flow for progressive enhancement.
- Blog engine with generated guide routes and Article JSON-LD.
- SEO architecture: dynamic metadata, Open Graph, Twitter Cards, JSON-LD, FAQ schema, breadcrumbs, sitemap, and robots.txt.
- Admin dashboard shell for users, analytics, traffic reports, tool statistics, content, blog, FAQ, monitoring, and error tracking.
- Security foundations: Zod input validation, HTTP security headers, rate limiting integration, captcha field, abuse-protection boundaries, and audit-friendly schema.

## Local development

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

## Database

The Prisma schema defines users, download history, blog posts, FAQ items, and analytics events. Run migrations after configuring `DATABASE_URL`:

```bash
npx prisma migrate dev --name init
```

## Docker deployment

```bash
docker compose up --build
```

For production, set strong secrets, configure a managed PostgreSQL database, connect Redis or Upstash, place the app behind a CDN, and enable provider-backed captcha verification and monitoring.

## API architecture

- `POST /api/download` validates requests, checks rate limits, extracts metadata, and returns available formats.
- Server Action `createDownload` powers the homepage and platform forms.
- Replace `extractMediaMetadata` with a licensed extractor, queue worker, or internal media-processing provider before public launch.
