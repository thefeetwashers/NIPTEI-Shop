import Link from "next/link";

const LINKS = [
  ["Products", "/dashboard/products", "Prices, stock, live / draft. All prices unset until the owner sets them."],
  ["Orders", "/dashboard/orders", "No orders yet. Stripe is not connected."],
  ["Suppliers", "/dashboard/suppliers", "20 seeded suppliers, registration approvals, quote requests, Trust Score."],
  ["Pricing", "/dashboard/pricing", "Transparent Pricing Calculator. No swap buffer."],
  ["Swaps", "/dashboard/swaps", "Swap requests. Empty until a real swap happens."],
];

export default function DashboardPage() {
  return (
    <section><div className="container">
      <h1>Owner Dashboard — Placeholder</h1>
      <div className="notice">This dashboard is a placeholder shell. It shows real structure and no invented data. Connect Supabase (run supabase/schema.sql) and set env vars to make it live. No orders, reviews, or supplier activity exist yet.</div>
      <div className="grid">{LINKS.map(([label, href, desc]) => (
        <article key={href} className="card"><h3>{label}</h3><p>{desc}</p><Link href={href}>Open →</Link></article>
      ))}</div>
      <p>Integrations: 16 listed in the shop plan, all not connected until the owner authorizes each one. Stripe Connect auto-split is gated: manual approve-and-pay only until a supplier passes the sample test and completes Stripe Connect / KYC.</p>
    </div></section>
  );
}
