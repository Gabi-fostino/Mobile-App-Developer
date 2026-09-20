create table if not exists public.stops (
  id text primary key,
  name text not null,
  region text not null,
  kind text not null,
  order_index integer not null,
  description text not null,
  story text not null,
  fun_fact text not null,
  audio_url text,
  image_url text,
  latitude double precision,
  longitude double precision
);

alter table public.stops enable row level security;
create policy "Public can read stops" on public.stops for select using (true);

do $$ begin
  insert into storage.buckets (id, name, public) values ('narration', 'narration', true) on conflict (id) do nothing;
exception when others then null;
end $$;
