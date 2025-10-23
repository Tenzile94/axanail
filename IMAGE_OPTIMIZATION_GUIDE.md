# 🚀 Image Optimization Guide for AXA Professional Website

## ✅ What We've Already Done

### 1. **Next.js Image Component** ✨
Your website now uses Next.js's optimized `<Image>` component which provides:
- ✅ Automatic lazy loading (images load only when visible)
- ✅ Automatic image optimization
- ✅ Automatic format selection (WebP/AVIF when supported)
- ✅ Responsive image sizing
- ✅ Blur placeholder support
- ✅ 85% quality compression (good balance between quality and size)

**Files Updated:**
- `/src/app/page.tsx` - All product and category images
- `/src/components/ApplicationGallery.tsx` - Gallery images

### 2. **AVIF Format Images** 📸
- AVIF images are 50% smaller than JPEG with better quality
- Already using AVIF in ApplicationGallery component
- Browser fallback is automatic with Next.js

---

## 🔧 Additional Optimization Tools & Strategies

### 1. **Image Compression Tools** (Best Tools)

#### **A. Squoosh (Google - FREE)**
- Website: https://squoosh.app
- **Best For:** Converting and compressing images to AVIF/WebP
- **How to Use:**
  1. Drag & drop your image
  2. Select AVIF format (right side)
  3. Set quality to 75-85
  4. Download optimized image

#### **B. TinyPNG/TinyJPG (FREE)**
- Website: https://tinypng.com
- **Best For:** Quick JPEG/PNG compression
- **Saves:** 60-80% file size
- **How to Use:**
  1. Upload up to 20 images at once
  2. Download compressed versions

#### **C. ImageOptim (Mac Only - FREE)**
- Website: https://imageoptim.com
- **Best For:** Batch processing local files
- **How to Use:**
  1. Download app
  2. Drag & drop folders
  3. Automatic compression

#### **D. Sharp CLI (Node.js - FREE)**
```bash
npm install -g sharp-cli

# Convert all JPEGs to AVIF
sharp -i input.jpg -o output.avif --avif-quality 80

# Batch convert folder
sharp -i "input/*.jpg" -o "output/" --avif-quality 80
```

---

### 2. **Next.js Configuration Optimization**

Add this to your `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
```

---

### 3. **Convert Existing Images to AVIF**

#### **Quick Conversion Script:**

Create a file `scripts/convert-to-avif.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToAvif(inputDir, outputDir) {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.avif'));
      
      try {
        await sharp(inputPath)
          .avif({ quality: 80 })
          .toFile(outputPath);
        
        console.log(`✅ Converted: ${file}`);
      } catch (error) {
        console.error(`❌ Error converting ${file}:`, error.message);
      }
    }
  }
}

// Usage
convertToAvif('./public/products', './public/products-avif');
```

Run it:
```bash
npm install sharp
node scripts/convert-to-avif.js
```

---

### 4. **Recommended Image Sizes**

| Use Case | Recommended Size | Format | Quality |
|----------|-----------------|--------|---------|
| Product Cards | 800x800px | AVIF/WebP | 80-85% |
| Category Images | 600x750px | AVIF/WebP | 80-85% |
| Gallery Images | 1200x900px | AVIF | 85% |
| Hero Images | 1920x1080px | AVIF/WebP | 85-90% |
| Thumbnails | 400x400px | AVIF/WebP | 75% |

---

### 5. **CDN Setup (Recommended for Production)**

#### **Cloudflare Images (RECOMMENDED)**
- **Cost:** Free tier available, then $5/month
- **Features:** Automatic optimization, resizing, format conversion
- **Setup:**
  1. Sign up at https://cloudflare.com
  2. Enable Cloudflare Images
  3. Upload images to Cloudflare
  4. Update image URLs in your code

