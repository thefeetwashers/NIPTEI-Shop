import Link from "next/link";
import { productsByCollection } from "@/lib/products";
import { ProductGrid } from "@/components/ProductCard";

export default function LuxuryPage() {
  const luxury = productsByCollection("luxury");
  const ritual = productsByCollection("ritual");
  const gift = productsByCollection("gift");
  return (
    <section><div className="container">
      <h1>Luxury — The NIPTEI Ritual</h1>
      <p>Luxury black, gold and emerald green. Premium amber bottles. A premium international brand customers recognise immediately — “Healthy Hair. Confident You.” / “Beauty Has No Boundaries.”</p>
      <div className="card"><h2>Luxury Unboxing &amp; The NIPTEI Ritual</h2><p>Matte white / raw kraft box, centered logo, inside lid: “Custom Formulas For The Whole Household.” Divider cards, tissue with translucent logo, sticker: “Your 60-Second Diagnostic Results Are Inside.”, Diagnostic Summary Thank-You Card with a QR code to My NIPTEI. Coming Soon / waitlist only.</p></div>
      <div className="card"><h2>Personal Hair Concierge</h2><p>30 / 60 / 90-day check-ins. Waitlist only — no staff invented, no claims invented.</p></div>
      <div className="card"><h2>NIPTEI Ritual Subscription Box</h2><p>Coming Soon. Never auto-charged without approval.</p></div>
      <div className="card"><h2>Luxury Gifting</h2><p>Gift a routine — a box, not a guess. Coming Soon / waitlist only.</p></div>
      <h2>The Luxury Collection</h2>
      <ProductGrid items={luxury} />
      <ProductGrid items={ritual} />
      <ProductGrid items={gift} />
      <p><Link href="/standards">Our Standards — Ingredient &amp; Claims Transparency →</Link></p>
      <p>Ritual Guides: coming soon. All Luxury additions are Coming Soon / waitlist only, no prices, no invented certifications or staff.</p>
    </div></section>
  );
}
