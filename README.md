# CB'S WORLD Foundation Charity — Media Uploads Update

This update adds real Supabase Storage uploads for the Admin CMS.

## Files included

- `app/api/admin/upload/route.ts` — protected upload API route
- `components/admin/MediaUploadField.tsx` — reusable admin upload component
- `supabase/storage_media_bucket.sql` — creates the `cms-media` bucket

## Install

Copy the folders into your project root:

```text
app/
components/
supabase/
```

## Supabase setup

Open Supabase → SQL Editor → New Query.

Paste and run:

```text
supabase/storage_media_bucket.sql
```

It creates a public `cms-media` storage bucket.

## Admin key

The upload API uses the existing `ADMIN_API_KEY` header.

For local testing, open your browser console on the admin page and run:

```js
localStorage.setItem("cb_admin_key", "YOUR_ADMIN_API_KEY")
```

Later, replace this with a proper login session.

## Use in admin forms

Import the upload field into any admin page:

```tsx
import { MediaUploadField } from "@/components/admin/MediaUploadField";
```

Example:

```tsx
<MediaUploadField
  label="Upload gallery photo or video"
  folder="gallery"
  onUploaded={(file) => {
    console.log(file.url);
  }}
/>
```

Use the returned `file.url` as the `image_url`, `video_url`, or media URL in your CMS tables.

## Build and deploy

```cmd
npm run build
git add .
git commit -m "Add CMS media uploads"
git push
```
