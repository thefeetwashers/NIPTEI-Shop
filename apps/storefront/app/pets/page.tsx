import Link from "next/link";
import { productsByCollection } from "@/lib/products";
import { ProductGrid } from "@/app/components/product-card";

export default function PetsPage() {
  const pets = productsByCollection("pet");
  return (
    <section><div className="container">
      <h1>Pet Hair Care — Gentle care for dogs and cats</h1>
      <div className="warning"><strong>Pet products — NOT for human use.</strong> Human hair products are NOT for pets. Pet formulas are made separately, and every pet product is <strong>“In development — vet review needed”</strong> — never “Vet-reviewed” until a vet actually reviews it. Tea tree oil and many essential oils are dangerous for cats, so dogs and cats have separate formulas.</div>
      <img src="/images/pet-care-collection.jpg" alt="NIPTEI Pet Care collection — happy golden dog and grey cat, side by side — design proof" style={{ width: "100%", maxWidth: 640, borderRadius: 8, marginBottom: 8 }} />
      <p>Happy dogs and happy cats — one gentle collection, with a separate shampoo for each. All products are Preorder only, Price coming soon, no charge today.</p>
      <ProductGrid items={pets} />
      <div className="card"><h2>Pet safety rules</h2><ul>
        <li>Human products are never for pets — not even a small amount.</li>
        <li>Dogs and cats need separate formulas. Never use the dog shampoo on a cat.</li>
        <li>Pet formulas need a separate vet / pet-professional review before sale.</li>
        <li>Pet products are labelled NOT for human use.</li>
      </ul></div>
      <p><Link href="/collection?for=pets">See Pet Hair Care in The Collection →</Link> · <Link href="/quiz">Take the Hair Quiz (For My Pet → waitlist) →</Link></p>
    </div></section>
  );
}
