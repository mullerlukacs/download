# API architecture

## `POST /api/download`

Request body:

```json
{ "url": "https://example.com/video", "platform": "youtube", "captchaToken": "token" }
```

Flow:

1. Validate JSON with Zod.
2. Rate-limit by client IP.
3. Parse platform from URL.
4. Return metadata, thumbnail, and format options.
5. Persist download history when authenticated persistence is enabled.

## `GET /api/admin/stats`

Requires `Authorization: Bearer <ADMIN_API_TOKEN>` and returns dashboard metrics. Extend this route with Prisma aggregate queries for live reports.
