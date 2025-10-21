# Quick Start Guide

## 🚀 Get Your Gellish Website Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd /Users/ante/Desktop/Gellish
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 What's Included

Your website has these sections ready to go:

1. **Hero Section** - Eye-catching banner with animated product displays
2. **New Arrivals** - Latest gel polish products
3. **Featured Collections** - Handpicked products
4. **Category Showcase** - Browse by collection type
5. **Special Bundles** - Money-saving bundle deals
6. **Sale Section** - Discounted items
7. **Testimonials** - Customer reviews
8. **Newsletter Signup** - Email collection

## ✏️ How to Add Your Products

Edit the file: `src/data/products.ts`

### Add a Single Product:
```typescript
{
  id: 17,                          // Unique ID
  name: "Your Polish Name",        // Product name
  price: 24.99,                    // Current price
  originalPrice: 34.99,            // Optional: Show sale discount
  category: "Classic Collection",  // Collection name
  color: "#FF5733",                // Hex color code
  image: "your-image-url",         // Product image URL
  badge: "New",                    // Optional: "New", "Sale", etc.
  featured: true,                  // Optional: Show in featured section
}
```

### Change Color Scheme:
Edit `tailwind.config.js` in the colors section.

## 📁 Key Files to Customize

- `src/data/products.ts` - All products and bundles
- `src/components/Header.tsx` - Navigation menu
- `src/components/Footer.tsx` - Footer links and info
- `src/app/page.tsx` - Main page layout
- `tailwind.config.js` - Colors and styling

## 🎯 Common Customizations

### Change Business Name
Update "GELLISH" in `src/components/Header.tsx`

### Update Contact Info
Edit footer details in `src/components/Footer.tsx`

### Modify Promo Banner
Change top banner text in `src/components/Header.tsx`

### Add More Bundles
Add to the `bundles` array in `src/data/products.ts`

## 📸 Adding Product Images

Replace placeholder image URLs with your own:
1. Upload images to your hosting service (Cloudinary, AWS S3, etc.)
2. Update the `image` property in your product data
3. Add domain to `next.config.js` if using external images

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 💡 Need Help?

- Check the main README.md for detailed documentation
- All components are fully typed with TypeScript
- Responsive design works on mobile, tablet, and desktop

Enjoy your new Gellish website! 💅✨

