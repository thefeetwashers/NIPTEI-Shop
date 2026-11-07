# NIPTEI — Rooted in Nature. Made in America.

**Brand:** NIPTEI — luxury Natural & Vegan hair care
**Tagline:** *Healthy Hair. Confident You.* / *Grow Strong. Live Beautiful.*
**Look:** black, gold, emerald. Premium amber bottles.
**Domain:** shop.niptei.com (IONOS, currently pointing at the IONOS Default Site — not in use yet)
**GitHub:** https://github.com/Ncgodinc/niptei (Private, created 2026-11-06)
**Supabase:** https://cjatliwegffjsbyanbjk.supabase.co — org NC GOD INC, Healthy, Nano, East US. No tables/migrations yet — run `supabase/schema.sql` in the Supabase SQL Editor.
**AI:** OpenRouter (connected, verified 422 models) for the AI Hair Helper / Content Studio. Server-only key.
**YouTube:** @NipteiTV — https://www.youtube.com/@NipteiTV, nipteiapp@gmail.com

## What this repo is

A deployable Next.js (App Router, TypeScript) storefront in `apps/storefront/`.
It is the code version of the NIPTEI Shop built in Muse — same catalog, quiz,
Transparent Pricing, Swap Promise Draft V3, supplier registration, and owner
dashboard shell — rebuilt as code that can be pushed to GitHub and deployed
to Vercel at shop.niptei.com.

**Honest status:** no prices are set anywhere in this code (every product
shows "Price coming soon"), Stripe is not connected, no supplier has been
contacted or sample-tested, no email is sent by any route, and the Swap
Promise is Draft V3, not live. Do not invent prices, reviews, supplier
emails, or live integrations.

## Products

Core 8 + Luxury 11 + Hero 3 (in development) + Men Care (6, in development)
+ Pet Hair Care (6, in development, vet review required) + Kids / New Mums /
Sensitive Scalp / Silver & Grey (coming soon, waitlist only). See
`apps/storefront/lib/products.ts` — the catalog source of truth.

## Pricing — no swap buffer

Retail = (Supply + Packaging + Shipping + Marketing CPA + $0.30)
         / ((1 − Target Margin %) − Merchant Processing %)

There is NO $0.40 swap buffer anywhere. The customer pays the exchange
shipping fee separately: Exchange Shipping Fee = Supplier Shipping Charge +
Carrier Postage. $5.00 is an example only until real costs are entered.

## Run locally

```bash
cd apps/storefront
npm install
cp .env.example .env.local   # fill in NEXT_PUBLIC_SUPABASE_ANON_KEY only
npm run dev                  # http://localhost:3000
npm run build                # production build check
```

## Push to GitHub (parent runs these — do NOT run them in a subagent)

```bash
cd ~/workspace/niptei
git init
git add .
git commit -m "NIPTEI Shop — deployable Next.js storefront"
git branch -M main
git remote add origin https://github.com/Ncgodinc/niptei.git
git push -u origin main
```

If the remote already has the README commit, pull first:
`git pull origin main --allow-unrelated-histories`, then push.
Never commit `.env.local` or any real key. `.gitignore` already excludes them.

## Deploy to Vercel

1. Vercel → Add New → Project → Import `Ncgodinc/niptei` from GitHub.
2. **Root Directory: `apps/storefront`** (the Next.js app lives there).
3. Framework: Next.js (auto-detected). Build: `npm run build`.
4. Environment Variables (Project Settings → Environment Variables):
   - `NEXT_PUBLIC_SUPABASE_URL` = https://cjatliwegffjsbyanbjk.supabase.co
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = from Supabase Dashboard → Settings → API
   - `OPENROUTER_API_KEY` = server-only, from the Secure Vault / OpenRouter
   - `OPENROUTER_MODEL` = meta-llama/llama-3.1-8b-instruct (optional)
   - `SUPABASE_SERVICE_ROLE_KEY` = server-only, only if a server route needs it
5. Deploy. Vercel gives a `*.vercel.app` URL first — test there.
6. Add the domain: Vercel → Project → Settings → Domains → add
   `shop.niptei.com`. Vercel shows the DNS record to add.
7. IONOS → niptei.com → DNS: replace the shop.niptei.com Default Site
   A/AAAA records with the record Vercel gives you (usually a CNAME to
   `cname.vercel-dns.com`). Leave the mail (MX/SPF/DKIM) records alone.
   DNS can take minutes to hours to propagate. Do not delete the
   www / govwin Vercel CNAMEs or the niptei.com A records.

## Supabase setup (do this before going live)

1. Open the Supabase project above → SQL Editor → run `supabase/schema.sql`.
2. Settings → API → copy the Project URL and `anon` key into Vercel env vars.
3. Storage → create bucket `product-images` (public, read-only) for product photos.
4. No tables exist yet — the storefront falls back to the local catalog in
   `lib/products.ts` until the tables are created and populated.

## Structure

```
apps/storefront/        Next.js app (deploy this folder)
  app/                  Routes: / , /collections, /products/[slug], /quiz,
                        /pricing, /swap-promise, /hair-loss,
                        /suppliers/register, /suppliers/quote,
                        /dashboard/*, /api/*
  lib/products.ts       Catalog (no prices set)
  lib/pricing.ts        Transparent Pricing + Swap Promise terms + hair education
  lib/supabase.ts       Browser-safe Supabase client (null when env missing)
supabase/schema.sql     Full schema (products + quiz, waitlist, orders,
                        suppliers, registrations, quotes, listings, swaps)
docs/BRAND.md           Brand guide
docs/LAUNCH_STRATEGY.md Launch plan
```

## What is still placeholder

- Checkout: no Stripe, no payment is taken. "Add to Bag" is disabled until prices and Stripe are live.
- Owner dashboard: shell pages with real structure and no invented data.
- Supplier Portal login, Stripe Connect split, and social autopilot: not built in this codebase yet — they exist in the Muse shop plan and need Supabase Auth + Stripe Connect onboarding before they can go live.
- Product photos: not in this repo. Add them under `apps/storefront/public/` and set `image_path` in Supabase.
