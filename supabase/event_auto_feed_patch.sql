alter table public.cms_events add column if not exists auto_create_news boolean default true;
alter table public.cms_events add column if not exists auto_create_gallery boolean default true;
alter table public.cms_events add column if not exists show_on_homepage boolean default false;

create table if not exists public.cms_news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  image text,
  status text default 'published',
  featured boolean default false,
  source_event_id uuid,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.cms_gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  caption text,
  media_url text not null unique,
  media_type text default 'image',
  category text default 'Event',
  status text default 'published',
  featured boolean default false,
  source_event_id uuid,
  created_at timestamptz default now()
);

create index if not exists cms_news_source_event_idx on public.cms_news(source_event_id);
create index if not exists cms_gallery_source_event_idx on public.cms_gallery(source_event_id);
create index if not exists cms_events_homepage_idx on public.cms_events(show_on_homepage);
