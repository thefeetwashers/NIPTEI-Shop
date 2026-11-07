import ShippingCalculator from "@/app/components/shipping-calculator";

export default function DashboardShippingPage() {
  return (
    <section><div className="container">
      <h1>Dashboard — Shipping</h1>
      <p>Dual-carrier strategy (UPS + USPS) via ShipStation or Pirate Ship — to connect when shipping goes live. Pirate Ship account exists for nipteiapp@gmail.com; email verification and a payment method are still needed before postage can be bought.</p>
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
