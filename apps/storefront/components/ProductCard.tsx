import Link from "next/link";
import { PRODUCTS, formatPrice, COLLECTION_LABELS } from "@/lib/products";

// Product card — fresh scaffold build (artifact v15).
// Shows a product image ONLY when the product has a real image in public/images
// (kids / pet design images). Otherwise no image and no "photo coming soon" text.
export function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <article className="card">
      {p.image && (
        <img
          src={p.image}
          alt={`${p.name} — design proof, not a final print file`}
          style={{ width: "100%", borderRadius: 6, marginBottom: 8 }}
        />
      )}
      <h3>{p.name}</h3>
      <p>
        {p.tagline}
        {p.sizeLabel ? ` · ${p.sizeLabel}` : ""}
      </p>
      <p className="price soon">{formatPrice(p.priceCents)}</p>
      <p>
        <span className="badge">{COLLECTION_LABELS[p.collection]}</span>{" "}
        {p.status !== "live" && (
          <span className="badge gold">
            {p.status === "in-development" ? "In Development — Waitlist" : "Coming Soon — Waitlist"}
          </span>
        )}
        {p.collection === "pet" && <span className="badge grey">NOT for human use</span>}
      </p>
      <p>{p.description}</p>
      <p>
        <Link href={`/products/${p.slug}`}>View product →</Link>
      </p>
    </article>
  );
}

export function ProductGrid({ items }: { items: (typeof PRODUCTS)[number][] }) {
  return (
    <div className="grid">
      {items.map((p) => (
        <ProductCard key={p.slug} p={p} />
      ))}
    </div>
  );
}
