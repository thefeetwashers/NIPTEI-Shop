import Link from "next/link";
import { productsByCollection } from "@/lib/products";
import { ProductGrid } from "@/app/components/product-card";

export default function MenPage() {
  const men = productsByCollection("men");
  const bundles = productsByCollection("bundles").filter((p) => p.slug === "bundle-mens-kit");
  return (
    <section><div className="container">
      <h1>Men Care</h1>
      <p>Beard, scalp and styling care for men — in development, waitlist only. Preorder only, Price coming soon, no charge today.</p>
      <ProductGrid items={men} />
      <h2>Men’s bundles</h2>
      <ProductGrid items={bundles} />
      <p><Link href="/collection?for=men">See Men Care in The Collection →</Link> · <Link href="/problems">Shop by Your Problem — Beard →</Link></p>
    </div></section>
  );
}
