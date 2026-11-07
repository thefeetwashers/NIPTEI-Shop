// Transparent Pricing — the NIPTEI All-Inclusive formula.
// Retail = (Supply + Packaging + Shipping + Marketing CPA + 0.30)
//          / ((1 - Target Margin %) - Merchant Processing %)
// There is NO swap buffer in this formula. The customer pays the exchange
// shipping fee separately, so no swap cost is added to prices.
// All dollar inputs are owner-entered real quotes. Until the owner enters
// real costs and sets a real price, the storefront shows "Price coming soon".

export interface PricingInputs {
  supplyCost: number;
  packagingCost: number;
  shippingCost: number;
  marketingCpa: number;
  targetMarginPct: number; // e.g. 50 for 50%
  merchantProcessingPct: number; // e.g. 2.9 for 2.9%
}

export const FIXED_TRANSACTION_FEE = 0.3;
export const MIN_MARGIN_FLOOR_PCT = 25;

export interface PricingResult {
  flatCosts: number;
  denominator: number;
  retailPrice: number;
  merchantFee: number;
  netProfit: number;
  netMarginPct: number;
  breakEven: number;
  belowFloor: boolean;
}

export function calculateRetailPrice(inputs: PricingInputs): PricingResult {
  const flatCosts =
    inputs.supplyCost + inputs.packagingCost + inputs.shippingCost + inputs.marketingCpa + FIXED_TRANSACTION_FEE;
  const denominator = 1 - inputs.targetMarginPct / 100 - inputs.merchantProcessingPct / 100;
  const retailPrice = denominator > 0 ? flatCosts / denominator : 0;
  const merchantFee = retailPrice * (inputs.merchantProcessingPct / 100) + FIXED_TRANSACTION_FEE;
  const netProfit = retailPrice - inputs.supplyCost - inputs.packagingCost - inputs.shippingCost - inputs.marketingCpa - merchantFee;
  const netMarginPct = retailPrice > 0 ? (netProfit / retailPrice) * 100 : 0;
  return {
    flatCosts,
    denominator,
    retailPrice,
    merchantFee,
    netProfit,
    netMarginPct,
    breakEven: flatCosts,
    belowFloor: inputs.targetMarginPct < MIN_MARGIN_FLOOR_PCT,
  };
}

// Swap Promise — Draft V3 terms (not live until the owner enables it).
// Exchange Shipping Fee = Supplier Shipping Charge + Carrier Postage.
// $5.00 is an EXAMPLE only until real costs are entered.
export interface SwapFeeInputs {
  supplierShippingCharge: number;
  carrierPostage: number;
}

export function calculateSwapFee(inputs: SwapFeeInputs): number {
  return inputs.supplierShippingCharge + inputs.carrierPostage;
}

export const SWAP_PROMISE_TERMS = {
  title: "The Swap Promise: Our Flawless Hair Guarantee",
  copy: "Hair care isn't one-size-fits-all. If your quiz-recommended routine doesn't perfectly suit your unique hair texture, you can swap it once within 30 days for the correct formula. While we cover the full cost of your new, replacement hair care items, the customer is responsible for a flat-rate shipping exchange fee.",
  rules: [
    "One swap only, within 30 days of delivery.",
    "Swap is to the correct formula for your re-taken quiz result — not any product you choose, and not a refund.",
    "The customer pays the exchange shipping fee: Supplier Shipping Charge + Carrier Postage. No profit is added.",
    "You do NOT mail the old bottle back. Keep it, or pass it to a friend or family member who matches that hair profile.",
    "The $5.00 fee shown in examples is an example only until real supplier and postage costs are entered.",
  ],
  status: "Draft — owner to review before this promise goes live",
} as const;

// Hair-type education. Educational only — no medical claims, no cure or
// regrowth promises. Thinning always links to Understanding Hair Loss.
export const HAIR_EDUCATION: Record<string, { title: string; body: string }> = {
  "Type 1": {
    title: "Type 1 — Fine / Straight",
    body: "Type 1 hair is straight from root to tip, with a smooth cuticle that lets natural oils travel easily. It can look flat or greasy quickly, and heavy oils or butters weigh it down. Lightweight, volumizing, clarifying care suits it best — never heavy castor oil or shea butter as a leave-in.",
  },
  "Type 2": {
    title: "Type 2 — Wavy",
    body: "Type 2 hair has a gentle S-shaped wave. It needs light moisture and frizz control without being weighed down. Medium-weight creams and oils suit it; heavy butters can flatten the wave.",
  },
  "Type 3": {
    title: "Type 3 — Curly / Coily",
    body: "Type 3 hair forms defined curls that need moisture to hold their shape. It is more prone to frizz and dryness than straight hair, so curl definition and medium moisture are the focus.",
  },
  "Type 4": {
    title: "Type 4 — Coily / Kinky",
    body: "Type 4 hair has tight coils and Z-shaped patterns. It is highly prone to moisture loss and cuticle friction, which can make the hair feel dry and fragile and can accelerate edge thinning. Rich moisture and gentle handling matter most — never a lightweight shampoo that strips it, and never heavy grease that clogs the scalp.",
  },
  "Thinning / Alopecia": {
    title: "Thinning / Alopecia",
    body: "Thinning hair needs a lightweight routine first, and the Root Renewal approach: scalp care before heavy products. This page is education only, not medical advice. If shedding worries you, see a doctor, dermatologist or trichologist. Read our Understanding Hair Loss page for what cosmetics can and cannot do.",
  },
};
