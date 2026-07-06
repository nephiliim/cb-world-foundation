# CB World Foundation - Legacy Style Homepage Update

This update changes the homepage to the darker, cleaner charity style from the reference screenshot.

## Files included

- `app/page.tsx` - replacement homepage
- `docs/homepage-legacy-style.css` - CSS to paste into `app/globals.css`

## How to apply

1. Copy `app/page.tsx` into your project and replace the existing file.
2. Open `docs/homepage-legacy-style.css` and copy all CSS.
3. Paste the CSS at the bottom of your existing `app/globals.css`.
4. Run:

```cmd
npm run build
git add .
git commit -m "Apply legacy style homepage"
git push
```

## Notes

This expects your `data/site.ts` to export:

- `siteConfig`
- `heroImages`
- `galleryImages`
- `impactStats`
- `missionCards`

These already exist based on the latest V4 work.
