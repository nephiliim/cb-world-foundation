# CB's World Foundation — Legacy Wall Update

## Files included

- `app/legacy-wall/page.tsx`
- `components/LegacyWallForm.tsx`
- `app/api/legacy-messages/route.ts`
- `app/admin/legacy-wall/page.tsx`
- `supabase/legacy_wall.sql`

## Install

Copy the folders/files into your project root.

## Supabase setup

Open Supabase → SQL Editor → New query.

Paste the contents of:

```txt
supabase/legacy_wall.sql
```

Run it.

## Add nav link

In `data/site.ts`, add this to `navItems`:

```ts
{ label: "Legacy Wall", href: "/legacy-wall" },
```

## Build and push

```cmd
npm run build
git add .
git commit -m "Add Legacy Wall"
git push
```

Visit:

```txt
/legacy-wall
/admin/legacy-wall
```

Note: Admin approval buttons are planned for the next sprint. This starter shows submitted messages and displays only approved messages publicly.
