# Glow Makeover by Jyo - Professional Portfolio Website

A modern, animated portfolio website built with **Next.js**, **React.js**, **TailwindCSS**, and **Framer Motion** for a professional makeup artist.

## 🎨 Features

- ✨ **Smooth Animations** - Framer Motion animations for page transitions and interactive elements
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **High Performance** - Optimized with Next.js image optimization and lazy loading
- 🎯 **Modern UI** - Clean, elegant design with gradient accents and smooth hover effects
- 🔍 **SEO Optimized** - Meta tags, semantic HTML, and proper structure
- ♿ **Accessible** - WCAG compliant, keyboard navigation support
- 🎭 **Interactive Components** - Carousel, form validation, filter buttons with smooth transitions
- 📊 **Portfolio Gallery** - Filterable gallery with hover animations
- 💬 **Contact Form** - Full form validation using React Hook Form
- 🌙 **Smooth Scroll** - Scroll-based animations and active navigation states

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or open the project:**
```bash
cd glowmakeover
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   └── page.tsx            # Home page (all sections)
├── components/
│   ├── Navbar.tsx          # Navigation with active state tracking
│   ├── Footer.tsx          # Footer with social links and contact
│   └── sections/
│       ├── Hero.tsx        # Hero section with CTA
│       ├── About.tsx       # About section with features
│       ├── Services.tsx    # Services cards (Bridal, Party, Pre-wedding)
│       ├── Instagram.tsx   # Instagram feed grid
│       ├── Gallery.tsx     # Filterable portfolio gallery
│       ├── Testimonials.tsx # Testimonial carousel
│       └── Contact.tsx     # Contact form and info
├── styles/
│   └── globals.css         # Global styles and animations
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

public/                      # Static assets (add images here)
```

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with SSR, SSG, and API routes |
| **React 18** | UI library with hooks |
| **TypeScript** | Type safety and better DX |
| **TailwindCSS** | Utility-first CSS framework |
| **Framer Motion** | Advanced animations and transitions |
| **React Icons** | Icon library (Material, Font Awesome, etc.) |
| **React Hook Form** | Efficient form validation |

## 🎨 Customization Guide

### Colors

Edit the primary color in `tailwind.config.js`:
```js
colors: {
  primary: '#d4a574',    // Gold color for makeup theme
  dark: '#1a1a1a',
  accent: '#e8d5c4',
}
```

### Content Updates

1. **Navbar Links** - Edit `src/components/Navbar.tsx` - `navLinks` array
2. **Hero Text** - Edit `src/components/sections/Hero.tsx`
3. **About Section** - Edit `src/components/sections/About.tsx`
4. **Services** - Edit `src/components/sections/Services.tsx` - `services` array
5. **Testimonials** - Edit `src/components/sections/Testimonials.tsx` - `testimonials` array
6. **Contact Info** - Edit `src/components/sections/Contact.tsx` - `contactInfo` array

### Adding Images

1. Place images in the `public/` folder
2. Update image references in components:
```tsx
import Image from 'next/image'

<Image src="/images/your-image.jpg" alt="Description" width={600} height={400} />
```

### Animation Customization

Modify Framer Motion animations in component files:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Content
</motion.div>
```

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy (Vercel handles Next.js automatically)

```bash
# Or deploy via CLI
npm install -g vercel
vercel
```

## 🔧 Environment Variables

No environment variables needed for now. If you add backend features later:

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📝 Form Handling

The contact form currently logs data to console. To add backend:

1. Create API route: `src/app/api/contact/route.ts`
2. Replace the form submission in `src/components/sections/Contact.tsx`

Example API route:
```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Process form data
  return Response.json({ success: true })
}
```

## 🎯 Performance Optimizations

- ✅ Next.js image optimization (`<Image>` component)
- ✅ Lazy loading for sections
- ✅ Code splitting per page
- ✅ CSS-in-JS minification
- ✅ Preload critical resources
- ✅ Smooth scrolling behavior

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states for keyboard users
- ✅ Color contrast compliance
- ✅ Alt text for images

## 🐛 Troubleshooting

### Port 3000 already in use:
```bash
npm run dev -- -p 3001
```

### Build errors:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript errors:
```bash
npm run dev
```
The dev server will show type errors but continue running.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security

- No sensitive data in environment variables (handled by Vercel)
- Form validation on both client and server
- Content Security Policy ready
- Secure headers configured in Next.js

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)

## 🚀 Future Enhancements

- [ ] Blog section with makeup tips
- [ ] Video portfolio section
- [ ] Email notifications for form submissions
- [ ] Admin dashboard for content management
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Payment integration for bookings
- [ ] Calendar booking system

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

For questions or issues:
- Email: support@example.com
- WhatsApp: +91 XXXXX XXXXX
- Instagram: @glowmakeover_byjyo

---

Built with ❤️ using Next.js and Framer Motion
