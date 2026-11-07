import Link from "next/link";
export default function DashboardPricing() {
  return (<section><div className="container"><h1>Dashboard — Pricing</h1><p>The Transparent Pricing Calculator lives on the storefront at <Link href="/pricing">/pricing</Link>. Formula: Retail = (Supply + Packaging + Shipping + Marketing CPA + $0.30) / ((1 − Target Margin %) − Merchant Processing %). No $0.40 swap buffer anywhere.</p><p>Swap fee fields (owner-entered, real costs only): Supplier Shipping Charge ($) + Carrier Postage ($) = Exchange Shipping Fee. Until real costs are entered, the fee is an example only and the Swap Promise cannot be enabled.</p></div></section>);
}
