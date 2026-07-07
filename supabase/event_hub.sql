create table if not exists public.cms_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  summary text,
  description text,
  event_date date,
  start_time text,
  end_time text,
  venue text,
  location text,
  postcode text,
  category text default 'Community Event',
  status text default 'published',
  featured boolean default false,
  cover_image text,
  video_url text,
  impact_young_people integer default 0,
  impact_families integer default 0,
  impact_volunteers integer default 0,
  bleed_kits_supported integer default 0,
  gallery_urls text[] default '{}',
  tags text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists cms_events_slug_idx on public.cms_events(slug);
create index if not exists cms_events_date_idx on public.cms_events(event_date);
create index if not exists cms_events_status_idx on public.cms_events(status);

alter table public.cms_events enable row level security;

drop policy if exists "Public can read published events" on public.cms_events;
create policy "Public can read published events"
on public.cms_events for select
using (status = 'published');
