// Data copied verbatim from the Muse artifact "niptei-shop" (v15) live actions.
// These are the artifact's own seed rows — the same values its actions return.
// Nothing here is invented: where the artifact is empty, the deployable is empty;
// where the artifact has seed/example rows, the deployable shows those same rows.

// getlaunchtracker — two groups, every step Not started, no notes.
export const LAUNCH_TRACKER = [
  {
    key: "hero3",
    label: "Hero 3 — Nourishing Hair Growth Oil · Hydrating Shampoo · Restorative Deep Conditioner (first)",
    steps: [
      { label: "Quote requested from Pravada / Envii / Shay", status: "not_started", date: "", notes: "" },
      { label: "Real quote received (MOQ, cost/unit, sample cost, lead time)", status: "not_started", date: "", notes: "" },
      { label: "Sample ordered", status: "not_started", date: "", notes: "" },
      { label: "Sample tested on the owner's own hair", status: "not_started", date: "", notes: "" },
      { label: "Formula safety review by a qualified professional", status: "not_started", date: "", notes: "" },
      { label: "Real price set", status: "not_started", date: "", notes: "" },
      { label: "Product live for sale", status: "not_started", date: "", notes: "" },
    ],
  },
  {
    key: "serum",
    label: "Scalp-Resurfacing & Growth Serum (after the Hero 3)",
    steps: [
      { label: "Quote requested from Pravada / Envii / Shay", status: "not_started", date: "", notes: "" },
      { label: "Real quote received (MOQ, cost/unit, sample cost, lead time)", status: "not_started", date: "", notes: "" },
      { label: "Sample ordered", status: "not_started", date: "", notes: "" },
      { label: "Sample tested on the owner's own hair", status: "not_started", date: "", notes: "" },
      { label: "Formula safety review by a qualified professional", status: "not_started", date: "", notes: "" },
      { label: "Real price set", status: "not_started", date: "", notes: "" },
      { label: "Product live for sale", status: "not_started", date: "", notes: "" },
    ],
  },
] as const;

// getmanufacturercomparison — labelled worked example, is_example true.
export const MANUFACTURER_COMPARISON = {
  is_example: true,
  rows: [
    { lab: "Manufacturer A — Cosmlab", location: "TX", shampoo_cost: "$2.25", shampoo_moq: "1,000", conditioner_cost: "$2.50", conditioner_moq: "1,000", serum_cost: "$3.50", serum_moq: "1,000", sample_kit: "$75", onboarding: "$400", lead_time: "4–6 weeks", shipping_terms: "FOB" },
    { lab: "Manufacturer B — BeautyForm", location: "CA", shampoo_cost: "$1.90", shampoo_moq: "2,500", conditioner_cost: "$2.10", conditioner_moq: "2,500", serum_cost: "$2.95", serum_moq: "2,500", sample_kit: "$150", onboarding: "$0", lead_time: "8–10 weeks", shipping_terms: "ExWorks" },
    { lab: "Manufacturer C — EcoChem", location: "FL", shampoo_cost: "$2.80", shampoo_moq: "500", conditioner_cost: "$3.10", conditioner_moq: "500", serum_cost: "$4.20", serum_moq: "500", sample_kit: "$50", onboarding: "$600 formulation", lead_time: "3 weeks", shipping_terms: "FOB" },
  ],
} as const;

