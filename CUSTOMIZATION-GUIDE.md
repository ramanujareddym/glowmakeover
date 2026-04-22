# Customization Guide - Content & Images

This guide walks you through customizing every section of your website with your actual content and images.

## 📋 Overview

Follow these sections in order to fully customize your website:
1. Update project info
2. Add images
3. Update each section's content
4. Test and deploy

## 🔧 Step 1: Update Project Configuration

### File: `src/config/constants.ts`

Update the SITE_CONFIG object:

```typescript
export const SITE_CONFIG = {
  name: 'Glow Makeover by Jyo',  // Your business name
  description: 'Professional makeup artist...',  // Meta description
  author: 'Harshitha',  // Your name
  siteUrl: 'https://yourdomain.com',  // Your domain
  socialLinks: {
    instagram: 'https://instagram.com/your-handle',
    whatsapp: 'https://wa.me/your-number',
    email: 'your-email@example.com',
  },
  contact: {
    phone: '+91 XXXXX XXXXX',
    email: 'your-email@example.com',
    location: 'Your City, Country',
    hours: 'Mon-Sat: 9am - 7pm',  // Your working hours
  },
}
```

## 🖼️ Step 2: Add Your Images

### Create Image Folders

1. Create `public/images/` directory if it doesn't exist
2. Add these image files:
   - `hero.jpg` - Hero section background (1200x800px recommended)
   - `profile.jpg` - Your profile photo (400x400px)
   - `bridal-1.jpg` to `bridal-9.jpg` - Gallery images (600x600px)
   - `party.jpg`, `pre-wedding.jpg` - Service images

### Recommended Images

```
public/images/
├── hero.jpg                 # Main hero background
├── profile.jpg             # Headshot for About section
├── bridal-makeup.jpg       # Service card image
├── party-makeup.jpg        # Service card image
├── pre-wedding-makeup.jpg  # Service card image
├── gallery/
│   ├── look-1.jpg
│   ├── look-2.jpg
│   └── ... (more gallery images)
└── testimonials/
    ├── client-1.jpg
    ├── client-2.jpg
    └── ...
```

## 📝 Step 3: Update Each Section

### 3.1 Update Hero Section

**File:** `src/components/sections/Hero.tsx`

Find and update:

```typescript
// Line ~20-35: Update hero heading and description
<h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
  Enhancing Your{' '}
  <span className="gradient-text">Natural Beauty</span>  {/* Change if needed */}
</h1>

<motion.p>
  Creating stunning, personalized looks for brides, special events, and editorial projects.  {/* Update this */}
  Based in Hyderabad, India, with 5+ years of professional experience.  {/* Update location & experience */}
</motion.p>

// Line ~40-50: Update statistics
<div className="grid grid-cols-3 gap-8 py-8 border-y border-gray-700">
  <div>
    <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>  {/* Update number */}
    <p className="text-gray-400 text-sm md:text-base">Years Experience</p>
  </div>
  <div>
    <p className="text-3xl md:text-4xl font-bold text-primary">100+</p>  {/* Update number */}
    <p className="text-gray-400 text-sm md:text-base">Happy Clients</p>
  </div>
  <div>
    <p className="text-3xl md:text-4xl font-bold text-primary">20+</p>  {/* Update number */}
    <p className="text-gray-400 text-sm md:text-base">Weddings</p>
  </div>
</div>
```

### 3.2 Update About Section

**File:** `src/components/sections/About.tsx`

Update content:

```typescript
// Line ~50: Update quote
<motion.div
  className="border-l-4 border-primary pl-6 py-4 italic text-gray-700 bg-gray-50 rounded"
>
  "My goal is to make you feel confident and beautiful in your own skin."  {/* Your quote */}
</motion.div>

// Line ~30-40: Update main text
<motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark mb-4">
  Hello, I'm Harshitha  {/* Your name */}
</motion.h2>

<motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
  With 5+ years of experience in the beauty industry...  {/* Your bio */}
</motion.p>

// For profile image (if using Next.js Image component):
import Image from 'next/image'

// Replace placeholder div with:
<Image 
  src="/images/profile.jpg" 
  alt="Your Name" 
  width={400} 
  height={400}
  className="rounded-2xl"
/>
```

### 3.3 Update Services Section

**File:** `src/components/sections/Services.tsx`

Update the services array:

```typescript
const services = [
  {
    id: 1,
    title: 'Bridal Makeup',  // Keep or change
    duration: '2-3 hours',   // Your duration
    description: 'Your wedding day deserves...',  // Your description
    features: [
      'Consultation to discuss your vision',  // Your features
      'Trial session included',
      'Premium products used',
      'Long-lasting formula',
    ],
    image: 'bg-gradient-to-br from-pink-300 to-pink-600',  // Color (or use actual image)
    color: 'text-pink-600',
  },
  {
    id: 2,
    title: 'Party & Event',  // Change as needed
    // ... update similarly
  },
  {
    id: 3,
    title: 'Pre Wedding Shoot',  // Change as needed
    // ... update similarly
  },
]
```

### 3.4 Update Instagram Section

**File:** `src/components/sections/Instagram.tsx`

Update posts array:

```typescript
const posts = [
  {
    id: 1,
    caption: 'South Indian bridal glam ✨',  // Your caption
    hashtags: '#bridalmakeup #southindian',  // Your hashtags
  },
  // ... add/update more posts
]
```

And update the Instagram handle:

