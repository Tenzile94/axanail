# Gellish - Premium Gel Polish Website

A modern, animated Next.js website for showcasing gel polish products with beautiful UI/UX.

## Features

- 🎨 Beautiful, modern design with Tailwind CSS
- ✨ Smooth animations using Framer Motion and custom CSS
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Product showcase with various collections
- 🎁 Bundle deals section
- ⭐ Customer testimonials
- 🛒 Product cards with interactive elements

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion & Custom CSS
- **Language:** TypeScript
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with Header & Footer
│   ├── page.tsx        # Main home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with links
│   ├── ProductCard.tsx # Product display card
│   └── BundleCard.tsx  # Bundle deal card
└── data/
    └── products.ts     # Product and bundle data
```

## Customization

### Adding Products

Edit `src/data/products.ts` to add or modify products:

```typescript
{
  id: 1,
  name: "Your Product Name",
  price: 24.99,
  originalPrice: 34.99, // Optional
  category: "Collection Name",
  color: "#HEX_COLOR",
  image: "image-url",
  badge: "New", // Optional: "New", "Sale", etc.
  featured: true, // Optional
}
```

### Changing Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  },
}
```

### Modifying Animations

Animations can be customized in:
- `tailwind.config.js` - Animation definitions
- `src/app/globals.css` - Custom CSS animations

## Features Overview

### Hero Section
- Eye-catching gradient background
- Animated product showcase
- Call-to-action buttons
- Customer statistics

### Product Collections
- Classic Collection
- Shimmer Collection
- Bold & Bright
- Pastel Dreams

### Special Features
- New Arrivals section
- Bundle deals with savings
- Sale/promotional items
- Customer testimonials
- Newsletter signup
- Responsive navigation

## License

This project is created for demonstration purposes.

## Support

For support, email support@gellish.com (example)

# axanail
