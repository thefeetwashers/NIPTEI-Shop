import ShippingCalculator from "@/app/components/shipping-calculator";

export default function DashboardShippingPage() {
  return (
    <section><div className="container">
      <h1>Dashboard — Shipping</h1>
      <p>Dual-carrier strategy (UPS + USPS) via ShipStation or Pirate Ship — to connect when shipping goes live. Pirate Ship account exists for nipteiapp@gmail.com; email verification and a payment method are still needed before postage can be bought.</p>
      <div className="card"><h2>Dual-Carrier Shipping (UPS + USPS)</h2>
        <table><thead><tr><th>Carrier</th><th>Best for</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
          <tr><td>USPS (Post Office)</td><td>Lightweight single-bottle orders under 1 lb</td><td>Cheapest rates for lightweight serums; reaches every mailbox and PO Box</td><td>Tracking can occasionally lag; slower cross-country ground</td></tr>
          <tr><td>UPS</td><td>Multi-product household bundles over 1–2 lbs</td><td>Superior tracking reliability; fast, predictable ground delivery; handles heavier boxes efficiently</td><td>Can get expensive for ultra-lightweight single items; strict residential delivery surcharges</td></tr>
          <tr><td>FedEx</td><td>Express / overnight</td><td>Fast transit networks</td><td>Notorious surprise residential delivery fees; less reliable ground service for independent e-commerce than UPS</td></tr>
        </tbody></table>
      </div>
      <div className="card"><h2>The dual-carrier rule</h2>
        <p><strong>1. Single Serum Buyer (The Tester)</strong> — one 50 ml bottle, well under 1 lb: ship via USPS Ground Advantage. Usually $3.50–$5.00 across the US, built-in tracking, 2–5 business days.</p>
        <p><strong>2. One Household, One Shop Buyer (Multi-Routine Bundle)</strong> — products for self, partner, kids, pets, box heavier and more valuable: ship via UPS Ground. Exact tracking notifications, avoids FedEx residential inconsistencies, often cheaper than USPS once a package passes 2–3 lbs.</p>
      </div>
      <div className="card"><h2>Financial example — targets / estimates only, never live prices</h2>
        <table><thead><tr><th></th><th>Gross</th><th>Total fulfilled</th><th>Net</th><th>Margin</th></tr></thead><tbody>
          <tr><td>Single $38 serum</td><td>$38.00</td><td>$10.39</td><td>$27.61</td><td>72.6%</td></tr>
          <tr><td>Bundle $76</td><td>$76.00</td><td>$20.28</td><td>$55.72</td><td>73.3%</td></tr>
        </tbody></table></div>
      <ShippingCalculator />
      <p>Saved calculations: none yet in this deployable build — calculations are saved once Supabase is connected (run supabase/schema.sql).</p>
    </div></section>
  );
}
