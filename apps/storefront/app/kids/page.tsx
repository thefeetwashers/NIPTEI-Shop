import Link from "next/link";
import { productsByCollection } from "@/lib/products";
import { ProductGrid } from "@/components/ProductCard";
import HairLetterForm from "@/components/HairLetterForm";

const MEDICAL = "Persistent itching, scaling, inflammation or unusual hair loss should be evaluated by a pediatrician or dermatologist rather than treated with cosmetic products alone.";

export default function KidsPage() {
  const kids = productsByCollection("kids");
  const little = productsByCollection("little");
  const bundles = [
    ...kids.filter((p) => p.slug.startsWith("kids-bundle")),
    ...productsByCollection("bundles").filter((p) => p.slug.startsWith("bundle-little")),
  ];
  const first5 = ["kids-gentle-tear-free-shampoo", "kids-moisturizing-shampoo", "kids-detangling-spray", "kids-leave-in-conditioner", "kids-curl-cream"].map((s) => kids.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <section><div className="container">
      <p><span className="badge gold">NIPTEI KIDS</span></p>
      <h1>Little Hair. Big Confidence.</h1>
      <img src="/images/kids-care-collection.jpg" alt="NIPTEI Kids Care collection — design proof" style={{ width: "100%", maxWidth: 640, borderRadius: 8, marginBottom: 8 }} />
      <p>NIPTEI Kids — for ALL children, from toddlers to teenagers. Emerald green, soft ivory, champagne gold and pastel accents. Inclusive packaging for Black, White, Asian and Hispanic children. Visually connected to the adult NIPTEI brand, with its own softer identity.</p>
      <div className="warning"><strong>Medical line — on every Kids page:</strong> {MEDICAL}</div>
      <p>Formulas are developed and safety-tested specifically for the intended children’s age groups. Every Kids product is <strong>“In Development — professional review needed”</strong> until a professional actually reviews it. We avoid adult hair-growth serums and strong essential-oil treatments in children’s products. No child is shown in ads without a parent’s written permission.</p>
      <h2>Start Here — The First 5</h2>
      <p>The strongest place to start: shampoo, conditioner, detangling spray, leave-in conditioner and curl cream.</p>
      <ProductGrid items={first5} />
      <h2>Shop by Age Group</h2>
      <h3>Babies &amp; Toddlers (0–3 years)</h3><p>Extra-gentle, tear-free only, simplest formulas, professional review for this age group.</p>
      <ProductGrid items={kids.filter((p) => p.ageGroup === "0–3" || p.slug.includes("baby"))} />
      <h3>Young Children (4–8 years)</h3><p>Tear-free shampoo, curly-kids detangling spray, kids curl cream, kids scalp oil — detangling and curl care first.</p>
      <ProductGrid items={kids.filter((p) => ["kids-gentle-tear-free-shampoo", "kids-detangling-spray", "kids-curl-cream", "kids-scalp-oil"].includes(p.slug))} />
      <h3>Older Children (9–12 years)</h3><p>Gentle shampoo / conditioner, detangling, curl care, moisture — no adult serums.</p>
      <ProductGrid items={kids.filter((p) => ["kids-moisturizing-shampoo", "kids-conditioner", "kids-leave-in-conditioner", "kids-hair-butter", "kids-deep-conditioning-mask", "kids-scalp-moisturizer", "kids-gentle-hair-oil", "kids-hair-mist"].includes(p.slug))} />
      <h3>Teenagers (13–17 years)</h3><p>Gentle care for changing hair, moisture, detangling, curl care — no adult hair-growth serums, no strong essential-oil treatments.</p>
      <ProductGrid items={kids.filter((p) => ["kids-protective-style-spray", "kids-edge-styling-cream"].includes(p.slug))} />
      <h2>Little Botanicals (ages 4–12 first)</h2>
      <p>Children’s formulas are purpose-built, not diluted adult products. Separate safety and formulation assessment before any baby / toddler products, and teens are a later bridge to the adult range. Avoid essential-oil-heavy formulas, strong fragrance, aggressive scalp actives and adult hair-growth positioning for children. “Natural” does not automatically mean safe.</p>
      <ProductGrid items={little} />
      <h2>Kids Bundles</h2>
      <ProductGrid items={bundles} />
      <h2>For Parents — 7 children’s hair-care needs</h2>
      <div className="card"><ol>
        <li>Dry hair and scalp.</li><li>Tangling and difficult detangling.</li><li>Hair breakage.</li><li>Dry or frizzy curls.</li><li>Scalp irritation or sensitivity.</li><li>Difficulty maintaining natural curls and coils.</li><li>Hair that needs extra moisture and conditioning.</li>
      </ol><p><strong>Scalp problems:</strong> Persistent dandruff, redness, itching and inflammation may need medical treatment rather than ordinary cosmetic hair products. <strong>Growth / thickness:</strong> Hair loss in children should be evaluated to identify the cause. Ringworm, alopecia areata, nutritional problems and traction can all contribute. Do not market children’s products as treatments for hair loss without appropriate medical and regulatory support. <strong>Hairstyle-related:</strong> The most important prevention is avoiding tight hairstyles and repeated pulling. <strong>Infections / medical:</strong> These conditions may require a pediatrician or dermatologist. NIPTEI should not market ordinary shampoo, oils or serums as cures for them.</p></div>
      <p>All Kids products: Preorder only, Price coming soon, no charge today. <Link href="/collection?for=kids">See Kids in The Collection →</Link> · <Link href="/quiz">Take the Hair Quiz →</Link></p>
      <HairLetterForm source="NIPTEI Kids" />
    </div></section>
  );
}
