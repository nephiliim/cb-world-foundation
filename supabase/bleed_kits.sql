create table if not exists public.bleed_kits (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text not null,
  area text,
  latitude numeric,
  longitude numeric,
  status text default 'active',
  available_hours text,
  notes text,
  photo_url text,
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.bleed_kits enable row level security;

drop policy if exists "Public can read published bleed kits" on public.bleed_kits;
create policy "Public can read published bleed kits"
  on public.bleed_kits for select
  using (is_published = true);

create index if not exists bleed_kits_area_idx on public.bleed_kits(area);
create index if not exists bleed_kits_published_idx on public.bleed_kits(is_published);