// listrules — rules 1–5 on, 6–10 off.
export const AUTOMATION_RULES = [
  { id: 1, rule_key: "product_promos", label: "Product promotions", description: "When a product is added or its price changes, prepare and publish a promotion to every connected platform.", enabled: true },
  { id: 2, rule_key: "education", label: "Hair-care education & tutorials", description: "Weekly tips and tutorials generated from the NIPTEI ingredient library (castor oil, pumpkin seed, botanicals).", enabled: true },
  { id: 3, rule_key: "launches", label: "New product launches", description: "A new live product automatically gets a launch campaign across all connected platforms.", enabled: true },
  { id: 4, rule_key: "blog", label: "Blog articles & announcements", description: "New articles are summarized per platform and announced automatically.", enabled: true },
  { id: 5, rule_key: "reviews", label: "Customer reviews & testimonials", description: "Only genuine reviews where the customer gave sharing permission are turned into testimonial posts. Reviews are never invented.", enabled: true },
  { id: 6, rule_key: "seasonal", label: "Seasonal campaigns & offers", description: "Holiday and seasonal campaigns. Off until you turn it on.", enabled: false },
  { id: 7, rule_key: "hairletter_welcome", label: "Hair Letter — Welcome email", description: "New Hair Letter subscriber → the Welcome email (owner's voice: what the Letter is, the Hair Quiz, the Scalp Health education page). No discount is promised unless the owner turns one on.", enabled: false },
  { id: 8, rule_key: "hairletter_quiz_issue4", label: "Hair Letter — Quiz completed → Issue 4", description: "Quiz completed → Issue 4 'Your Hair Type, Your Routine' with that subscriber's own quiz result.", enabled: false },
  { id: 9, rule_key: "hairletter_waitlist_drop", label: "Hair Letter — Waitlist collection drops", description: "Waitlist joined (Kids / Pet / Serum / Scrub / Mask) → an email when that collection drops, and only then.", enabled: false },
  { id: 10, rule_key: "refill_reminder_email", label: "Free routine reminder — 3 days before you run out", description: "With the customer's consent only: one free email 3 days before a bottle should run out — 'Time to reorder?' Never auto-charges, never auto-sends a product.", enabled: false },
] as const;

// getshopsettings
export const SHOP_SETTINGS = {
  quiz_offer_code: "",
  quiz_offer_enabled: false,
  quiz_offer_pct: 10,
  recovery_discount_code: "",
  recovery_discount_enabled: false,
  recovery_discount_pct: 10,
  referral_credit_cents: 500,
  referral_enabled: true,
  ship_notify_delivered_enabled: false,
  ship_notify_dispatched_enabled: false,
  shipping_trigger_enabled: false,
  shipping_trigger_text: "Bundle a routine for your partner or family member and get upgraded to Free UPS 3-Day Reliable Shipping.",
  tv_budget_cents: 0,
  tv_daily_cap_cents: 0,
  tv_enabled: false,
  tv_stop_date: "",
  waitlist_offer_code: "",
  waitlist_offer_enabled: false,
  waitlist_offer_expiry: "",
  waitlist_offer_pct: 15,
} as const;

// getseosettings
export const SEO_SETTINGS = {
  bing_sitemap_submitted: false,
  business_profile_done: false,
  google_sitemap_submitted: false,
  ownership_verified: false,
  verification_meta: "",
} as const;

// getnextfirsts
export const NEXT_FIRSTS = {
  statuses: {
    "ask-like-me": "building",
    "hair-map": "building",
    "hair-twin": "building",
    "never-run-out": "building",
    passport: "building",
    standard: "live",
    "swap-promise": "coming_soon",
    "watch-bottle": "building",
  },
  swap_enabled: false,
  swap_fee_cents: 500,
  swap_fee_is_real: false,
  swap_postage_cents: null,
  swap_supplier_shipping_cents: null,
  swap_terms: "",
} as const;

// getpublicoffers
export const PUBLIC_OFFERS = {
  quiz_offer_code: "",
  quiz_offer_enabled: false,
  quiz_offer_pct: 10,
  referral_credit_cents: 500,
  referral_enabled: true,
  waitlist_offer_code: "",
  waitlist_offer_enabled: false,
  waitlist_offer_expiry: "",
  waitlist_offer_pct: 15,
} as const;

