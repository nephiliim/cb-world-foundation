insert into storage.buckets (id, name, public)
values ('cb-world-media', 'cb-world-media', true)
on conflict (id) do update set public = true;

drop policy if exists "Public read cb world media" on storage.objects;

create policy "Public read cb world media"
on storage.objects
for select
using (bucket_id = 'cb-world-media');
