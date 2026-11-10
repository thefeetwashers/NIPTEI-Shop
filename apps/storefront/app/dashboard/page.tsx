import Link from "next/link";
import { INTEGRATIONS, AUTOMATION_RULES, PUBLIC_OFFERS, SHOP_SETTINGS, SEO_SETTINGS, NEXT_FIRSTS } from "@/lib/artifact-data";
import { PRODUCTS } from "@/lib/products";

const LINKS = [
  ["Products", "/dashboard/products", "Prices, stock, live / draft. All prices unset until the owner sets them."],
  ["Orders", "/dashboard/orders", "No orders yet. Stripe is not connected."],
  ["Suppliers", "/dashboard/suppliers", "20 seeded suppliers, registration approvals, quote requests, Trust Score."],
  ["Pricing", "/dashboard/pricing", "Transparent Pricing Calculator. No swap buffer."],
  ["Swaps", "/dashboard/swaps", "Swap requests. Empty until a real swap happens."],
  ["Labels Library", "/dashboard/labels", "Label proofs for suppliers — shop.niptei.com • support@niptei.com. Design proofs, not final print files."],
  ["Shipping", "/dashboard/shipping", "Dual-carrier strategy + Shipping Calculator. Estimate only."],
  ["First Real Product Tracker", "/dashboard/tracker", "Two trackers (Hero 3, then the Serum) — 7 steps each. All steps Not started."],
];

const FIRSTS: Array<[string, string, string]> = [
  ["Hair Twin", "Building", "A 12-week living profile, climate / season-aware, in My NIPTEI."],
  ["Ask Someone Like Me", "Building", "Anonymised verified-buyer experiences, permission only."],
  ["Swap Promise", "Coming soon", "One quiz-matched swap in 30 days, keep the old bottle, pay only actual supplier shipping plus postage. Not live until the owner enables it with real costs and approved terms."],
  ["NIPTEI Passport / Ritual Points", "Building", "From real actions only."],
  ["Global Hair Map", "Building", "Opt-in pins storing only country / type / climate. Empty countries show “Be the first in your country”."],
  ["Watch Your Bottle Being Made", "Building", "Real batch photo at quality check, or “Update coming soon”."],
  ["Never Run Out", "Building", "Usage-based reorder offer 3 days before run-out. Never auto-charge without approval."],
  ["The NIPTEI Standard", "Live", "Public standard — transparent pricing, Honest Origin, Firsts."],
];