// getswaptemplates — the artifact's exact notification copy.
export const SWAP_TEMPLATES = {
  email_body:
    "Hello {{First_Name}},\n\nGreat news! Your custom-matched replacement routine has been filled by our production lab and is officially on its way to your doorstep.\n\nYour Updated Regimen: {{New_Product_Name}} (Optimized for {{New_Hair_Type}}).\n\n🚚 Track Your Swap Delivery In Real-Time — your tracking number appears in My NIPTEI the moment your replacement ships.\n\nReminder: You don't need to return your original bottle! Pass it along to a friend or family member who matches that hair profile so it doesn't go to waste.\n\nStay beautiful,\nNIPTEI Support Team",
  email_preview: "Tracking info inside for your updated hair care system.",
  email_subject: "Your Swap Promise replacement is on its way! 📦",
  sms_text:
    "Hey {{First_Name}}! Your Swap Request has been successfully processed for Order #{{Order_Number}}. Our hair diagnostic engine has updated your profile to {{New_Hair_Type}} and automatically matched you with your new formulation from our supplier network. We'll text you a tracking link the moment it leaves the warehouse! 🔁",
} as const;

// listintegrations — all 16, status not_connected.
export const INTEGRATIONS = [
  { id: 1, platform: "instagram", label: "Instagram", category: "Social publishing", status: "not_connected", account_handle: "", webhook_url: "", note: "Posts, Reels, product promotions and insights. Needs a professional account, authorized once." },
  { id: 2, platform: "threads", label: "Threads", category: "Social publishing", status: "not_connected", account_handle: "", webhook_url: "", note: "Announcements, conversations and campaign threads via the Threads API." },
  { id: 3, platform: "tiktok", label: "TikTok", category: "Social publishing", status: "not_connected", account_handle: "", webhook_url: "", note: "Product videos and tutorials. Publishing needs TikTok's approved permissions." },
  { id: 4, platform: "facebook", label: "Facebook", category: "Social publishing", status: "not_connected", account_handle: "", webhook_url: "", note: "Business Page posts, product announcements and campaigns." },
  { id: 5, platform: "pinterest", label: "Pinterest", category: "Social publishing", status: "not_connected", account_handle: "", webhook_url: "", note: "Hair inspiration, product pins, tutorials and shopping discovery." },
  { id: 6, platform: "youtube", label: "YouTube", category: "Social publishing", status: "not_connected", account_handle: "", webhook_url: "", note: "Shorts, tutorials and product demonstrations. Your channel: Niptei TV." },
  { id: 7, platform: "fediverse", label: "Fediverse / Mastodon", category: "Social publishing", status: "not_connected", account_handle: "", webhook_url: "", note: "Federated publishing to Mastodon and other ActivityPub servers." },
  { id: 8, platform: "bluesky", label: "Bluesky", category: "Social publishing", status: "not_connected", account_handle: "", webhook_url: "", note: "Brand updates and community posts over the AT Protocol." },
  { id: 9, platform: "ifttt", label: "IFTTT", category: "Automation", status: "not_connected", account_handle: "", webhook_url: "", note: "NIPTEI events trigger your IFTTT Applets through a webhook — new product, new order, new post." },
  { id: 10, platform: "stripe", label: "Stripe", category: "Payments", status: "not_connected", account_handle: "", webhook_url: "", note: "Card payments for the storefront checkout. Connect your Stripe account to take live payments." },
  { id: 11, platform: "aliexpress", label: "AliExpress Suppliers", category: "Suppliers", status: "not_connected", account_handle: "", webhook_url: "", note: "Supplier product import, price and stock sync via the AliExpress Open Platform (App Key required)." },
  { id: 12, platform: "qwen", label: "Qwen AI (Alibaba)", category: "AI content", status: "not_connected", account_handle: "", webhook_url: "", note: "Captions, product descriptions and hair-care articles from Alibaba Cloud Model Studio." },
  { id: 13, platform: "supabase", label: "Supabase", category: "Platform", status: "not_connected", account_handle: "", webhook_url: "", note: "Your project: cjatliwegffjsbyanbjk.supabase.co — database and backend services." },
  { id: 14, platform: "github", label: "GitHub", category: "Platform", status: "not_connected", account_handle: "", webhook_url: "", note: "Code home for NIPTEI — sign in with Google (nipteiapp@gmail.com)." },
  { id: 15, platform: "google-merchant", label: "Google Merchant Center", category: "Discovery & SEO", status: "not_connected", account_handle: "", webhook_url: "", note: "Product feeds so NIPTEI products can appear in Google Shopping and search." },
  { id: 16, platform: "seo", label: "Search & Discovery Engine", category: "Discovery & SEO", status: "not_connected", account_handle: "", webhook_url: "", note: "Sitemaps, product structured data and social sharing previews, updated automatically." },
] as const;

