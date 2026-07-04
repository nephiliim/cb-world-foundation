# Justice for Claudyo update

Copy these folders/files into your project root:

- `app/justice-for-claudyo/page.tsx`
- `public/videos/justice/justice-for-claudyo-appeal.mp4`

Then update `data/site.ts`.

## Add to navItems

Add this item after Claudyo's Legacy / Legacy:

```ts
{ label: "Justice", href: "/justice-for-claudyo" },
```

## Add CSS

Copy the CSS from `docs/justice-css.txt` into the bottom of `app/globals.css`.

## Build and push

```cmd
npm run build
git add .
git commit -m "Add Justice for Claudyo appeal page"
git push
```
