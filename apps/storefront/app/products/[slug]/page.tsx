import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, formatPrice, LABEL_CONTACT_LINE, PREORDER_TERMS } from "@/lib/products";
import { SWAP_PROMISE_TERMS } from "@/lib/pricing";
import HairLetterForm from "@/app/components/hair-letter-form";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  return (
    <section><div className="container">
      <p><Link href="/collection">← The Collection</Link></p>
      <h1>{p.name}</h1>
      <p>{p.tagline}{p.sizeLabel ? ` · ${p.sizeLabel}` : ""}</p>
      <p className="price soon">{formatPrice(p.priceCents)}</p>
      <p>{PREORDER_TERMS}</p>
      <div className="notice">
        <strong>🔁 The Swap Promise</strong><br />
        Not your perfect match? Swap it once for free within 30 days for the right hair formula. You only cover the flat-rate exchange shipping fee. <Link href="/swap-promise">Read the terms (Draft) →</Link>
      </div>
      <div className="card"><h2>About this product</h2><p>{p.description}</p>
        <p><strong>Origin:</strong> {p.originVerified ? (p.madeIn ? `${p.madeIn}. Verified with documents on file.` : "Verified with documents on file.") : "Origin: not yet documented — verification pending"}</p>
        <p><strong>Ingredient origin:</strong> {p.ingredientOrigin ? `${p.ingredientOrigin}. ` : ""}Jamaican Black Castor Oil is an ingredient, never a manufacturing location.</p>
        {p.forHairTypes && <p><strong>For:</strong> {p.forHairTypes.join(", ")}</p>}
        {p.notFor && <p><strong>Not for:</strong> {p.notFor}</p>}
      </div>
      <div className="card"><h2>See how this price is made</h2>
        <p><strong>Price coming soon.</strong> Until the owner sets a real price and enters real costs, there is no live price for this product.</p>
        <p>When it is priced, the breakdown will show: Supply + Packaging + Shipping + Marketing CPA + $0.30, divided by ((1 − Target Margin %) − Merchant Processing %). No swap buffer is ever added — the customer pays the exchange shipping fee separately. <Link href="/pricing">Try the Transparent Pricing Calculator →</Link></p>
      </div>
      <div className="card"><h2>What Is This, Really?</h2><p>{p.description}</p>
        <p><strong>What it is:</strong> a cosmetic hair-care product. <strong>What it is not:</strong> a medicine, a cure, or a treatment for hair loss or a scalp condition. If you have a scalp condition, see a doctor / dermatologist / trichologist.</p>
      </div>
      <div className="card"><h2>Proof, Not Promises</h2>
        <p>Ingredients: <strong>Pending</strong> — full INCI list supplied by the manufacturer, not yet on file. · Origin documents: <strong>Pending</strong> — not yet documented. · Safety review: <strong>Pending</strong> — qualified professional review required. · Real reviews: <strong>Pending</strong> — only verified buyers, with permission. Nothing is marked proven before it is proven.</p>
      </div>
      <div className="card"><h2>Supplier label</h2>
        <p>Contact line on the label: <strong>{LABEL_CONTACT_LINE}</strong>. Design proof — not a final print file. Origin: not yet documented — verification pending.</p>
      </div>
      <HairLetterForm source={`Product — ${p.slug}`} />
      <p><Link className="btn" href="/quiz">Find your routine — take the quiz</Link></p>
      <p style={{ fontSize: 13, color: "#666" }}>Swap Promise status: {SWAP_PROMISE_TERMS.status}.</p>
    </div></section>
  );
}
