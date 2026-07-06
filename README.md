# CB's World Foundation V4 Update

This update applies the new premium blue visual identity across the core public website.

## Replace/add these files

Copy this package into your project root and allow Windows to replace files:

- `app/page.tsx`
- `app/globals.css`
- `app/claudyos-legacy/page.tsx`
- `app/justice-for-claudyo/page.tsx`
- `app/gallery/page.tsx`
- `app/foundation/page.tsx`
- `app/donate/page.tsx`
- `app/contact/page.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/CTA.tsx`
- `data/site.ts`

## Then run

```cmd
npm run build
git add .
git commit -m "Apply CB World Foundation V4 redesign"
git push
```

## Notes

This uses the real public image URLs you supplied. Longer term, download approved images and store them in Supabase Storage or the project's `public/images` folder for reliability.
