create table if not exists legacy_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  approved boolean not null default false,
  created_at timestamp with time zone not null default now()
);

alter table legacy_messages enable row level security;

create policy "Anyone can submit legacy messages"
on legacy_messages
for insert
to anon
with check (approved = false);

create policy "Anyone can read approved legacy messages"
on legacy_messages
for select
to anon
using (approved = true);
