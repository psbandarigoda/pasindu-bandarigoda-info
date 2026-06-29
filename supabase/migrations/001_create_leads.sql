-- Run in Supabase Dashboard → SQL Editor for project pcmroizonkdqyebsdciv
-- https://supabase.com/dashboard/project/pcmroizonkdqyebsdciv/sql/new

create table if not exists public.leads (
    id uuid primary key default gen_random_uuid(),
    created_at timestamptz not null default now(),
    name text not null,
    email text not null,
    organization text,
    region text,
    inquiry_type text not null,
    message text not null,
    newsletter_opt_in boolean not null default false,
    source text default 'website',
    status text not null default 'new'
);

alter table public.leads enable row level security;

drop policy if exists "Allow anonymous lead inserts" on public.leads;
create policy "Allow anonymous lead inserts"
    on public.leads
    for insert
    to anon, authenticated
    with check (true);

drop policy if exists "Owner can read leads" on public.leads;
create policy "Owner can read leads"
    on public.leads
    for select
    to authenticated
    using (lower(auth.jwt() ->> 'email') = 'bgpsandaruwan@gmail.com');

drop policy if exists "Owner can update leads" on public.leads;
create policy "Owner can update leads"
    on public.leads
    for update
    to authenticated
    using (lower(auth.jwt() ->> 'email') = 'bgpsandaruwan@gmail.com')
    with check (lower(auth.jwt() ->> 'email') = 'bgpsandaruwan@gmail.com');

grant usage on schema public to anon, authenticated;
grant insert on public.leads to anon;
grant select, update on public.leads to authenticated;

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Reload PostgREST schema cache
notify pgrst, 'reload schema';
