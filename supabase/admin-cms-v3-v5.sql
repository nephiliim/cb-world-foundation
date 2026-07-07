-- CB'S WORLD Foundation Charity Admin CMS v3-v5
-- Run this in Supabase SQL Editor.

create table if not exists cms_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('admin','family','volunteer','editor')),
  display_name text,
  created_at timestamptz default now()
);

create table if not exists cms_gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  caption text,
  category text default 'Gallery',
  media_type text default 'image' check (media_type in ('image','video')),
  media_url text not null,
  alt_text text,
  status text default 'draft' check (status in ('draft','published','archived')),
  featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists cms_news (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  body text,
  image_url text,
  status text default 'draft' check (status in ('draft','published','archived')),
  published_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists cms_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  event_date date,
  location text,
  poster_url text,
  registration_url text,
  status text default 'draft' check (status in ('draft','published','archived')),
  created_at timestamptz default now()
);

create table if not exists cms_feedback (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  context text,
  category text default 'Support',
  anonymous_label text default 'Community member',
  status text default 'pending' check (status in ('pending','approved','hidden')),
  featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists cms_homepage_settings (
  id int primary key default 1,
  hero_title text default 'Long Live His Legacy',
  hero_subtitle text,
  hero_image_url text,
  featured_video_url text,
  campaign_title text,
  campaign_text text,
  updated_at timestamptz default now()
);

create table if not exists cms_impact_stats (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value text not null,
  sort_order int default 0,
  visible boolean default true
);

alter table cms_gallery enable row level security;
alter table cms_news enable row level security;
alter table cms_events enable row level security;
alter table cms_feedback enable row level security;
alter table cms_homepage_settings enable row level security;
alter table cms_impact_stats enable row level security;

-- Public read policies for published content.
create policy if not exists "Public can read published gallery" on cms_gallery for select using (status = 'published');
create policy if not exists "Public can read published news" on cms_news for select using (status = 'published');
create policy if not exists "Public can read published events" on cms_events for select using (status = 'published');
create policy if not exists "Public can read approved feedback" on cms_feedback for select using (status = 'approved');
create policy if not exists "Public can read homepage settings" on cms_homepage_settings for select using (true);
create policy if not exists "Public can read visible impact stats" on cms_impact_stats for select using (visible = true);

-- Storage buckets to create in Supabase Storage UI:
-- gallery-media, video-media, homepage-media
