-- Run this in Supabase SQL Editor.
-- Creates a public storage bucket for CMS media.

insert into storage.buckets (id, name, public)
values ('cms-media', 'cms-media', true)
on conflict (id) do update set public = true;

-- Public read policy for media files.
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'Public read cms media'
  ) then
    create policy "Public read cms media"
    on storage.objects for select
    using (bucket_id = 'cms-media');
  end if;
end $$;

-- Service role can upload/manage files automatically through the admin API.
-- No extra policy is required for service_role.
