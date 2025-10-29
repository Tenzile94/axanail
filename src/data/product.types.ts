export interface Product {
  id: string;
  sku: string;
  title: string;
  slug: string;
  short: string;
  type: "Builder Gel" | "Base Gel" | "Top Coat";
  shade: string;
  colorHex: string;
  volumeMl: number;
  images: {
    thumb: string;
    main: string;
    gallery?: string[];
  };
  specs: {
    viscosity: string;
    selfLeveling: boolean;
    opacity: string;
    flex: string;
    heatLevel: string;
    hardness: number;
    acidFree: boolean;
    hemaFree: boolean | null;
    soakOff: boolean;
  };
  curing: {
    lamp: string;
    ledSeconds: number;
    uvSeconds: number;
    recommendThinCoats: boolean;
  };
  usage: {
    bestFor: string[];
    prepNotes: string[];
    applicationSteps: string[];
    removal: string;
    compatibility: string[];
  };
  badge?: "Best Seller" | "New" | "Pro Favorite" | "Sale";
  claims: string[];
  warnings: string[];
  storage: string;
  shelfLifeMonths: number;
  msdsUrl: string | null;
  faq: Array<{
    q: string;
    a: string;
  }>;
  seo: {
    title: string;
    description: string;
  };
  ctaUrl: string;
  featured?: boolean;
}