```typescript
<motion.a
  href="https://instagram.com/glowmakeover_byjyo"  // Change to your handle
  target="_blank"
>
  Follow @glowmakeover_byjyo  {/* Update handle */}
</motion.a>
```

### 3.5 Update Gallery Section

**File:** `src/components/sections/Gallery.tsx`

Update gallery items:

```typescript
const galleryItems = [
  { id: 1, category: 'bridal', title: 'Bridal Look 1', color: 'from-rose-300 to-rose-600' },
  { id: 2, category: 'hairstyles', title: 'Bridal Look 2', color: 'from-pink-300 to-pink-600' },
  // ... add more items
]
```

To use actual images instead of gradients:

```typescript
// Replace the color div with:
<Image 
  src={`/images/gallery-${item.id}.jpg`}
  alt={item.title}
  fill
  className="object-cover"
/>
```

### 3.6 Update Testimonials Section

**File:** `src/components/sections/Testimonials.tsx`

Update testimonials array:

```typescript
const testimonials = [
  {
    id: 1,
    name: 'Punam',  // Client name
    role: 'Bride',  // Their role
    image: 'P',     // First letter of name (for avatar)
    rating: 5,      // 5-star rating
    content: 'Harshitha made me feel like a princess...',  // Their testimonial
  },
  // ... add more testimonials
]
```

### 3.7 Update Contact Section

**File:** `src/components/sections/Contact.tsx`

Update contact information:

```typescript
const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Hyderabad, India',  // Your city
    href: 'https://maps.app.goo.gl/...',  // Your Google Maps link
    color: 'from-red-400 to-red-600',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 99495 88782',  // Your phone
    href: 'tel:+919949588782',  // Update phone number
    color: 'from-blue-400 to-blue-600',
  },
  // ... update other contact info
]
```

Update WhatsApp link:

```typescript
<motion.a
  href="https://wa.me/919949588782?text=Hi!%20..."  // Your WhatsApp number
  target="_blank"
>
  Chat on WhatsApp - Quick Response Guaranteed
</motion.a>
```

## 🎨 Step 4: Update Colors (Optional)

**File:** `tailwind.config.js`

Change the primary color to match your brand:

```javascript
colors: {
  primary: '#d4a574',  // Change gold to your preferred color
  // Examples:
  // '#e06377',  // Rose
  // '#9b59b6',  // Purple
  // '#3498db',  // Blue
  // '#f39c12',  // Orange
}
```

Then update any color references in components if you want consistency.

## 🔗 Step 5: Update Navigation & Links

**File:** `src/components/Navbar.tsx`

Update navigation links if needed:

```typescript
const navLinks = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Contact', href: '#contact', id: 'contact' },
  // Add more links if needed
]
```

Update logo text:

```typescript
<Link href="#hero" className="text-2xl font-bold gradient-text">
  RAHAVI  {/* Change to your business name */}
</Link>
```

## 📧 Step 6: Enable Email Notifications (Optional)

To actually receive emails from the contact form, update `src/app/api/contact/route.ts`:

### Option A: Using SendGrid
```bash
npm install @sendgrid/mail
```

Then update the API route to send emails.

### Option B: Using Mailgun
```bash
npm install mailgun.js
```

### Option C: Using Nodemailer
```bash
npm install nodemailer
```

See DEVELOPMENT.md for implementation examples.

## 📱 Step 7: Update Footer

**File:** `src/components/Footer.tsx`

Update social links and footer links as needed. All links are configurable in the component.

## 🧪 Step 8: Test Everything

After updating content:

```bash
npm run dev
```

Check:
- [ ] All text displays correctly
- [ ] Images show properly
- [ ] Links work (especially social links)
- [ ] Form validation works
- [ ] Mobile responsive design looks good
- [ ] Animations play smoothly
- [ ] Navigation active states work

## 🚀 Step 9: Build & Deploy

### Build locally first:
```bash
npm run build
npm start
```

Visit `http://localhost:3000` to test.

### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel dashboard.

## 📸 Image Optimization Tips

1. **Use appropriate sizes:**
   - Hero: 1200x800px
   - Profile: 400x400px
   - Gallery: 600x600px
   - Services: 640x480px

2. **Compress before uploading:**
   - Use TinyPNG.com or ImageOptim
   - Aim for < 200KB per image
   - Use WebP format if possible

3. **Naming convention:**
   - Use descriptive, lowercase names
   - Use hyphens, not underscores: `bridal-makeup-1.jpg`

## 🎯 SEO Customization

Update meta tags in `src/app/layout.tsx`:

```typescript
<meta name="description" content="Your description here" />
<title>Your Business Name - Professional Makeup Artist</title>
```

## ✅ Customization Checklist

- [ ] Updated project name and domain
- [ ] Added contact information
- [ ] Added profile image
- [ ] Updated hero section text
- [ ] Updated about section bio
- [ ] Updated services (titles, descriptions, features)
- [ ] Updated testimonials
- [ ] Added gallery images
- [ ] Updated Instagram handle and posts
- [ ] Updated contact form placeholder text
- [ ] Tested all links (social media, phone, email)
- [ ] Tested form validation
- [ ] Tested responsive design
- [ ] Updated colors if desired
- [ ] Built for production
- [ ] Deployed to Vercel or hosting

## 🆘 Need Help?

If you need to add features or customizations:
1. Check DEVELOPMENT.md for code patterns
2. Look at existing components for examples
3. Refer to Next.js and Framer Motion documentation
4. Check component comments for guidance

---

Once you've completed these steps, your website will be fully customized and ready to deploy!
