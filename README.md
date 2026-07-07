# CB'S WORLD Foundation Charity - Event Hub Update

This update makes Events the main content engine for the charity website.

## Adds

- `/events`
- `/events/[slug]`
- `/admin/events`
- `/api/events`
- `/api/admin/events`
- `cms_events` Supabase table
- Event impact fields
- Event gallery fields

## Install

Copy these into your project root:

- `app/events`
- `app/admin/events`
- `app/api/events`
- `app/api/admin/events`
- `components/events`
- `lib/events.ts`
- `app/event-hub.css`
- `supabase/event_hub.sql`

Add this to `app/layout.tsx`:

```ts
import "./event-hub.css";
```

Run `supabase/event_hub.sql` in Supabase SQL Editor.

Then:

```cmd
npm run build
git add .
git commit -m "Add event hub"
git push
```

## Suggested first entries

- Knife Crime Awareness Day – Haverstock Secondary School
- Awareness Session – Regent High School
- St Patrick's Primary School Community Visit
- Coram's Youth Centre Awareness Session
