import { PRODUCTS, formatPrice } from "@/lib/products";
export default function DashboardProducts() {
  return (<section><div className="container"><h1>Dashboard — Products</h1><p>{PRODUCTS.length} products in the catalog. All prices unset.</p><table><thead><tr><th>Product</th><th>Collection</th><th>Status</th><th>Price</th></tr></thead><tbody>{PRODUCTS.map((p) => (<tr key={p.slug}><td>{p.name}</td><td>{p.collection}</td><td>{p.status}</td><td>{formatPrice(p.priceCents)}</td></tr>))}</tbody></table><p>Set a real price here only after a real supplier quote is in the Comparison Tracker. Do not invent a price.</p></div></section>);
}
