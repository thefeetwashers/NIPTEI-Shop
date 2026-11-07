import Link from "next/link";
import { PRODUCTS, formatPrice, COLLECTION_LABELS, LABEL_CONTACT_LINE, PREORDER_TERMS } from "@/lib/products";

export function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <article className="card">
      {p.image && <img src={p.image} alt={`${p.name} — design proof, not a final print file`} style={{ width: "100%", borderRadius: 6, marginBottom: 8 }} />}
      <h3>{p.name}</h3>
      <p>{p.tagline}{p.sizeLabel ? ` · ${p.sizeLabel}` : ""}</p>
      <p className="price soon">{formatPrice(p.priceCents)}</p>
      <p>
        <span className="badge">{COLLECTION_LABELS[p.collection]}</span>{" "}
        {p.status !== "live" && <span className="badge gold">{p.status === "in-development" ? "In Development — Waitlist" : "Coming Soon — Waitlist"}</span>}
        {p.collection === "pet" && <span className="badge grey">NOT for human use</span>}
      </p>
      <p>{p.description}</p>
      {p.notFor && <p style={{ fontSize: 13, color: "#666" }}>{p.notFor}</p>}
      <p style={{ fontSize: 13, color: "#666" }}>Label: {LABEL_CONTACT_LINE} · Design proof — not a final print file.</p>
      <p><Link href={`/products/${p.slug}`}>View product →</Link></p>
      <p style={{ fontSize: 13 }}>{PREORDER_TERMS}</p>
    </article>
  );
}

export function ProductGrid({ items }: { items: (typeof PRODUCTS)[number][] }) {
  return <div className="grid">{items.map((p) => <ProductCard key={p.slug} p={p} />)}</div>;
}
