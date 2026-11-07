import Link from "next/link";
import { PRODUCTS, productsByCollection, COLLECTION_LABELS, PREORDER_TERMS, LABEL_CONTACT_LINE, type Collection } from "@/lib/products";
import { ProductGrid } from "@/app/components/product-card";
import HairLetterForm from "@/app/components/hair-letter-form";

const GROUPS: Array<[Collection, string]> = [
  ["core", "Collection A — Shampoo & Conditioner (Core)"], ["luxury", "Luxury Collection"], ["chebe", "Chebe Collection"],
  ["hero3", "Hero 3 — In Development · Preorder Only"], ["scalp", "Scalp Health — Skin-First Scalp Care · Three Hero Categories"],
  ["complete", "Complete Care"], ["firsts", "NIPTEI Firsts"], ["men", "Men Care"], ["pet", "Pet Hair Care"],
  ["kids", "NIPTEI Kids"], ["new-mums", "New Mums / Postpartum"], ["sensitive", "Sensitive Scalp & Care Through Treatment"],
  ["silver", "Silver & Grey"], ["pro", "NIPTEI Pro — for Salons & Barbers"], ["gift", "Gift a Routine · Travel & Gym Kit"],
  ["ritual", "The NIPTEI Ritual"], ["bundles", "Bundle & Gift Sets"], ["botanical", "Rare Botanicals"], ["reserve", "Botanical Reserve — Adults"], ["little", "Little Botanicals — Children"],
];

export default async function CollectionPage({ searchParams }: { searchParams?: Promise<{ for?: string }> }) {
  const sp = await searchParams;
  const filter = sp?.for;
  const groups = filter === "women" ? GROUPS.filter(([k]) => ["core", "luxury", "chebe", "hero3", "scalp", "complete", "firsts", "botanical", "reserve", "bundles", "gift", "ritual"].includes(k))
    : filter === "men" ? GROUPS.filter(([k]) => k === "men" || k === "bundles")
    : filter === "kids" ? GROUPS.filter(([k]) => k === "kids" || k === "little" || k === "bundles")
    : filter === "pets" ? GROUPS.filter(([k]) => k === "pet")
    : GROUPS;
  return (
    <section><div className="container">
      <h1>The Collection · {PRODUCTS.length} products</h1>
      <p><strong>{PREORDER_TERMS}</strong> Every product shows “Price coming soon” until the owner sets a real price. No prices, delivery dates, or stock are invented. Production window 4–6 weeks where applicable.</p>
      <details className="nav-dropdown" style={{ display: "inline-block" }}>
        <summary style={{ color: "#0f5c46", cursor: "pointer", fontWeight: 700 }}>Shop by Who It’s For ▾</summary>
        <div className="nav-menu" style={{ background: "#fff", border: "1px solid #c9a227" }}>
          <Link href="/collection" style={{ color: "#0f5c46" }}>All</Link>
          <Link href="/collection?for=women" style={{ color: "#0f5c46" }}>For Women</Link>
          <Link href="/men" style={{ color: "#0f5c46" }}>For Men</Link>
          <Link href="/kids" style={{ color: "#0f5c46" }}>For Kids</Link>
          <Link href="/pets" style={{ color: "#0f5c46" }}>For Pets</Link>
        </div>
      </details>
      <p>Shop by Who It’s For: <Link href="/collection">All</Link> · <Link href="/collection?for=women">For Women</Link> · <Link href="/collection?for=men">For Men</Link> · <Link href="/collection?for=kids">For Kids</Link> · <Link href="/collection?for=pets">For Pets</Link></p>
      <p>Labels: {LABEL_CONTACT_LINE} — on every label, design proofs, not final print files. Origin verification pending — no Made in USA seal until documents are on file.</p>
      {groups.map(([key, label]) => {
        const items = productsByCollection(key);
        if (!items.length) return null;
        return (
          <div key={key} id={key}>
            <h2>{label}</h2>
            {key === "pet" && <><img src="/images/pet-care-collection.jpg" alt="NIPTEI Pet Care collection — happy dog and cat, design proof" style={{ width: "100%", maxWidth: 640, borderRadius: 8, marginBottom: 8 }} /><div className="warning"><strong>Pet safety:</strong> human hair products are NOT for pets. Pet formulas are made separately and need a vet review. Some human ingredients, including tea tree oil, are dangerous for cats. Pet products — NOT for human use.</div></>}
            {key === "kids" && <><p><span className="badge">0–3</span> <span className="badge">4–8</span> <span className="badge">9–12</span> <span className="badge">13–17</span> <span className="badge gold">Little Botanicals 4–12 first</span></p><img src="/images/kids-care-collection.jpg" alt="NIPTEI Kids Care collection — design proof" style={{ width: "100%", maxWidth: 640, borderRadius: 8, marginBottom: 8 }} /><div className="warning"><strong>Kids safety:</strong> Persistent itching, scaling, inflammation or unusual hair loss should be evaluated by a pediatrician or dermatologist rather than treated with cosmetic products alone. Every Kids product is “In Development — professional review needed”. No adult hair-growth serums or strong essential-oil treatments in children’s products.</div></>}
            {key === "scalp" && <div className="warning"><strong>This is a cosmetic, not a medicine.</strong> If you have a scalp condition, see a doctor / dermatologist / trichologist.</div>}
            <ProductGrid items={items} />
          </div>
        );
      })}
      <div className="notice"><h2>Preorder — how it works</h2><p>{PREORDER_TERMS}</p><p>Find your routine first: <Link href="/quiz">Take the Hair Quiz →</Link> · See your preorders in <Link href="/my-niptei">My NIPTEI →</Link></p></div>
      <HairLetterForm source="The Collection" />
      <p>Total products in catalog: {PRODUCTS.length}. All prices unset.</p>
    </div></section>
  );
}