export default function DashboardPage() {
  return (
    <section><div className="container">
      <h1>Owner Dashboard</h1>
      <div className="notice">This dashboard shows real structure and no invented data. Connect Supabase (run supabase/schema.sql) and set env vars to make it live. No orders, reviews, or supplier activity exist yet.</div>

      <h2>Overview</h2>
      <div className="card">
        <p>Products in the catalog: {PRODUCTS.length}. All prices unset.</p>
        <p>Orders: 0 — No orders yet. Stripe is not connected and no payment has been taken.</p>
        <p>Preorders: 0 — No preorders yet. Preorders are free reservations.</p>
        <p>Reviews: 0 — No reviews yet. Only genuine reviews from verified buyers, with permission — never invented.</p>
        <p>Swap requests: 0 — No swap requests yet. The list is empty until a real swap happens. The Swap Promise is Draft V3, not live.</p>
        <p>Supplier registration approvals: 0 pending. Quote requests: 0. Supplier listings: 0.</p>
      </div>

      <div className="grid">{LINKS.map(([label, href, desc]) => (
        <article key={href} className="card"><h3>{label}</h3><p>{desc}</p><Link href={href}>Open →</Link></article>
      ))}</div>

      <h2>Integrations — 16, all not connected</h2>
      <div className="card"><p>Integrations: 16 listed in the shop plan, all not connected until the owner authorizes each one. Stripe Connect auto-split is gated: manual approve-and-pay only until a supplier passes the sample test and completes Stripe Connect / KYC.</p>
      <table><thead><tr><th>Integration</th><th>Category</th><th>Status</th><th>Note</th></tr></thead><tbody>
        {INTEGRATIONS.map((i) => <tr key={i.id}><td>{i.label}</td><td>{i.category}</td><td>{i.status === "not_connected" ? "Not connected" : i.status}</td><td>{i.note}</td></tr>)}
      </tbody></table></div>

      <h2>AI Content Studio</h2>
      <div className="card"><p>AI Content Studio is not connected yet — set OPENROUTER_API_KEY in Vercel environment variables. No draft was generated.</p>
      <p><strong>Publishing queue:</strong> Publishing queue is empty. Nothing is auto-posted.</p></div>

      <h2>Automation Rules</h2>
      <div className="card"><table><thead><tr><th>Rule</th><th>Status</th><th>Description</th></tr></thead><tbody>
        {AUTOMATION_RULES.map((r) => <tr key={r.id}><td>{r.label}</td><td>{r.enabled ? "On" : "Off"}</td><td>{r.description}</td></tr>)}
      </tbody></table>
      <p>Rules 1–5 on, 6–10 off.</p></div>

      <h2>AI Hair / Supplier Helpers</h2>
      <div className="card">
        <p><strong>AI Hair Helper:</strong> AI Helper is not connected yet — set OPENROUTER_API_KEY in Vercel environment variables. (503 without OPENROUTER_API_KEY — no key invented.)</p>
        <p><strong>AI Supplier Helper:</strong> Supplier Helper is not connected yet — set OPENROUTER_API_KEY in Vercel environment variables. (503 without OPENROUTER_API_KEY — no key invented.)</p>
      </div>

      <h2>Suppliers &amp; Supplier Portal</h2>
      <div className="card"><p>20 seeded suppliers, registration approvals, quote requests, Trust Score. No supplier has been contacted, sample-tested, or marked Partner yet.</p>
      <p><Link href="/dashboard/suppliers">Suppliers →</Link> · <Link href="/suppliers/portal">Supplier Portal →</Link></p>
      <p>Supplier Portal: for approved suppliers only. You see only your own orders, products and Trust Score. Suppliers never set a retail price. Go-live is gated: owner approval + sample test passed + origin documents on file. Blind-ship packing slips hide the supplier — never the country of origin. Stripe Connect split is gated: auto-pay only after sample test passed AND Stripe Connect onboarding / KYC complete; otherwise manual approve-and-pay. Stripe is not connected yet.</p></div>

      <h2>Pre-orders — 4–6 weeks</h2>
      <div className="card"><p>No preorders yet. Preorders are free reservations — join a waitlist from The Collection and it will show here under your email.</p>
      <p>Pre-order lead time: 4–6 weeks. Batch Unlock: no batches unlocked yet — no preorders exist to unlock.</p></div>

      <h2>Pricing Calculator</h2>
      <div className="card"><p>The Transparent Pricing Calculator lives on the storefront at <Link href="/pricing">/pricing</Link>. Formula: Retail = (Supply + Packaging + Shipping + Marketing CPA + $0.30) / ((1 − Target Margin %) − Merchant Processing %). No $0.40 swap buffer anywhere.</p></div>

      <h2>Draft Bundles</h2>
      <div className="card"><p>No draft bundles published yet. Bundles in the catalog show “Price coming soon” until the owner sets a real price.</p></div>

      <h2>Cart Recovery — opt-in only</h2>
      <div className="card"><p>Omnichannel cart recovery is opt-in only. Recovery discount: {SHOP_SETTINGS.recovery_discount_pct}% — {SHOP_SETTINGS.recovery_discount_enabled ? "enabled" : "disabled, no code set"}. Referral: $5 credit, {PUBLIC_OFFERS.referral_enabled ? "enabled" : "disabled"}. Quiz offer: {PUBLIC_OFFERS.quiz_offer_pct}% — {PUBLIC_OFFERS.quiz_offer_enabled ? "enabled" : "disabled, no code set"}. Waitlist offer: {PUBLIC_OFFERS.waitlist_offer_pct}% — {PUBLIC_OFFERS.waitlist_offer_enabled ? "enabled" : "disabled, no code set"}.</p></div>

      <h2>SEO</h2>
      <div className="card"><p>SEO feed: {PRODUCTS.length} rows, all OutOfStock, price not submitted, origin not yet documented.</p>
      <p>Google sitemap submitted: {SEO_SETTINGS.google_sitemap_submitted ? "Yes" : "No"}. Bing sitemap submitted: {SEO_SETTINGS.bing_sitemap_submitted ? "Yes" : "No"}. Ownership verified: {SEO_SETTINGS.ownership_verified ? "Yes" : "No"}. Business profile done: {SEO_SETTINGS.business_profile_done ? "Yes" : "No"}.</p></div>

      <h2>TV Ads — paid, not free</h2>
      <div className="card"><p>TV Ads are paid, not free. TV ads: {SHOP_SETTINGS.tv_enabled ? "enabled" : "off"}. Budget: ${(SHOP_SETTINGS.tv_budget_cents / 100).toFixed(2)}. Daily cap: ${(SHOP_SETTINGS.tv_daily_cap_cents / 100).toFixed(2)}.</p></div>

      <h2>Free Marketing</h2>
      <div className="card"><p>Free marketing runs on the automation rules that are on: Product promotions, Hair-care education &amp; tutorials, New product launches, Blog articles &amp; announcements, and Customer reviews &amp; testimonials — only genuine reviews where the customer gave sharing permission. Reviews are never invented. Integrations: 16 listed, all not connected until the owner authorizes each one.</p></div>

      <h2>Strengths &amp; Fixes</h2>
      <div className="card"><p><strong>Strengths:</strong> the pricing formula is public and transparent; the $0.40 swap buffer has been removed entirely from the retail calculation; the margin floor is 25%.</p>
      <p><strong>Fixes needed:</strong> no real supplier quote is in the calculator yet — every figure is an example only, never a live price; Supplier Operations Score: Not scored yet — no real supplier score; all 16 integrations not connected; no orders, reviews, or supplier activity exist yet.</p></div>

      <h2>Next 100 Years — 8 Firsts</h2>
      {FIRSTS.map(([t, s, d]) => <div key={t} className="card"><h3>{t} — {s}</h3><p>{d}</p></div>)}
      <p>Swap Promise status in the tracker: {NEXT_FIRSTS.statuses["swap-promise"] === "coming_soon" ? "Coming soon" : NEXT_FIRSTS.statuses["swap-promise"]}. Swap enabled: {NEXT_FIRSTS.swap_enabled ? "Yes" : "No"}. Swap fee: ${(NEXT_FIRSTS.swap_fee_cents / 100).toFixed(2)} — example only, not a real fee.</p>
    </div></section>
  );
}
