# CB'S WORLD Functional CMS Update

This package turns the admin pages into usable CMS screens for:

- Gallery media
- News
- Events
- Anonymous feedback
- Legacy Wall moderation
- Site settings

## Install

Copy these folders/files into the project root:

```text
app/admin/dashboard/page.tsx
app/admin/gallery/page.tsx
app/admin/news/page.tsx
app/admin/events/page.tsx
app/admin/feedback/page.tsx
app/admin/legacy-wall/page.tsx
app/admin/settings/page.tsx
app/api/admin/*
app/api/public/*
components/admin/*
lib/adminAuth.ts
lib/cmsApi.ts
lib/cmsTables.ts
supabase/cms_v3_tables.sql
```

## Supabase setup

Open Supabase → SQL Editor and run:

```text
supabase/cms_v3_tables.sql
```

## Environment variables

Local `.env.local` and Vercel must include:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_API_KEY=...
```

The service role key must remain private. Do not commit it.

## Test

```bash
npm run build
```

Then:

```bash
git add .
git commit -m "Add functional Admin CMS"
git push
```

## Using the CMS

Visit `/admin/dashboard`.

Each CMS page asks for your `ADMIN_API_KEY`. Paste it once and press **Unlock CMS**. The key is stored in your browser local storage.

## Current limitation

This version uses image/video URLs. The next upgrade can add direct Supabase Storage upload buttons.
