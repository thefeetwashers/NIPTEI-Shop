import Link from "next/link";
import { getProduct } from "@/lib/products";
import { ProductCard } from "@/app/components/product-card";

const ROWS: Array<[string, string, string[]]> = [
  ["Buildup — product / sebum buildup, scalp suffocation", "Purifying Scalp Scrub", ["care-scalp-scrub"]],
  ["Itch / flaking — severe flaking and irritation", "Microbiome-Balancing Drop Serum / Scalp-Resurfacing & Growth Serum", ["scalp-resurfacing-growth-serum"]],
  ["Damaged / brittle — over-processed hair", "Molecular Hair Repair Mask", ["nourishing-hair-mask"]],
  ["Thinning — wider part, more scalp showing, excessive shedding", "Root Renewal Scalp Stimulating Elixir + Hair Growth Serum", ["care-root-renewal-elixir", "hair-growth-serum"]],
  ["Dry / dull", "Nourishing Hair Mask + Argan Oil Shampoo + Argan Oil Conditioner", ["nourishing-hair-mask", "argan-oil-shampoo", "argan-oil-conditioner"]],
  ["Beard", "Beard Growth Oil + Beard Wash & Conditioner + Razor Bump Oil", ["men-beard-growth-oil", "men-beard-wash-conditioner", "men-razor-bump-soothing-oil"]],
  ["Pet coat", "Gentle Pet Shampoo + Pet Coat & Skin Oil", ["pet-shampoo-dogs", "pet-coat-skin-oil"]],
];

export default function ProblemsPage() {
  return (
    <section><div className="container">
      <h1>Shop by Your Problem</h1>
      <p><strong>One Problem. One Solution. One Product That Does the Job.</strong></p>
      <p>Education only — never a diagnosis or a cure. If a scalp condition worries you, see a doctor / dermatologist / trichologist.</p>
      {ROWS.map(([problem, solution, slugs]) => (
        <div key={problem} className="card">
          <h2>{problem}</h2>
          <p><strong>Solution:</strong> {solution}</p>
          <div className="grid">{slugs.map((s) => { const p = getProduct(s); return p ? <ProductCard key={s} p={p} /> : null; })}</div>
        </div>
      ))}
      <p>Worldwide shipping coming soon — join the waitlist. English / USD for now. <Link href="/quiz">Find your routine first →</Link></p>
    </div></section>
  );
}
