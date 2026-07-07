create table if not exists public.cms_gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  caption text,
  media_url text,
  media_type text check (media_type in ('image','video')) default 'image',
  is_published boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.cms_feedback_highlights (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  source_label text default 'Anonymous supporter',
  is_published boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.cms_news_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  body text,
  image_url text,
  is_published boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.cms_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date date,
  location text,
  description text,
  is_published boolean default false,
  created_at timestamptz default now()
);