// listsuppliers — all 20, status not_contacted. Copied verbatim from the artifact.
const BLIND_CHECKLIST = { custom_packaging_cost: false, custom_packing_slips: false, no_branding: false, no_invoices: false, test_parcel_photo_checked: false, test_parcel_photo_offer: false } as const;
const VETTING = { coa_msds_ingredients: false, duty_tariff: false, importer_of_record: false, lead_time_broward: false, pre_shipment_inspection: false, sample_first: false, trade_assurance: false, verified_supplier: false } as const;

export const SUPPLIERS = [
  { id: 1, supplier_key: "pravada-private-label", name: "Pravada Private Label", group_key: "usa_formula", location: "Fort Myers, Florida, USA", contact_email: "info@pravada.com", email_verified: true, status: "not_contacted", moq: "Starts from just 50 units", certifications: "GMP · ISO 22716", supplies: "Private label / contract formula manufacturing: vegan, organic and natural hair care — shampoo, conditioner, hair oil and masks, from 200+ ready formulas. They make the formula, fill it and label it for you.", price_notes: "No prices given — ask for MOQ, sample cost and lead time.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.263Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 2, supplier_key: "shay-labs", name: "Shay Labs", group_key: "usa_formula", location: "Illinois, USA", contact_email: "hello@shaylabs.com", email_verified: true, status: "not_contacted", moq: "Not given — ask", certifications: "Not given — ask for GMP / ISO certificates", supplies: "Formulation, production, filling and packaging: shampoos, conditioners, oils, serums and scalp care.", price_notes: "No prices given — ask for MOQ, sample cost and lead time.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.315Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 3, supplier_key: "gar-labs", name: "GAR Labs", group_key: "usa_formula", location: "Southern California, USA", contact_email: "", email_verified: false, status: "not_contacted", moq: "Larger runs", certifications: "Not given — ask for GMP / ISO certificates", supplies: "Shampoo, conditioner and styling products; lab services, mixing, filling and packaging.", price_notes: "No prices given — ask for MOQ, sample cost and lead time.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.340Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 4, supplier_key: "private-label-labs", name: "Private Label Labs", group_key: "usa_formula", location: "Michigan, USA", contact_email: "", email_verified: false, status: "not_contacted", moq: "Flexible MOQs", certifications: "FDA-registered facility · cGMP", supplies: "Shampoos, conditioners, hair oils, serums and scalp treatments, private label / contract manufactured.", price_notes: "No prices given — ask for MOQ, sample cost and lead time.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.380Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 5, supplier_key: "envii-labs", name: "Envii Labs", group_key: "usa_formula", location: "USA", contact_email: "inquiries@enviihaircare.com", email_verified: true, status: "not_contacted", moq: "Small-batch (exact MOQ not given — ask)", certifications: "Not given — ask for GMP / ISO certificates", supplies: "Small-batch contract manufacturing with fast turnaround — 80+ customizable formulas. A good fit for a first small run.", price_notes: "No prices given — ask for MOQ, sample cost and lead time.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.417Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 6, supplier_key: "ypackaging", name: "YPackaging", group_key: "usa_packaging", location: "USA", contact_email: "", email_verified: false, status: "not_contacted", moq: "Wholesale (exact MOQ not given — ask)", certifications: "—", supplies: "Custom amber, cobalt and matte black glass serum bottles, droppers and pumps, wholesale. Amber glass gives UV protection for oils — suits the NIPTEI black / gold / emerald look.", price_notes: "No prices given — ask.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.454Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 7, supplier_key: "the-bottle-depot", name: "The Bottle Depot", group_key: "usa_packaging", location: "USA", contact_email: "", email_verified: false, status: "not_contacted", moq: "Case quantities", certifications: "—", supplies: "1 oz / 30 ml amber Boston round bottles, 20-400 neck, dropper-ready, in case quantities.", price_notes: "Ships in 3–5 business days in the continental USA. Prices not given — ask.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.506Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 8, supplier_key: "etsy-wholesale-sellers", name: "Etsy wholesale sellers", group_key: "usa_packaging", location: "Etsy marketplace (multiple sellers)", contact_email: "", email_verified: false, status: "not_contacted", moq: "Small lots (varies by seller)", certifications: "—", supplies: "8 oz amber Boston round bottles with gold caps, and 30–100 ml luxury amber dropper sets. Good for samples — check quality before a big order.", price_notes: "From the listings: 8 oz amber Boston rounds with gold caps at about $0.88 each; 30–100 ml luxury amber dropper sets at $1.16–$6.56.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.563Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 9, supplier_key: "hbno", name: "HBNO", group_key: "usa_ingredients", location: "Chico, California, USA", contact_email: "", email_verified: false, status: "not_contacted", moq: "No minimum order", certifications: "FDA-registered · GC/MS tested every batch · CoA and SDS on every order", supplies: "Bulk oils and botanicals: castor oil, Jamaican Black Castor Oil, argan, jojoba, rosemary and tea tree essential oils — from 100 g samples to full drums.", price_notes: "No prices given — ask. Get origin documents before any Made in USA claim: the bottle, the filling and the ingredients all matter.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.597Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 10, supplier_key: "vedaoils-usa", name: "VedaOils USA", group_key: "usa_ingredients", location: "USA", contact_email: "", email_verified: false, status: "not_contacted", moq: "From 100 g", certifications: "Not given — ask for CoA / SDS and origin documents", supplies: "Castor oil, wholesale.", price_notes: "From the listing: castor oil $7 for 100 g · $25 for 1 kg · $250 for 10 kg · $499 for 20 kg.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.630Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 11, supplier_key: "aromachology-oils", name: "Aromachology Oils", group_key: "usa_ingredients", location: "USA", contact_email: "", email_verified: false, status: "not_contacted", moq: "Not given — ask", certifications: "Not given — ask for CoA / SDS and origin documents", supplies: "Bulk castor oil, argan oil and avocado oil; Jamaican Black Castor Oil listed.", price_notes: "From the listing: bulk castor from $7 · argan from $17 · avocado from $9.50.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.653Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 12, supplier_key: "guangzhou-hodm", name: "Guangzhou Hodm Professionals Cosmetics", group_key: "alibaba_formula", location: "Guangdong, China (Alibaba) · 8 years on Alibaba", contact_email: "", email_verified: false, status: "not_contacted", moq: "Not given in the listing — ask", certifications: "GMPC factory", supplies: "Shampoo & conditioner, hair oil, hair mask and spray; sulfate-free argan and keratin lines; private label.", price_notes: "No unit prices given. Reference / dropship testing only — never Hero 3.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: 8, updated_at: "2026-11-06T17:50:46.696Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 13, supplier_key: "guangzhou-beaver", name: "Guangzhou Beaver Cosmetic", group_key: "alibaba_formula", location: "Guangdong, China (Alibaba) · 18 years · 110+ staff", contact_email: "", email_verified: false, status: "not_contacted", moq: "Not given in the listing — ask", certifications: "Not given — check the Verified Supplier audit report", supplies: "Shampoo, conditioner and hair treatments, private label.", price_notes: "$1.20–$5.07 per unit in the listing · on-time delivery 100% · reorder rate 28% · response ≤2h. Reference / dropship testing only — never Hero 3.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: 18, updated_at: "2026-11-06T17:50:46.726Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 14, supplier_key: "guangzhou-sluj", name: "Guangzhou SLUJ", group_key: "alibaba_formula", location: "Guangdong, China (Alibaba) · 20+ years", contact_email: "", email_verified: false, status: "not_contacted", moq: "Customized packaging MOQ 1,000 pieces", certifications: "GMPC · ISO 22716 · MSDS available", supplies: "Hair care formulas with customized packaging; free sample offered.", price_notes: "No unit prices given. Reference / dropship testing only — never Hero 3.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: 20, updated_at: "2026-11-06T17:50:46.758Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 15, supplier_key: "guangzhou-kooswalla", name: "Guangzhou Kooswalla", group_key: "alibaba_formula", location: "Guangdong, China (Alibaba)", contact_email: "", email_verified: false, status: "not_contacted", moq: "Not given in the listing — ask", certifications: "GMP · ISO 22716 · BSCI", supplies: "Argan shampoo / conditioner sets; OEM / ODM private label.", price_notes: "No unit prices given. Reference / dropship testing only — never Hero 3.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.804Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 16, supplier_key: "twg-guangdong-hanxue", name: "TWG / Guangdong Hanxue", group_key: "alibaba_formula", location: "Guangdong, China (Alibaba)", contact_email: "", email_verified: false, status: "not_contacted", moq: "In-stock MOQ 24 sets — but private-label MOQ 5,000 sets. Stock is cheap; custom is huge.", certifications: "Not given — check the Verified Supplier audit report", supplies: "Biotin Keratin shampoo / conditioner sets.", price_notes: "No unit prices given. Reference / dropship testing only — never Hero 3.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.831Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 17, supplier_key: "hebei-welllive-trade", name: "Hebei Welllive Trade", group_key: "alibaba_packaging", location: "Hebei, China (Alibaba)", contact_email: "", email_verified: false, status: "not_contacted", moq: "MOQ 500 pieces", certifications: "—", supplies: "Matte black glass dropper bottles 15–100 ml, plus frosted amber and matte black cream jars.", price_notes: "$0.26–$0.27 per bottle in the listing — before shipping, duty and tariffs. Get a landed cost to Florida first.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.854Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 18, supplier_key: "akuiman-hebei", name: "Akuiman", group_key: "alibaba_packaging", location: "Hebei, China (Alibaba)", contact_email: "", email_verified: false, status: "not_contacted", moq: "Custom logo MOQ 1,000 pieces", certifications: "—", supplies: "Amber glass dropper bottles 5 ml–100 ml, with screen printing and hot stamping.", price_notes: "No prices given in the listing — before shipping, duty and tariffs. Get a landed cost to Florida first.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.877Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 19, supplier_key: "guangzhou-hongmo-crystal-glass", name: "Guangzhou Hongmo Crystal Glass", group_key: "alibaba_packaging", location: "Guangzhou, China (Alibaba)", contact_email: "", email_verified: false, status: "not_contacted", moq: "Custom logo MOQ 2,000 pieces", certifications: "—", supplies: "15 ml amber dropper bottles with gold, silver or black caps; hot stamping, frost and screen printing.", price_notes: "No prices given in the listing — before shipping, duty and tariffs. Get a landed cost to Florida first.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.901Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
  { id: 20, supplier_key: "shanghai-nova-pack", name: "Shanghai Nova Pack", group_key: "alibaba_packaging", location: "Shanghai, China (Alibaba)", contact_email: "", email_verified: false, status: "not_contacted", moq: "MOQ 5,000 pieces", certifications: "—", supplies: "Luxury frosted amber dropper bottles.", price_notes: "$0.28–$0.38 per bottle in the listing · 11,850 sold in the listing — before shipping, duty and tariffs. Get a landed cost to Florida first.", notes: "", portal_code: "", stripe_account_ref: "", stripe_connect_status: "not_started", autopay_enabled: false, blind_ship_status: "not_asked", verified_badge: false, years_business: null, updated_at: "2026-11-06T17:50:46.926Z", blind_checklist: BLIND_CHECKLIST, vetting: VETTING },
] as const;
