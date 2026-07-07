# CB'S WORLD Foundation Charity — Admin CMS v3-v5

This package adds the next admin layer:

- Admin dashboard modules
- Gallery manager
- News manager
- Events manager
- Anonymous feedback manager
- Legacy Wall moderation page
- Homepage/settings module
- Supabase CMS SQL schema
- Storage bucket plan
- API route starter files

## Install

Copy these folders/files into your project root:

```text
app/admin/
app/api/admin/
components/admin/
lib/adminAuth.ts
supabase/admin-cms-v3-v5.sql
```

Add this import to `app/layout.tsx` or paste the CSS into `app/globals.css`:

```ts
import "./admin/admin-cms.css";
```

If Next complains about importing CSS from that location, paste `app/admin/admin-cms.css` at the bottom of `app/globals.css` instead.

## Environment variables

Add these to `.env.local` and Vercel:

```env
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ADMIN_API_KEY=choose-a-long-random-admin-key
```

Keep `SUPABASE_SERVICE_ROLE_KEY` private. Never expose it as `NEXT_PUBLIC`.

## Supabase setup

Open Supabase → SQL Editor and run:

```text
supabase/admin-cms-v3-v5.sql
```

Then create Storage buckets:

- `gallery-media`
- `video-media`
- `homepage-media`

## Build

```cmd
npm run build
git add .
git commit -m "Add Admin CMS v3-v5"
git push
```

## Notes

This is the CMS structure layer. The next step is wiring each form to real create/edit/delete actions and connecting the public pages to read from the CMS tables.
