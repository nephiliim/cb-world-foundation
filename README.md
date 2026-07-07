# CB'S WORLD Foundation Charity - Admin CMS v2

Copy these files into the project root.

## Important CSS step
Add this import to `app/layout.tsx` under the existing CSS imports:

```ts
import "./admin/admin-v2.css";
```

## Files included
- `app/admin/dashboard/page.tsx`
- `app/admin/gallery/page.tsx`
- `app/admin/news/page.tsx`
- `app/admin/events/page.tsx`
- `app/admin/feedback/page.tsx`
- `app/admin/settings/page.tsx`
- `app/admin/admin-v2.css`
- `components/admin/*`
- `data/admin.ts`
- `supabase/admin-cms-schema.sql`

## Build
```cmd
npm run build
git add .
git commit -m "Add Admin CMS v2"
git push
```

## Supabase
Run `supabase/admin-cms-schema.sql` in Supabase SQL Editor when ready to store content in the database.
