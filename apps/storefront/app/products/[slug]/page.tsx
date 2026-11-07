import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, formatPrice } from "@/lib/products";
import { SWAP_PROMISE_TERMS } from "@/lib/pricing";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  return (
    <section><div className="container">
      <p><Link href="/collections">← All products</Link></p>
      <h1>{p.name}</h1>
      <p>{p.tagline}{p.sizeMl ? ` · ${p.sizeMl} ml` : ""}</p>
      <p className="price soon">{formatPrice(p.priceCents)}</p>
      <div className="notice">
        <strong>🔁 The Swap Promise</strong><br />
        Not your perfect match? Swap it once for free within 30 days for the right hair formula. You only cover the flat-rate exchange shipping fee. <Link href="/swap-promise">Read the terms (Draft) →</Link>
      </div>
      <div className="card"><h2>About this product</h2><p>{p.description}</p>
        <p><strong>Origin:</strong> {p.madeIn}. {p.originVerified ? "Verified with documents on file." : "Origin verification pending — no Made in USA badge is shown until documents are on file."}</p>
        <p><strong>Ingredient origin:</strong> {p.ingredientOrigin}. Jamaican Black Castor Oil is an ingredient, never a manufacturing location.</p>
        {p.forHairTypes && <p><strong>For:</strong> {p.forHairTypes.join(", ")}</p>}
        {p.notFor && <p><strong>Not for:</strong> {p.notFor}</p>}
      </div>
      <div className="card"><h2>See how this price is made</h2>
        <p><strong>Price coming soon.</strong> Until the owner sets a real price and enters real costs, there is no live price for this product.</p>
        <p>When it is priced, the breakdown will show: Supply + Packaging + Shipping + Marketing CPA + $0.30, divided by ((1 − Target Margin %) − Merchant Processing %). No swap buffer is ever added — the customer pays the exchange shipping fee separately. <Link href="/pricing">Try the Transparent Pricing Calculator →</Link></p>
      </div>
      <p><Link className="btn" href="/quiz">Find your routine — take the quiz</Link></p>
      <p style={{ fontSize: 13, color: "#666" }}>Swap Promise status: {SWAP_PROMISE_TERMS.status}.</p>
    </div></section>
  );
}
