# CB'S WORLD Foundation Charity - Drag & Drop Uploads

This adds real admin media uploads using Supabase Storage.

## Install

Copy these files into your project root:

- `app/api/admin/upload/route.ts`
- `components/admin/AdminUploader.tsx`
- `components/admin/AdminUploadStyles.css`
- `supabase/storage_uploads.sql`

## Supabase

Run this in Supabase SQL Editor:

```text
supabase/storage_uploads.sql
```

Choose **Run and enable RLS** if Supabase asks.

## Import CSS

Add this to `app/layout.tsx`:

```ts
import "@/components/admin/AdminUploadStyles.css";
```

## Use in admin pages

Example:

```tsx
import { AdminUploader } from "@/components/admin/AdminUploader";

<AdminUploader folder="events" label="Upload event photos/videos" />
```

The upload result gives you a public URL you can paste into cover image, gallery URLs, news images, etc.

## Important

The uploader expects your login page to store the admin key in browser localStorage as:

```text
admin_api_key
```

If your login page does not already do this, add this after successful login:

```ts
localStorage.setItem("admin_api_key", key);
```

## Build

```cmd
npm run build
git add .
git commit -m "Add drag and drop media uploads"
git push
```
