create table if not exists public.cms_media (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  file_name text,
  file_url text not null unique,
  file_path text,
  file_type text default 'image',
  mime_type text,
  category text default 'General',
  tags text[] default '{}',
  uploaded_by text default 'Admin',
  status text default 'active',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists cms_media_file_type_idx on public.cms_media(file_type);
create index if not exists cms_media_category_idx on public.cms_media(category);
create index if not exists cms_media_created_at_idx on public.cms_media(created_at);

alter table public.cms_media enable row level security;

drop policy if exists "Public can read active media" on public.cms_media;
create policy "Public can read active media"
on public.cms_media for select
using (status = 'active');
