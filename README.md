# CB'S WORLD Foundation Charity — Bleed Control Kit Map

## What this adds
- Public page: `/bleed-control-kits`
- Public API: `/api/bleed-kits`
- Admin page: `/admin/bleed-kits`
- Admin API: `/api/admin/bleed-kits`
- Supabase table SQL: `supabase/bleed_kits.sql`

## Install
Copy these folders into your project root, not inside `public`:

- `app/bleed-control-kits`
- `app/admin/bleed-kits`
- `app/api/bleed-kits`
- `app/api/admin/bleed-kits`
- `components/bleed-kits`
- `supabase/bleed_kits.sql`

## Supabase
Open Supabase SQL Editor and run:

`supabase/bleed_kits.sql`

## Add navigation
In `data/site.ts`, add this to `navItems`:

```ts
{ label: "Bleed Kits", href: "/bleed-control-kits" },
```

## Build and deploy

```cmd
npm run build
git add .
git commit -m "Add bleed control kit map"
git push
```

## Note
The first version shows a clean location list and map placeholder. The next version can add a real interactive map using Leaflet or Google Maps.
