"use client";
import { useMemo, useState } from "react";
import { calculateRetailPrice, FIXED_TRANSACTION_FEE } from "@/lib/pricing";

// Updated Dynamic Pricing Calculator — swap buffer removed.
// Retail = (Supply + Packaging + Shipping + Marketing CPA + 0.30)
//          / ((1 - Target Margin %) - Merchant Processing %)
// Example figures below are a labelled demo only, never live prices.
export default function PricingPage() {
  const [supply, setSupply] = useState(12.5);
  const [packaging, setPackaging] = useState(0.8);
  const [shipping, setShipping] = useState(4.2);
  const [cpa, setCpa] = useState(15);
  const [margin, setMargin] = useState(25);
  const [batch, setBatch] = useState(50);
  const [processing, setProcessing] = useState(2.9);
  const result = useMemo(() => calculateRetailPrice({ supplyCost: supply, packagingCost: packaging, shippingCost: shipping, marketingCpa: cpa, targetMarginPct: margin, merchantProcessingPct: processing }), [supply, packaging, shipping, cpa, margin, processing]);
  const wholesaleTotal = (supply + packaging + shipping) * batch;
  return (
    <section><div className="container">
      <h1>Transparent Pricing — Updated Dynamic Pricing Calculator</h1>
      <p><strong>Retail Price = (Supply Cost + Packaging + Shipping + Marketing CPA + $0.30) / ((1 − Target Profit Margin %) − Merchant Processing %)</strong></p>
      <p>By removing the buffer, your retail prices stay slightly lower and more competitive, while your business remains 100% protected from losing money on shipping exchanges.</p>
      <div className="notice">Because the customer pays the exchange shipping fee, I&apos;m removing the $0.40 swap buffer from the pricing calculator. No swap cost is added to your prices. <strong>Policy Notice:</strong> Swap allowance buffers have been removed entirely from the retail calculation logic. The buyer handles exchange fulfillment fees separately.</div>
      <div className="card">
        <p>● Wholesale Material Cost &nbsp; ● Retail Price Target &nbsp; ● Customer Direct Shipping (Swap Buffer Removed)</p>
        <p><strong>Verified Wholesale Origin</strong> → <strong>Product Profile</strong> → <strong>Customer Covers Exchange Shipping</strong> — Direct Pricing Node, No Swap Buffer</p>
        <table><tbody>
          <tr><th>Wholesale Total ({batch} units)</th><td>${wholesaleTotal.toFixed(2)}</td></tr>
          <tr><th>Net Profit Target / unit</th><td>+${result.netProfit.toFixed(2)}</td></tr>
          <tr><th>Retail Price / Unit</th><td>${result.retailPrice.toFixed(2)}</td></tr>
          <tr><th>Merchant fee / unit</th><td>${result.merchantFee.toFixed(2)}</td></tr>
          <tr><th>Break-even price</th><td>${result.breakEven.toFixed(2)}</td></tr>
        </tbody></table>
        {result.belowFloor && <div className="warning">Margin is below the 25% floor — pause this product until costs or price change.</div>}
      </div>
      <div className="card">
        <label>Supply Cost / unit: ${supply.toFixed(2)}<input type="range" min={0} max={50} step={0.1} value={supply} onChange={(e) => setSupply(Number(e.target.value))} /></label>
        <label>Packaging / unit: ${packaging.toFixed(2)}<input type="range" min={0} max={10} step={0.1} value={packaging} onChange={(e) => setPackaging(Number(e.target.value))} /></label>
        <label>Shipping / unit: ${shipping.toFixed(2)}<input type="range" min={0} max={20} step={0.1} value={shipping} onChange={(e) => setShipping(Number(e.target.value))} /></label>
        <label>Marketing CPA / unit: ${cpa.toFixed(2)}<input type="range" min={0} max={30} step={0.5} value={cpa} onChange={(e) => setCpa(Number(e.target.value))} /></label>
        <label>Target Profit Margin: {margin}%<input type="range" min={0} max={70} step={1} value={margin} onChange={(e) => setMargin(Number(e.target.value))} /></label>
        <label>Batch Fulfillment Vol.: {batch} units<input type="range" min={10} max={1000} step={10} value={batch} onChange={(e) => setBatch(Number(e.target.value))} /></label>
        <label>Merchant Processing: {processing}%<input type="range" min={0} max={10} step={0.1} value={processing} onChange={(e) => setProcessing(Number(e.target.value))} /></label>
        <p>Fixed transaction fee: ${FIXED_TRANSACTION_FEE.toFixed(2)} per order. Supplier Operations Score: Not scored yet — no real supplier score.</p>
      </div>
      <div className="card" style={{ borderStyle: "dashed" }}>
        <h2>Example — not a real NIPTEI quote</h2>
        <p>The figures from the mockup — Wholesale Total $2,250.00, Net Profit Target +$2,536.36, Retail Price / Unit $56.36, 100 units, $8.50 shipping, 45% margin, 4.9 / 5.0 score — are examples only, from an apparel mockup. They are not NIPTEI prices, costs, or a supplier score. Real prices appear here only after the owner enters real quotes and sets a real price.</p>
      </div>
      <div className="card">
        <h2>Price Wizard — Strengths &amp; Fixes</h2>
        <p><strong>Strengths:</strong> the pricing formula is public and transparent; the $0.40 swap buffer has been removed entirely from the retail calculation, so no swap cost is added to your prices; the margin floor is 25% — a product below the floor is paused until costs or price change.</p>
        <p><strong>Fixes needed:</strong> no real supplier quote is in the calculator yet — every figure on this page is an example only, never a live price; the Supplier Operations Score is Not scored yet — no real supplier score; real prices appear here only after the owner enters real quotes and sets a real price.</p>
      </div>
    </div></section>
  );
}
