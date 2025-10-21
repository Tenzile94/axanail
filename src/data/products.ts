export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  color: string;
  image: string;
  featured?: boolean;
  badge?: string;
}

export const products: Product[] = [
  // Classic Collection
  {
    id: 1,
    name: "Ruby Romance",
    price: 24.99,
    originalPrice: 34.99,
    category: "Classic Collection",
    color: "#DC143C",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=500&fit=crop",
    badge: "Sale",
    featured: true,
  },
  {
    id: 2,
    name: "Midnight Plum",
    price: 22.99,
    category: "Classic Collection",
    color: "#5D3A6E",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Coral Dream",
    price: 22.99,
    category: "Classic Collection",
    color: "#FF6F61",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
    featured: true,
  },
  {
    id: 4,
    name: "Nude Elegance",
    price: 21.99,
    category: "Classic Collection",
    color: "#F5DEB3",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=500&fit=crop",
  },
  // Shimmer Collection
  {
    id: 5,
    name: "Rose Gold Sparkle",
    price: 26.99,
    category: "Shimmer Collection",
    color: "#B76E79",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=500&h=500&fit=crop",
    badge: "New",
    featured: true,
  },
  {
    id: 6,
    name: "Silver Stardust",
    price: 26.99,
    category: "Shimmer Collection",
    color: "#C0C0C0",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
    badge: "New",
  },
  {
    id: 7,
    name: "Golden Goddess",
    price: 26.99,
    category: "Shimmer Collection",
    color: "#FFD700",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=500&fit=crop",
  },
  {
    id: 8,
    name: "Champagne Fizz",
    price: 26.99,
    category: "Shimmer Collection",
    color: "#F7E7CE",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=500&h=500&fit=crop",
  },
  // Bold & Bright
  {
    id: 9,
    name: "Electric Blue",
    price: 23.99,
    category: "Bold & Bright",
    color: "#0080FF",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
    featured: true,
  },
  {
    id: 10,
    name: "Neon Pink",
    price: 23.99,
    category: "Bold & Bright",
    color: "#FF10F0",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=500&fit=crop",
  },
  {
    id: 11,
    name: "Lime Punch",
    price: 23.99,
    category: "Bold & Bright",
    color: "#CCFF00",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=500&h=500&fit=crop",
  },
  {
    id: 12,
    name: "Tangerine Twist",
    price: 23.99,
    category: "Bold & Bright",
    color: "#FF8C00",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
  },
  // Pastel Dreams
  {
    id: 13,
    name: "Lavender Mist",
    price: 22.99,
    category: "Pastel Dreams",
    color: "#E6E6FA",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=500&fit=crop",
  },
  {
    id: 14,
    name: "Baby Pink",
    price: 22.99,
    category: "Pastel Dreams",
    color: "#FFB6C1",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=500&h=500&fit=crop",
    featured: true,
  },
  {
    id: 15,
    name: "Mint Fresh",
    price: 22.99,
    category: "Pastel Dreams",
    color: "#98FF98",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
  },
  {
    id: 16,
    name: "Peach Bliss",
    price: 22.99,
    category: "Pastel Dreams",
    color: "#FFDAB9",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=500&fit=crop",
  },
];

export const bundles = [
  {
    id: 1,
    name: "Starter Kit",
    description: "Everything you need to get started",
    price: 89.99,
    originalPrice: 119.99,
    items: ["Base Coat", "Top Coat", "3 Colors of Choice", "LED Lamp"],
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Seasonal Collection",
    description: "Trending colors for this season",
    price: 64.99,
    originalPrice: 89.99,
    items: ["6 Seasonal Colors", "Nail Art Tools"],
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Professional Set",
    description: "Complete professional gel polish set",
    price: 149.99,
    originalPrice: 199.99,
    items: ["12 Premium Colors", "LED Lamp", "Base & Top Coat", "Nail Tools"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
  },
];

