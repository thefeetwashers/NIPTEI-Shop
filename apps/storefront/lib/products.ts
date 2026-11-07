// NIPTEI product catalog — source of truth for the storefront.
// Prices are intentionally NOT set here. price_cents is null for every
// product until the owner sets a real price in the dashboard.
// Do not invent prices, reviews, or supplier costs in this file.

export type Collection =
  | "core"
  | "luxury"
  | "hero3"
  | "men"
  | "pet"
  | "kids"
  | "new-mums"
  | "sensitive"
  | "silver"
  | "pro";

export type ProductStatus = "live" | "coming-soon" | "in-development" | "waitlist";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  sizeMl: number | null;
  category: string;
  collection: Collection;
  status: ProductStatus;
  priceCents: number | null;
  originVerified: boolean;
  madeIn: string;
  ingredientOrigin: string;
  description: string;
  forHairTypes?: string[];
  notFor?: string;
}

export const PRODUCTS: Product[] = [
  // --- Core 8 ---
  { slug: "strengthen-restore-shampoo", name: "Strengthen & Restore Shampoo", tagline: "With Jamaican Black Castor Oil", sizeMl: 384, category: "shampoo", collection: "core", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Jamaican Black Castor Oil (ingredient)", description: "Strengthening shampoo with Jamaican Black Castor Oil.", forHairTypes: ["Type 3", "Type 4"], notFor: "Fine, straight hair may find it heavy — use a small amount." },
  { slug: "anti-hair-loss-shampoo", name: "Anti-Hair Loss Shampoo", tagline: "Strengthening & Scalp Care", sizeMl: 250, category: "shampoo", collection: "core", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Botanical blend", description: "Strengthening shampoo for hair that feels thinner or sheds more than usual. Cosmetic care only — not a medical treatment.", forHairTypes: ["Thinning / Alopecia"], notFor: "Not a cure for hair loss. See a doctor or dermatologist if shedding worries you." },
  { slug: "pumpkin-seed-oil", name: "Pumpkin Seed Oil", tagline: "Nourish · Strengthen · Grow", sizeMl: 60, category: "oil", collection: "core", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Pumpkin seed", description: "Lightweight nourishing oil for scalp and hair." },
  { slug: "herbal-hair-oil", name: "Herbal Hair Oil", tagline: "Rosemary, Nettle, Burdock, Hibiscus + 8 more botanicals", sizeMl: 60, category: "oil", collection: "core", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Rosemary, nettle, burdock, marshmallow, dandelion, licorice, elder flower, calamus, oatstraw, red clover, hibiscus, horsetail", description: "Herbal oil with 12 botanicals." },
  { slug: "hair-growth-serum", name: "Hair Growth Serum", tagline: "Nourishing Scalp Formula", sizeMl: 30, category: "serum", collection: "core", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Botanical blend", description: "Precision-dropper serum for the scalp. Start here for a targeted routine." },
  { slug: "scalp-hair-oil-collection", name: "Scalp & Hair Oil Collection", tagline: "Golden Mango · Pomegranate · Avocado · Hibiscus & Berry · Citrus", sizeMl: 60, category: "collection", collection: "core", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Fruit and botanical oils", description: "Five scented scalp and hair oils in one collection." },
  { slug: "castor-oil-haircare-collection", name: "Castor Oil Haircare Collection", tagline: "Mousse · Shampoo · Conditioner · Spray · Detangler · Edge Control · Styling Gel", sizeMl: null, category: "collection", collection: "core", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Castor oil", description: "The full castor-oil styling and care collection." },
  { slug: "niptei-castor-oil", name: "NIPTEI Castor Oil", tagline: "Nourishing Hair Oil with Jamaican Black Castor Oil", sizeMl: 236, category: "oil", collection: "core", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Jamaican Black Castor Oil (ingredient)", description: "Nourishing hair oil with Jamaican Black Castor Oil." },

  // --- Luxury 11 ---
  { slug: "chebe-hair-growth-kit", name: "Chebe Hair Growth Kit", tagline: "Stronger · Longer · Healthier Hair", sizeMl: null, category: "kit", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Chebe", description: "Chebe growth kit for longer, stronger-feeling hair." },
  { slug: "rosemary-hair-oil", name: "Rosemary Hair Oil", tagline: "Made in USA", sizeMl: 60, category: "oil", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Rosemary", description: "Rosemary hair oil, 60 ml." },
  { slug: "tea-tree-hair-oil", name: "Tea Tree Hair Oil", tagline: "Made in USA", sizeMl: 60, category: "oil", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Tea tree", description: "Tea tree hair oil, 60 ml. Do not use on pets." },
  { slug: "biotin-hair-oil", name: "Biotin Hair Oil", tagline: "Made in USA", sizeMl: 60, category: "oil", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Biotin", description: "Biotin hair oil, 60 ml." },
  { slug: "argan-oil-shampoo", name: "Argan Oil Shampoo", tagline: "Made in USA", sizeMl: 250, category: "shampoo", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Argan oil", description: "Argan oil shampoo, 250 ml." },
  { slug: "argan-oil-conditioner", name: "Argan Oil Conditioner", tagline: "Made in USA", sizeMl: 250, category: "conditioner", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Argan oil", description: "Argan oil conditioner, 250 ml." },
  { slug: "curl-cream", name: "Curl Cream", tagline: "Define · Moisturize · Shine", sizeMl: null, category: "styling", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Botanical blend", description: "Curl-defining cream for curls and coils." },
  { slug: "nourishing-hair-mask", name: "Nourishing Hair Mask", tagline: "Repair · Restore · Strengthen", sizeMl: null, category: "treatment", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Botanical blend", description: "Deep nourishing hair mask." },
  { slug: "black-rice-hair-growth-spray", name: "Black Rice Hair Growth Spray", tagline: "Thicken · Strengthen · Grow", sizeMl: null, category: "spray", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Black rice", description: "Black rice growth spray." },
  { slug: "onion-hair-growth-oil", name: "Onion Hair Growth Oil", tagline: "Stimulate · Repair · Grow", sizeMl: null, category: "oil", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Onion", description: "Onion hair growth oil." },
  { slug: "baobab-oil", name: "Baobab Oil", tagline: "Strengthen · Revitalize", sizeMl: null, category: "oil", collection: "luxury", status: "live", priceCents: null, originVerified: false, madeIn: "United States — verification pending", ingredientOrigin: "Baobab", description: "Baobab oil for strength and shine." },

  // --- Hero 3 — in development, waitlist only ---
  { slug: "nourishing-hair-growth-oil", name: "NIPTEI Nourishing Hair Growth Oil", tagline: "Hero 3 · In Development", sizeMl: null, category: "oil", collection: "hero3", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Hero 3, product 1. Original formula in development with a US cosmetic manufacturer. Waitlist only." },
  { slug: "hydrating-shampoo", name: "NIPTEI Hydrating Shampoo", tagline: "Hero 3 · In Development", sizeMl: null, category: "shampoo", collection: "hero3", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Hero 3, product 2. Original formula in development. Waitlist only." },
  { slug: "restorative-deep-conditioner", name: "NIPTEI Restorative Deep Conditioner", tagline: "Hero 3 · In Development", sizeMl: null, category: "conditioner", collection: "hero3", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Hero 3, product 3. Original formula in development. Waitlist only." },

  // --- Men Care — in development ---
  { slug: "mens-beard-growth-oil", name: "Men's Beard Growth Oil", tagline: "Men Care · In Development", sizeMl: null, category: "oil", collection: "men", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Beard growth oil for men. In development, waitlist only." },
  { slug: "mens-beard-wash-conditioner", name: "Men's Beard Wash & Conditioner", tagline: "Men Care · In Development", sizeMl: null, category: "shampoo", collection: "men", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Beard wash and conditioner. In development, waitlist only." },
  { slug: "mens-scalp-serum", name: "Men's Scalp Stimulating Serum", tagline: "Men Care · In Development", sizeMl: null, category: "serum", collection: "men", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Scalp serum for men. In development, waitlist only." },
  { slug: "mens-anti-thinning-shampoo", name: "Men's Anti-Thinning Shampoo", tagline: "Men Care · In Development", sizeMl: null, category: "shampoo", collection: "men", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Anti-thinning shampoo for men. Cosmetic care only, not a medical treatment." },
  { slug: "mens-hair-beard-balm", name: "Men's Hair & Beard Styling Balm", tagline: "Men Care · In Development", sizeMl: null, category: "styling", collection: "men", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Hair and beard styling balm. In development, waitlist only." },
  { slug: "mens-razor-bump-oil", name: "Men's Razor Bump Soothing Oil", tagline: "Men Care · In Development", sizeMl: null, category: "oil", collection: "men", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Soothing oil for razor bumps and ingrowns. In development, waitlist only." },

  // --- Pet Hair Care — in development. Human products are NOT for pets. ---
  { slug: "pet-dog-shampoo", name: "Gentle Pet Shampoo — Dogs", tagline: "Pet Hair Care · In Development", sizeMl: null, category: "shampoo", collection: "pet", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Gentle shampoo made for dogs, not a human shampoo in a smaller bottle. Vet review required before sale." },
  { slug: "pet-cat-shampoo", name: "Gentle Pet Shampoo — Cats", tagline: "Pet Hair Care · In Development", sizeMl: null, category: "shampoo", collection: "pet", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Separate gentle formula for cats. Some human ingredients, including tea tree oil, are dangerous for cats. Vet review required before sale." },
  { slug: "pet-coat-skin-oil", name: "Pet Coat & Skin Oil", tagline: "Pet Hair Care · In Development", sizeMl: null, category: "oil", collection: "pet", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Coat and skin oil for pets. Vet review required before sale." },
  { slug: "pet-deshedding-conditioner", name: "Pet De-Shedding Conditioner", tagline: "Pet Hair Care · In Development", sizeMl: null, category: "conditioner", collection: "pet", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "De-shedding conditioner for pets. Vet review required before sale." },
  { slug: "pet-paw-nose-balm", name: "Pet Paw & Nose Balm", tagline: "Pet Hair Care · In Development", sizeMl: null, category: "treatment", collection: "pet", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Paw and nose balm for pets. Vet review required before sale." },
  { slug: "pet-detangling-spray", name: "Pet Detangling Spray", tagline: "Pet Hair Care · In Development", sizeMl: null, category: "spray", collection: "pet", status: "in-development", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Detangling spray for pets. Vet review required before sale." },

  // --- Coming Soon collections — concepts only ---
  { slug: "kids-tear-free-shampoo", name: "Kids Gentle Tear-Free Shampoo", tagline: "Kids Care · Coming Soon", sizeMl: null, category: "shampoo", collection: "kids", status: "coming-soon", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Extra-gentle, tear-free shampoo for kids. Professional review for children's use required. Never use an adult-strength formula on a child." },
  { slug: "kids-detangling-spray", name: "Kids Detangling Spray for Curly Kids", tagline: "Kids Care · Coming Soon", sizeMl: null, category: "spray", collection: "kids", status: "coming-soon", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Detangling spray for curly kids. Coming soon, waitlist only." },
  { slug: "postpartum-shedding-oil", name: "Postpartum Shedding Support Oil", tagline: "New Mums · Coming Soon", sizeMl: null, category: "oil", collection: "new-mums", status: "coming-soon", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Support oil for new mums. Education only, no medical claims. Talk to your doctor if shedding worries you." },
  { slug: "sensitive-fragrance-free-shampoo", name: "Ultra-Gentle Fragrance-Free Shampoo", tagline: "Sensitive Scalp · Coming Soon", sizeMl: null, category: "shampoo", collection: "sensitive", status: "coming-soon", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Ultra-gentle, fragrance-free shampoo for very sensitive scalps. Care with dignity, not a cure." },
  { slug: "silver-toning-shampoo", name: "Silver Toning Shampoo", tagline: "Silver & Grey · Coming Soon", sizeMl: null, category: "shampoo", collection: "silver", status: "coming-soon", priceCents: null, originVerified: false, madeIn: "To be confirmed with manufacturer", ingredientOrigin: "To be confirmed", description: "Toning shampoo for grey, silver and white hair. Coming soon, waitlist only." },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCollection(collection: Collection): Product[] {
  return PRODUCTS.filter((p) => p.collection === collection);
}

export function formatPrice(priceCents: number | null): string {
  if (priceCents === null) return "Price coming soon";
  return `$${(priceCents / 100).toFixed(2)}`;
}

export const COLLECTION_LABELS: Record<Collection, string> = {
  core: "Core Collection",
  luxury: "Luxury Collection",
  hero3: "Hero 3 — In Development",
  men: "Men Care",
  pet: "Pet Hair Care",
  kids: "Kids Care",
  "new-mums": "New Mums",
  sensitive: "Sensitive Scalp",
  silver: "Silver & Grey",
  pro: "NIPTEI Pro",
};
