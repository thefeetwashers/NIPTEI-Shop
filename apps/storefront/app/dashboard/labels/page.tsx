import Link from "next/link";
import { PRODUCTS, LABEL_CONTACT_LINE } from "@/lib/products";

const LABEL_GROUPS: Array<[string, string[]]> = [
  ["Collection A — Shampoo & Conditioner", ["strengthen-restore-shampoo", "anti-hair-loss-shampoo", "argan-oil-shampoo", "argan-oil-conditioner"]],
  ["Collection B — Hair Growth & Scalp Oils", ["pumpkin-seed-oil", "herbal-hair-oil", "rosemary-hair-oil", "tea-tree-hair-oil", "biotin-hair-oil", "onion-hair-growth-oil", "baobab-oil"]],
  ["Collection C — Serums & Treatments", ["hair-growth-serum", "scalp-resurfacing-growth-serum", "care-root-renewal-elixir", "black-rice-hair-growth-spray"]],
  ["Collection D — Curly & Natural", ["curl-cream", "nourishing-hair-mask", "care-leave-in-conditioner", "care-hair-butter"]],
  ["Kids", ["kids-gentle-tear-free-shampoo", "kids-detangling-spray", "kids-curl-cream", "kids-scalp-oil"]],
  ["Pet", ["pet-shampoo-dogs", "pet-shampoo-cats", "pet-coat-skin-oil", "pet-deshedding-conditioner", "pet-paw-nose-balm", "pet-detangling-spray"]],
  ["Bundles", ["bundle-complete-restoration-kit", "bundle-growth-scalp-kit", "bundle-herbal-natural-kit", "bundle-curl-definition-kit", "bundle-dry-damaged-kit", "bundle-daily-care-kit", "bundle-mens-kit", "bundle-luxury-oil-collection"]],
];

export default function LabelsPage() {
  return (
    <section><div className="container">
      <h1>Labels — Supplier Label Library</h1>
      <p>Label contact line on every label: <strong>{LABEL_CONTACT_LINE}</strong> — shop.niptei.com, never plain niptei.com.</p>
      <div className="warning"><strong>Design proofs — not final print files.</strong> No Made in USA seal until origin documents are on file. Placeholders where the manufacturer has not supplied information yet: “[Full INCI list — supplied by manufacturer]”, “[Key ingredients — to be confirmed by manufacturer]”, “[Manufacturer information — to be supplied]”, batch / expiry / barcode spaces. Known defects to fix before any printing: some back-label text is garbled, one barcode shows illustrative digits, some bottle sizes are generator defaults (confirm real sizes), Chebe products share one back panel with no separate carton per product. Do NOT send these to print as-is.</div>
      {LABEL_GROUPS.map(([group, slugs]) => (
        <div key={group}>
          <h2>{group}</h2>
          <table><thead><tr><th>Product</th><th>Label status</th><th>Supplier send</th></tr></thead><tbody>
            {slugs.map((s) => { const p = PRODUCTS.find((x) => x.slug === s); if (!p) return null; return (
              <tr key={s}><td><Link href={`/products/${s}`}>{p.name}</Link></td><td>Design proof — not final print file · {LABEL_CONTACT_LINE}</td><td><a href={`mailto:nipteiapp@gmail.com?subject=${encodeURIComponent(`Label for ${p.name} — NIPTEI`)}&body=${encodeURIComponent(`Please print the label for ${p.name} with the contact line: ${LABEL_CONTACT_LINE}. Origin: not yet documented — verification pending. Made in USA only with documents on file.`)}`}>Prepare send to supplier (mailto draft — owner reviews &amp; sends)</a></td></tr>
            ); })}
          </tbody></table>
        </div>
      ))}
      <div className="card"><h2>Master Brand Presentation</h2><p>NIPTEI – BEAUTY HAS NO BOUNDARIES. HEALTHY HAIR. CONFIDENT YOU. FOR ALL PEOPLE. FOR ALL HAIR TYPES. {LABEL_CONTACT_LINE}</p></div>
      <p>Label sends are logged as “Prepared — owner to review &amp; send”. Nothing is ever auto-sent.</p>
    </div></section>
  );
}
