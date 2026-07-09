# Install Media Library V1

Copy these files into your project root:

- `app/admin/media/page.tsx`
- `app/admin/media-library.css`
- `app/api/admin/media/route.ts`
- `app/api/admin/upload/route.ts`
- `components/admin/MediaLibraryClient.tsx`
- `lib/mediaLibrary.ts`
- `supabase/media_library.sql`
- `docs/MEDIA_LIBRARY.md`

Add this to `app/layout.tsx`:

```ts
import "./admin/media-library.css";
```

Run this SQL in Supabase:

```text
supabase/media_library.sql
```

Then:

```cmd
npm run build
git add .
git commit -m "Add Media Library V1"
git push
```

Test:

```text
/admin/media
```
