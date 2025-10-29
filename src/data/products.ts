import type { Product } from "./product.types";

export const products: Product[] = [
  {
    id: "milky-white-builder",
    sku: "AXA-BLD-MLKW-50",
    title: "Milky White Builder",
    slug: "/products/milky-white-builder",
    short: "Natural milky builder for French & soft overlays.",
    type: "Builder Gel",
    shade: "Milky White",
    colorHex: "#F2F2F0",
    volumeMl: 50,
    images: {
      thumb: "/products/milkywhite.jpeg",
      main: "/products/milky2.jpeg",
      gallery: []
    },
    specs: {
      viscosity: "Medium–High",
      selfLeveling: true,
      opacity: "Medium",
      flex: "Balanced",
      heatLevel: "Low",
      hardness: 4,
      acidFree: true,
      hemaFree: null,
      soakOff: false
    },
    curing: { lamp: "LED/UV", ledSeconds: 60, uvSeconds: 120, recommendThinCoats: true },
    usage: {
      bestFor: ["French overlays", "Soft extensions", "Baby-boomer"],
      prepNotes: [
        "Dry prep: push cuticles, remove shine (180 grit).",
        "Dust off and dehydrate; use primer if needed."
      ],
      applicationSteps: [
        "Apply thin base layer and cure.",
        "Build apex with 1–2 thin, self-leveling coats.",
        "Refine shape, wipe dust, top coat."
      ],
      removal: "File down bulk, leave thin protective layer; do not soak-off.",
      compatibility: ["All AXA bases & tops", "Forms & tips"]
    },
    badge: "Best Seller",
    claims: ["Low-heat feel", "Smooth self-leveling"],
    warnings: ["For professional use only.", "Avoid skin contact. Cure fully."],
    storage: "Store upright, cool & dark (5–25°C).",
    shelfLifeMonths: 24,
    msdsUrl: null,
    faq: [
      { q: "Can I use it for structured overlays?", a: "Yes, it self-levels and holds apex well." },
      { q: "Does it yellow?", a: "No—formulated for color stability under normal wear." }
    ],
    seo: {
      title: "Milky White Builder Gel — Self-Leveling Strength | AXA",
      description:
        "Milky white builder gel with low-heat feel and smooth self-leveling for French overlays and extensions. LED 60s / UV 120s."
    },
    ctaUrl: "/contact?product=milky-white-builder",
    featured: true
  },

  {
    id: "nude-cover-base",
    sku: "AXA-BASE-NUDE-50",
    title: "Nude Cover Base",
    slug: "/products/nude-cover-base",
    short: "Universal nude base with coverage and strong adhesion.",
    type: "Base Gel",
    shade: "Nude Cover",
    colorHex: "#D6B8A7",
    volumeMl: 50,
    images: {
      thumb: "/products/nude.jpeg",
      main: "/products/nude2.jpeg"
    },
    specs: {
      viscosity: "Medium",
      selfLeveling: true,
      opacity: "Medium",
      flex: "Flexible",
      heatLevel: "Low",
      hardness: 3,
      acidFree: true,
      hemaFree: null,
      soakOff: true
    },
    curing: { lamp: "LED/UV", ledSeconds: 60, uvSeconds: 120, recommendThinCoats: true },
    usage: {
      bestFor: ["Natural-look manicures", "Base under builder", "Quick salon work"],
      prepNotes: ["Dry prep & dehydrate.", "Use primer on oily nails."],
      applicationSteps: [
        "Apply thin slip layer.",
        "Float a second thin leveling layer; cure.",
        "Seal with top coat or build on top."
      ],
      removal: "Soak-off 10–15 min after breaking the seal.",
      compatibility: ["All AXA builders & tops", "Rubber systems"]
    },
    badge: "New",
    claims: ["Strong adhesion", "Self-leveling"],
    warnings: ["Avoid contact with skin and eyes.", "Keep away from children."],
    storage: "Keep closed; avoid sunlight.",
    shelfLifeMonths: 24,
    msdsUrl: null,
    faq: [
      { q: "Can it be worn alone?", a: "Yes—add a top coat for gloss and durability." }
    ],
    seo: {
      title: "Nude Cover Base Gel — Universal Coverage | AXA",
      description:
        "Self-leveling nude base with excellent adhesion and natural coverage. Perfect under builders or alone. LED 60s."
    },
    ctaUrl: "/contact?product=nude-cover-base"
  },

  {
    id: "pink-builder",
    sku: "AXA-BLD-PINK-50",
    title: "Pink Builder",
    slug: "/products/pink-builder",
    short: "Classic pink builder—durable, flexible, easy to file.",
    type: "Builder Gel",
    shade: "Pink",
    colorHex: "#E5B0BD",
    volumeMl: 50,
    images: {
      thumb: "/products/pink.jpeg",
      main: "/products/pink2.jpeg"
    },
    specs: {
      viscosity: "Medium–High",
      selfLeveling: true,
      opacity: "Medium",
      flex: "Balanced",
      heatLevel: "Low",
      hardness: 4,
      acidFree: true,
      hemaFree: null,
      soakOff: false
    },
    curing: { lamp: "LED/UV", ledSeconds: 60, uvSeconds: 120, recommendThinCoats: true },
    usage: {
      bestFor: ["Extensions", "Natural-look overlays", "Backfills"],
      prepNotes: ["Full dry prep; remove oil.", "Bonding base recommended."],
      applicationSteps: [
        "Apply base; cure.",
        "Build apex with thin layers; cure each.",
        "Refine and top coat."
      ],
      removal: "File-off to a thin layer.",
      compatibility: ["Forms & tips", "All AXA tops"]
    },
    claims: ["File-friendly", "Holds apex"],
    warnings: ["Cure fully to avoid softness.", "Do not apply on damaged skin."],
    storage: "Cool, dark place; avoid heat.",
    shelfLifeMonths: 24,
    msdsUrl: null,
    faq: [
      { q: "Can it be used for extensions?", a: "Yes, it's perfect for building strong, flexible extensions." },
      { q: "How does it file?", a: "It files smoothly and holds its shape well during filing." }
    ],
    seo: {
      title: "Pink Builder Gel — Strong & Flexible | AXA",
      description:
        "Pink builder gel with strong structure and flexible wear. Self-levels and files smoothly. LED 60s / UV 120s."
    },
    ctaUrl: "/contact?product=pink-builder"
  },

  {
    id: "strong-base",
    sku: "AXA-BASE-STRONG-50",
    title: "Strong Base",
    slug: "/products/strong-base",
    short: "Reinforced base for maximum adhesion & chip resistance.",
    type: "Base Gel",
    shade: "Clear",
    colorHex: "#F7F7F7",
    volumeMl: 50,
    images: {
      thumb: "/products/strongbase.jpeg",
      main: "/products/strongbase2.jpeg"
    },
    specs: {
      viscosity: "Medium–High",
      selfLeveling: true,
      opacity: "Clear",
      flex: "Flexible",
      heatLevel: "Low",
      hardness: 3,
      acidFree: true,
      hemaFree: null,
      soakOff: true
    },
    curing: { lamp: "LED/UV", ledSeconds: 60, uvSeconds: 120, recommendThinCoats: true },
    usage: {
      bestFor: ["Problem nails", "Under builders & colors", "Chip resistance"],
      prepNotes: ["Thorough dry prep; remove oils.", "Primer optional."],
      applicationSteps: [
        "Apply thin slip layer; cure.",
        "Optional reinforcement layer; cure.",
        "Continue with builder or color."
      ],
      removal: "Soak-off 10–15 min after breaking top coat seal.",
      compatibility: ["All AXA builders & colors"]
    },
    badge: "Pro Favorite",
    claims: ["Strong adhesion", "Prevents lifting"],
    warnings: ["Professional use only.", "Avoid skin contact."],
    storage: "Keep container closed; avoid sunlight.",
    shelfLifeMonths: 24,
    msdsUrl: null,
    faq: [
      { q: "When should I use this base?", a: "Use it on problem nails or when you need extra adhesion for long-lasting wear." },
      { q: "Can it be used alone?", a: "Yes, but we recommend adding a top coat for protection and shine." }
    ],
    seo: {
      title: "Strong Base Gel — Maximum Adhesion | AXA",
      description:
        "Reinforced base gel that grips natural nails and reduces lifting. Ideal foundation for builders and colors."
    },
    ctaUrl: "/contact?product=strong-base"
  },

  {
    id: "no-wipe-top-coat",
    sku: "AXA-TOP-NOWIPE-50",
    title: "No Wipe Top Coat",
    slug: "/products/no-wipe-top-coat",
    short: "Crystal-clear, no-cleanse top with mirror gloss.",
    type: "Top Coat",
    shade: "Clear Gloss",
    colorHex: "#FFFFFF",
    volumeMl: 50,
    images: {
      thumb: "/products/topcoat.jpeg",
      main: "/products/topcoat2.jpeg"
    },
    specs: {
      viscosity: "Medium",
      selfLeveling: true,
      opacity: "Clear",
      flex: "Flexible",
      heatLevel: "Low",
      hardness: 3,
      acidFree: true,
      hemaFree: null,
      soakOff: true
    },
    curing: { lamp: "LED/UV", ledSeconds: 60, uvSeconds: 120, recommendThinCoats: true },
    usage: {
      bestFor: ["Gloss finish", "Over nail art/encapsulation", "Time-saving"],
      prepNotes: ["Remove dust before top; apply thin even layer."],
      applicationSteps: ["Apply thin coat and cap edges.", "Cure fully; no wipe required."],
      removal: "Soak-off 8–10 min or file off.",
      compatibility: ["All AXA bases, builders, and colors"]
    },
    claims: ["No sticky layer", "Anti-yellowing", "Scratch resistant"],
    warnings: ["Do not over-apply; can wrinkle if too thick."],
    storage: "Store away from lamp light.",
    shelfLifeMonths: 24,
    msdsUrl: null,
    faq: [
      { q: "Do I need to wipe after curing?", a: "No, this is a no-wipe top coat - it cures completely without a sticky layer." },
      { q: "Can it be used over nail art?", a: "Yes, it's perfect for sealing nail art and encapsulations." }
    ],
    seo: {
      title: "No Wipe Top Coat — Mirror Gloss | AXA",
      description:
        "Crystal-clear no-cleanse top with anti-yellowing and scratch resistance. LED 60s / UV 120s."
    },
    ctaUrl: "/contact?product=no-wipe-top-coat"
  },

  {
    id: "transparent-builder",
    sku: "AXA-BLD-CLR-50",
    title: "Transparent Builder Gel",
    slug: "/products/transparent-builder",
    short: "Crystal-clear builder for encapsulation & extensions.",
    type: "Builder Gel",
    shade: "Clear",
    colorHex: "#FFFFFF",
    volumeMl: 50,
    images: {
      thumb: "/products/transparent.jpeg",
      main: "/products/transparent2.jpeg"
    },
    specs: {
      viscosity: "Medium–High",
      selfLeveling: true,
      opacity: "Clear",
      flex: "Balanced",
      heatLevel: "Low",
      hardness: 4,
      acidFree: true,
      hemaFree: null,
      soakOff: false
    },
    curing: { lamp: "LED/UV", ledSeconds: 60, uvSeconds: 120, recommendThinCoats: true },
    usage: {
      bestFor: ["Encapsulation", "Forms & tips", "Strength overlays"],
      prepNotes: ["Standard dry prep; base for adhesion."],
      applicationSteps: [
        "Apply base; cure.",
        "Build structure in 1–2 thin layers; cure each.",
        "Refine and finish with top coat."
      ],
      removal: "File-off to a thin layer.",
      compatibility: ["Glitter & art encapsulation", "All AXA tops"]
    },
    claims: ["Crystal clarity", "Holds structure"],
    warnings: ["Cure each layer fully.", "Avoid contact with skin."],
    storage: "Cool dark storage; close cap immediately after use.",
    shelfLifeMonths: 24,
    msdsUrl: null,
    faq: [
      { q: "Is this good for encapsulation?", a: "Yes, it's perfect for encapsulating glitter, foils, and nail art with crystal clarity." },
      { q: "Can it be used for extensions?", a: "Absolutely, it provides strong structure for durable extensions." }
    ],
    seo: {
      title: "Transparent Builder Gel — Crystal Clear | AXA",
      description:
        "Clear builder gel for durable extensions and encapsulation with excellent clarity. LED 60s / UV 120s."
    },
    ctaUrl: "/contact?product=transparent-builder"
  }
];