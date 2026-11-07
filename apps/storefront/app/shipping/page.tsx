import ShippingCalculator from "@/app/components/shipping-calculator";

export default function ShippingPage() {
  return (
    <section><div className="container">
      <h1>Shipping &amp; Delivery</h1>
      <p>We ship via UPS and USPS — a dual-carrier strategy, not a single carrier for everything.</p>
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
        <p>Shipping software: ShipStation or Pirate Ship to manage both carriers, print labels, and sync tracking. <strong>Not connected yet</strong> — listed as “to connect when shipping goes live”. Pirate Ship account exists for nipteiapp@gmail.com (USPS + UPS, no monthly fee); email verification and a payment method are still needed before postage can be bought.</p>
      </div>
      <div className="card"><h2>Shipping &amp; Delivery Policy — Proposed, not live</h2>
        <p>Free shipping on orders over $50 (bundles upgraded to UPS Ground at no extra cost). Under $50, flat $4.95 via USPS. Processing 1–2 business days. PO Box / APO / FPO via USPS only.</p>
        <p>Financial example only, never a live price: Single $38.00 gross / $10.39 total fulfilled / $27.61 net / 72.6% vs Bundle $76.00 / $20.28 / $55.72 / 73.3% — targets / estimates only.</p>
        <p>Checkout incentive, PROPOSED, not live until the owner enables it: “Bundle a routine for your partner or family member and get upgraded to Free UPS 3-Day Reliable Shipping.”</p>
      </div>
      <ShippingCalculator />
      <div className="card"><h2>Unboxing — The NIPTEI Ritual</h2>
        <p>Matte white / raw kraft box, centered logo, inside lid: “Custom Formulas For The Whole Household.” Divider cards For Me / For My Partner (+ Child / Pet — pet products NOT for human use), tissue with translucent logo, sticker: “Your 60-Second Diagnostic Results Are Inside.”, Diagnostic Summary Thank-You Card with a QR code to My NIPTEI (no fake QR).</p>
        <p>Shipping emails (drafts, automation OFF, sender nipteiapp@gmail.com until a support@niptei.com mailbox is set up): Dispatched — “Your Niptei Household Routine is on the move! 📦” · Delivered — “Delivered: Your customized hair care has arrived 🏠”.</p>
      </div>
      <p>Worldwide shipping — coming soon, join the waitlist for your country.</p>
    </div></section>
  );
}
