import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/lib/products";

export default function HairLossPage() {
  const rootRenewal = getProduct("care-root-renewal-elixir");
  const serum = getProduct("hair-growth-serum");
  const routine = [rootRenewal, serum].filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <section><div className="container">
      <h1>Understanding Hair Loss</h1>
      <div className="warning"><strong>Education, not medical advice.</strong> This page explains hair loss in general terms. It does not diagnose you, and NIPTEI products are cosmetics, not medicines. If shedding worries you, see a doctor, dermatologist or trichologist.</div>
      <div className="card"><h2>Common patterns</h2>
        <p><strong>Androgenetic alopecia / DHT:</strong> gradual thinning, often at the crown or hairline, influenced by genetics and hormones.</p>
        <p><strong>Alopecia areata:</strong> patchy hair loss, thought to involve the immune system.</p>
        <p><strong>Telogen effluvium:</strong> shedding after stress, illness, childbirth or a major change — often temporary, but only a clinician can tell you that.</p>
      </div>
      <div className="card"><h2>What cosmetics can and cannot do</h2>
        <p><strong>Can:</strong> cleanse, moisturize, strengthen the feel of hair, reduce breakage, and support a healthy scalp.</p>
        <p><strong>Cannot:</strong> cure baldness, regrow hair, or treat a medical condition. NIPTEI never makes those claims.</p>
        <p>Compliant language we use: “Supports a healthy scalp ecosystem”, “Reduces breakage and shedding”, “Improves the appearance of hair density and thickness”.</p>
      </div>
      <div className="card"><h2>The routine for thinning</h2>
        <p>For thinning, our quiz routes to a lightweight routine first — Root Renewal before heavy products.</p>
      </div>
      <div className="grid">{routine.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      <p>Take the <Link href="/quiz">Hair Quiz</Link> to find yours.</p>
    </div></section>
  );
}
