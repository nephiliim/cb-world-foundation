-- CB'S WORLD Foundation Charity CMS tables
-- Run this in Supabase SQL Editor.

create extension if not exists "pgcrypto";

create table if not exists cms_gallery (
  id uuid primary key default gen_random_uuid(),
  title text,
  category text,
  media_type text default 'image',
  image_url text,
  video_url text,
  description text,
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists cms_news (
  id uuid primary key default gen_random_uuid(),
  title text,
  slug text unique,
  date date,
  image_url text,
  excerpt text,
  content text,
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists cms_events (
  id uuid primary key default gen_random_uuid(),
  title text,
  date date,
  location text,
  image_url text,
  registration_url text,
  description text,
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists cms_feedback (
  id uuid primary key default gen_random_uuid(),
  quote text,
  relationship text,
  category text,
  image_url text,
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists cms_legacy_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  relationship text,
  message text,
  image_url text,
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists cms_settings (
  id uuid primary key default gen_random_uuid(),
  title text,
  value text,
  category text,
  status text default 'published',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table cms_gallery enable row level security;
alter table cms_news enable row level security;
alter table cms_events enable row level security;
alter table cms_feedback enable row level security;
alter table cms_legacy_messages enable row level security;
alter table cms_settings enable row level security;

-- Admin API uses the service role key, which bypasses RLS.
-- Public site should access published content through server API routes.
