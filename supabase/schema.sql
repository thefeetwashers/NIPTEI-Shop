-- NIPTEI — Supabase schema
-- Run in Supabase SQL Editor for project https://cjatliwegffjsbyanbjk.supabase.co
-- Brand: Natural & Vegan, Made in the United States

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  tagline text,
  size_ml int,
  price_cents int,
  is_natural_vegan boolean not null default true,
  made_in text not null default 'United States',
  category text not null default 'hair-care',
  image_path text,
  created_at timestamptz not null default now()
);

insert into products (slug, name, tagline, size_ml, category) values
  ('strengthen-restore-shampoo', 'Strengthen & Restore Shampoo', 'With Jamaican Black Castor Oil', 384, 'shampoo'),
  ('anti-hair-loss-shampoo', 'Anti-Hair Loss Shampoo', 'Strengthening & Scalp Care', 250, 'shampoo'),
  ('pumpkin-seed-oil', 'Pumpkin Seed Oil', 'Nourish · Strengthen · Grow', 60, 'oil'),
  ('herbal-hair-oil', 'Herbal Hair Oil', 'Nourish · Strengthen · Grow', 60, 'oil'),
  ('hair-growth-serum', 'Hair Growth Serum', 'Nourishing Scalp Formula', 30, 'serum'),
  ('scalp-hair-oil-collection', 'Scalp & Hair Oil Collection', 'Golden Mango · Pomegranate · Avocado · Hibiscus & Berry · Citrus', 60, 'collection'),
  ('castor-oil-haircare-collection', 'Castor Oil Haircare Collection', 'Mousse · Shampoo · Conditioner · Spray · Detangler · Edge Control · Styling Gel', null, 'collection'),
  ('niptei-castor-oil', 'NIPTEI Castor Oil', 'Nourishing Hair Oil with Jamaican Black Castor Oil', 236, 'oil')
on conflict (slug) do nothing;

-- Luxury Haircare Collection — added 2026-11-06 from NIPTEI_Luxury_Haircare_Collection.png
insert into products (slug, name, tagline, size_ml, category) values
  ('chebe-hair-growth-kit', 'Chebe Hair Growth Kit', 'Stronger · Longer · Healthier Hair', null, 'kit'),
  ('rosemary-hair-oil', 'Rosemary Hair Oil', 'Made in USA', 60, 'oil'),
  ('tea-tree-hair-oil', 'Tea Tree Hair Oil', 'Made in USA', 60, 'oil'),
  ('biotin-hair-oil', 'Biotin Hair Oil', 'Made in USA', 60, 'oil'),
  ('argan-oil-shampoo', 'Argan Oil Shampoo', 'Made in USA', 250, 'shampoo'),
  ('argan-oil-conditioner', 'Argan Oil Conditioner', 'Made in USA', 250, 'conditioner'),
  ('curl-cream', 'Curl Cream', 'Define · Moisturize · Shine', null, 'styling'),
  ('nourishing-hair-mask', 'Nourishing Hair Mask', 'Repair · Restore · Strengthen', null, 'treatment'),
  ('black-rice-hair-growth-spray', 'Black Rice Hair Growth Spray', 'Thicken · Strengthen · Grow', null, 'spray'),
  ('onion-hair-growth-oil', 'Onion Hair Growth Oil', 'Stimulate · Repair · Grow', null, 'oil'),
  ('baobab-oil', 'Baobab Oil', 'Strengthen · Revitalize', null, 'oil')
on conflict (slug) do nothing;

-- Public read for the storefront, writes only via authenticated admin / service role
alter table products enable row level security;
create policy "public read products" on products for select using (true);

-- ============================================================
-- NIPTEI — schema extension, 2026-11-07 (deployable codebase)
-- Run AFTER the original products section, in Supabase SQL Editor.
-- Do NOT run against live Supabase from here — the parent runs it.
-- All tables are idempotent (create if not exists).
-- ============================================================

-- Extend products with origin / status fields used by the storefront.
alter table products add column if not exists origin_verified boolean not null default false;
alter table products add column if not exists ingredient_origin text;
alter table products add column if not exists collection text not null default 'core';
alter table products add column if not exists status text not null default 'live';
alter table products add column if not exists supplier_id uuid;

-- Quiz results (answers stored, no medical diagnosis is made from them)
create table if not exists quiz_results (
  id uuid primary key default gen_random_uuid(),
  quiz_id text,
  who_for text,
  goal text,
  hair_type text,
  effort text,
  matched_slugs text[],
  created_at timestamptz not null default now()
);

-- Waitlist / Notify Me (email only with consent)
create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  interest text,
  created_at timestamptz not null default now()
);

-- Orders (no payment is taken until Stripe is connected)
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique,
  customer_email text,
  product_slug text,
  quantity int not null default 1,
  price_cents int,
  status text not null default 'pending',
  tracking_number text,
  carrier text,
  created_at timestamptz not null default now()
);

-- Suppliers (vetted list; no invented emails — email_verified must be true
-- before any quote request is sent to that address)
create table if not exists suppliers (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  contact_name text,
  email text,
  email_verified boolean not null default false,
  phone text,
  country text,
  city text,
  supply_type text,
  years_in_business int,
  blind_ship boolean not null default false,
  partnership_status text not null default 'not-contacted',
  trust_score numeric,
  created_at timestamptz not null default now()
);

-- Supplier registrations (owner approval required before portal access)
create table if not exists supplier_registrations (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  contact_name text,
  email text not null,
  phone text,
  country text,
  city text,
  supply_type text,
  years_in_business int,
  blind_ship boolean not null default false,
  status text not null default 'pending',
  portal_code text,
  created_at timestamptz not null default now()
);

-- Quote requests (saved as drafts; owner sends from nipteiapp@gmail.com)
create table if not exists quote_requests (
  id uuid primary key default gen_random_uuid(),
  supplier_name text not null,
  email text not null,
  product text not null,
  quantity int,
  template text,
  message text,
  moq int,
  cost_per_unit_cents int,
  sample_cost_cents int,
  lead_time_days int,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

-- Supplier listings (supplier's own products; owner approval + sample test
-- + origin documents required before go-live)
create table if not exists supplier_listings (
  id uuid primary key default gen_random_uuid(),
  supplier_id uuid references suppliers(id),
  product_name text not null,
  size_ml int,
  ingredients text,
  made_in text,
  ingredient_origin text,
  origin_documents_on_file boolean not null default false,
  wholesale_cost_cents int,
  shipping_charge_cents int,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

-- Swap requests (Draft V3: one swap per order, 30 days, correct formula only)
create table if not exists swap_requests (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id),
  customer_email text,
  old_product_slug text,
  new_product_slug text,
  quiz_id text,
  exchange_shipping_fee_cents int,
  fee_paid boolean not null default false,
  status text not null default 'requested',
  created_at timestamptz not null default now()
);

-- RLS: public read for products only. Everything else is service-role / admin.
alter table quiz_results enable row level security;
alter table waitlist enable row level security;
alter table orders enable row level security;
alter table suppliers enable row level security;
alter table supplier_registrations enable row level security;
alter table quote_requests enable row level security;
alter table supplier_listings enable row level security;
alter table swap_requests enable row level security;
