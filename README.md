# CB World V5 Clean Homepage Update

Replace these files/folders into the project root:

- app/page.tsx
- app/globals.css
- components/Header.tsx
- components/Footer.tsx
- public/images/logo/cb-world-logo.png

Then run:

```cmd
npm run build
git add .
git commit -m "Apply V5 clean homepage"
git push
```

This update uses self-contained CSS classes prefixed with `v5-` so it avoids clashing with older page styles.