#### **Vercel Image Optimization (Built-in)**
- **Cost:** Free on Vercel hosting (1000 images/month)
- **Features:** Automatic optimization, no setup required
- **Already Active:** If you're hosting on Vercel, this is already working!

---

### 6. **Caching Strategy**

#### **Browser Caching** (Add to `next.config.js`):
```javascript
async headers() {
  return [
    {
      source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
}
```

---

### 7. **Lazy Loading Strategy**

The Next.js `Image` component already includes lazy loading, but you can optimize further:

```tsx
// For images above the fold (visible immediately)
<Image
  src="/hero.jpg"
  alt="Hero"
  fill
  priority={true}  // Load immediately
  quality={90}
/>

// For images below the fold (lazy load)
<Image
  src="/product.jpg"
  alt="Product"
  fill
  priority={false}  // Lazy load
  quality={85}
  loading="lazy"
/>
```

---

### 8. **Image Quality Guidelines**

| Quality Setting | Best For | File Size |
|----------------|----------|-----------|
| 95-100% | Hero images, critical visuals | Largest |
| 85-90% | Product images, featured content | Medium |
| 75-85% | Gallery, thumbnails | Smaller |
| 60-75% | Backgrounds, non-critical images | Smallest |

**Current Settings:** We're using 85% quality (optimal balance)

---

### 9. **Performance Monitoring**

#### **Check Your Site Speed:**
1. **PageSpeed Insights:** https://pagespeed.web.dev
2. **GTmetrix:** https://gtmetrix.com
3. **WebPageTest:** https://www.webpagetest.org

#### **Lighthouse (Built into Chrome DevTools):**
```bash
# Open Chrome DevTools
F12 → Lighthouse → Generate Report
```

Look for:
- ✅ First Contentful Paint (FCP) < 1.8s
- ✅ Largest Contentful Paint (LCP) < 2.5s
- ✅ Cumulative Layout Shift (CLS) < 0.1

---

### 10. **Weekly Maintenance Checklist**

- [ ] Compress new images before uploading
- [ ] Convert to AVIF/WebP format
- [ ] Test with PageSpeed Insights
- [ ] Check image cache headers
- [ ] Monitor Vercel bandwidth usage
- [ ] Review largest images and optimize if needed

---

## 📊 Expected Performance Improvements

### Before Optimization (Traditional `<img>` tags + JPEG):
- Average image size: 200-500 KB
- Page load time: 3-5 seconds
- Total page size: 5-10 MB

### After Optimization (Next.js `Image` + AVIF):
- Average image size: 50-150 KB (**70% reduction**)
- Page load time: 1-2 seconds (**50-60% faster**)
- Total page size: 1-3 MB (**70% reduction**)

---

## 🎯 Quick Wins (Do These First!)

1. ✅ **DONE:** Use Next.js Image component
2. ✅ **DONE:** Convert to AVIF format (ApplicationGallery)
3. ⏳ **TODO:** Convert all `/products/*.jpeg` to AVIF
4. ⏳ **TODO:** Add proper caching headers
5. ⏳ **TODO:** Set up Cloudflare or CDN

---

## 🔍 Additional Resources

- **Next.js Image Optimization:** https://nextjs.org/docs/app/building-your-application/optimizing/images
- **AVIF vs WebP:** https://jakearchibald.com/2020/avif-has-landed/
- **Image Compression Guide:** https://web.dev/fast/#optimize-your-images

---

## 💡 Pro Tips

1. **Use SVG for Icons:** Vector graphics scale perfectly and are tiny
2. **Implement Blur Placeholders:** Add low-quality image placeholders
3. **Use `srcset` for Art Direction:** Different images for different screen sizes
4. **Monitor Core Web Vitals:** Keep LCP under 2.5 seconds
5. **Test on Slow Connections:** Use Chrome DevTools Network throttling

---

## 📞 Need Help?

If you need assistance with any of these optimizations, check:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Web.dev Performance: https://web.dev/performance

---

*Last Updated: October 23, 2025*

