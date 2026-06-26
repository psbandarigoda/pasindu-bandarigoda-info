-- Run this in Supabase Dashboard → SQL Editor (new project: pcmroizonkdqyebsdciv)

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

create policy "Allow anonymous lead inserts"
    on public.leads
    for insert
    to anon
    with check (true);

create policy "Owner can read leads"
    on public.leads
    for select
    to authenticated
    using (lower(auth.jwt() ->> 'email') = 'bgpsandaruwan@gmail.com');

create policy "Owner can update leads"
    on public.leads
    for update
    to authenticated
    using (lower(auth.jwt() ->> 'email') = 'bgpsandaruwan@gmail.com')
    with check (lower(auth.jwt() ->> 'email') = 'bgpsandaruwan@gmail.com');

create index if not exists leads_created_at_idx on public.leads (created_at desc);
