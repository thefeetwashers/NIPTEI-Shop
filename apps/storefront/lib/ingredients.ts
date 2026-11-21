// Ingredient glossary for the Biblical Botanicals line.
// Every "what it does" line is cosmetic language only: how the ingredient
// cares for hair and scalp in appearance — never a drug claim (no "grows
// hair", "regrows", "stops hair loss", "blocks DHT"). Roles are the
// formula's intended purpose, not test results: no formula exists yet,
// no samples tested.

export interface IngredientInfo {
  name: string;
  latin?: string;
  role: string; // what it does for the hair / scalp, in cosmetic language
  inProducts: string[]; // biblical slugs that use it
}

export const INGREDIENT_GLOSSARY: IngredientInfo[] = [
  { name: "Extra Virgin Olive Oil", latin: "Olea Europaea", role: "The anointing base. Softens brittle strands, seals in moisture, and gives slip so curls and coils detangle without snapping.", inProducts: ["biblical-hydrating-shampoo", "biblical-deep-moisture-mask", "biblical-exfoliating-scalp-scrub", "biblical-leave-in-detangling-milk", "biblical-nourishing-hair-oil", "biblical-little-crowns-braid-butter"] },
  { name: "Frankincense", latin: "Boswellia Carterii", role: "The sacred resin. Calms an irritated scalp and helps roots feel stronger — the scent of the anointing oil itself.", inProducts: ["biblical-hydrating-shampoo", "biblical-exfoliating-scalp-scrub", "biblical-nourishing-hair-oil"] },
  { name: "Myrrh", latin: "Commiphora Myrrha", role: "The second anointing resin. Soothes the scalp, helps keep flakes down, and supports the look of thicker, healthier hair.", inProducts: ["biblical-hydrating-shampoo", "biblical-exfoliating-scalp-scrub", "biblical-nourishing-hair-oil"] },
  { name: "Hyssop", latin: "Hyssopus Officinalis", role: "The purifying herb. Lifts buildup and dead skin from the scalp so follicles can breathe and new growth is not smothered.", inProducts: ["biblical-hydrating-shampoo", "biblical-exfoliating-scalp-scrub", "biblical-scalp-serum"] },
  { name: "Aloe Vera", latin: "Aloe Barbadensis", role: "The hydrator. Clears clogged follicles, balances the scalp, and floods curls with moisture without weight.", inProducts: ["biblical-hydrating-shampoo", "biblical-deep-moisture-mask", "biblical-exfoliating-scalp-scrub", "biblical-leave-in-detangling-milk", "biblical-scalp-serum", "biblical-little-crowns-wash"] },
  { name: "Rosemary", latin: "Rosmarinus Officinalis", role: "The circulation herb. Wakes up the scalp with a cool tingle and supports the look of fuller, denser hair.", inProducts: ["biblical-hydrating-shampoo", "biblical-exfoliating-scalp-scrub", "biblical-scalp-serum", "biblical-nourishing-hair-oil"] },
  { name: "Chebe Powder", latin: "Croton Zambesicus", role: "The Chadian length secret. Coats and lubricates coily strands so they stop breaking mid-shaft — length stays on your head instead of in the comb.", inProducts: ["biblical-deep-moisture-mask", "biblical-nourishing-hair-oil"] },
  { name: "Batana Oil", latin: "Elaeis Oleifera", role: "The Honduran repair oil. Deeply nourishes dry, damaged hair and brings back shine and softness to overworked strands.", inProducts: ["biblical-deep-moisture-mask", "biblical-nourishing-hair-oil"] },
  { name: "Black Castor Oil", role: "The thickening sealant. Coats edges and strands to lock moisture in and give the look of thicker, fuller hair and beards.", inProducts: ["biblical-nourishing-hair-oil"] },
  { name: "Flaxseed", latin: "Linum Usitatissimum", role: "The slip maker. Its natural gel smooths the hair cuticle, defines curls, and lets the comb glide through tangles.", inProducts: ["biblical-deep-moisture-mask", "biblical-leave-in-detangling-milk", "biblical-scalp-serum", "biblical-little-crowns-wash"] },
  { name: "Pumpkin Seed", latin: "Cucurbita Pepo", role: "The follicle food. Rich in zinc and fatty acids that nourish the scalp and support the appearance of fuller hair.", inProducts: ["biblical-scalp-serum"] },
  { name: "Saw Palmetto", latin: "Serenoa Repens", role: "The scalp balancer. Traditionally used to support a healthy scalp environment where hair can look its fullest.", inProducts: ["biblical-hydrating-shampoo", "biblical-scalp-serum"] },
  { name: "Fenugreek", latin: "Trigonella Foenum-Graecum", role: "The strength seed. Protein-rich; helps weak strands feel stronger and supports the look of thicker hair.", inProducts: ["biblical-exfoliating-scalp-scrub", "biblical-scalp-serum"] },
  { name: "Caffeine", role: "The wake-up call. Stimulates the scalp's surface circulation so roots feel energised and hair looks fuller.", inProducts: ["biblical-scalp-serum"] },
  { name: "Peppermint", latin: "Mentha Piperita", role: "The cool tingle. Refreshes the scalp and leaves it feeling clean and alive. Adults only — never in the kids line.", inProducts: ["biblical-exfoliating-scalp-scrub", "biblical-nourishing-hair-oil"] },
  { name: "Chamomile", latin: "Anthemis Nobilis", role: "The gentle one. Soothes delicate scalps — the only essential oil trusted in the Little Crowns kids line, at 0.5% or less.", inProducts: ["biblical-little-crowns-wash"] },
  { name: "Shea Butter", latin: "Butyrospermum Parkii", role: "The moisture lock. Seals hydration into thirsty coils for days and keeps ends soft between wash days.", inProducts: ["biblical-deep-moisture-mask", "biblical-little-crowns-braid-butter"] },
  { name: "Marshmallow Root", latin: "Althaea Officinalis", role: "The detangler. Its slippery mucilage melts knots so combing hurts less — made for tender heads.", inProducts: ["biblical-leave-in-detangling-milk", "biblical-little-crowns-wash"] },
];

export function roleFor(ingredientName: string): string | null {
  const hit = INGREDIENT_GLOSSARY.find(
    (g) => ingredientName.toLowerCase().includes(g.name.toLowerCase()) || g.name.toLowerCase().includes(ingredientName.toLowerCase())
  );
  return hit ? hit.role : null;
}
