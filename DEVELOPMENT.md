# Development Guide

This document provides detailed guidelines for developing and maintaining the Rahavi Makeover Artistry website.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

### 3. Build for Production
```bash
npm run build
npm start
```

## Project Structure Overview

```
glowmakeover/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── api/
│   │   │   └── contact/        # API routes
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── Navbar.tsx          # Navigation
│   │   ├── Footer.tsx          # Footer
│   │   └── sections/           # Page sections
│   ├── styles/
│   │   └── globals.css         # Tailwind styles
│   ├── utils/
│   │   └── animations.ts       # Animation variants
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   └── config/
│       └── constants.ts        # App constants
├── public/                     # Static files (images, etc.)
├── package.json                # Dependencies
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind config
├── tsconfig.json               # TypeScript config
└── README.md                   # Documentation
```

## Code Standards

### TypeScript
- Use strict mode (already enabled)
- Define types for all props and data
- Avoid `any` type when possible
- Use interfaces for objects, types for unions

Example:
```typescript
interface ServiceCardProps {
  title: string
  duration: string
  features: string[]
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, duration, features }) => {
  // ...
}
```

### Components
- Use functional components with hooks
- Keep components focused and single-responsibility
- Extract reusable logic to custom hooks
- Use TypeScript for prop types

Example:
```typescript
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  title: string
}

export const MyComponent: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.div>
  )
}
```

### Styling with Tailwind
- Use utility classes instead of custom CSS when possible
- Keep classes organized (layout, sizing, colors, effects)
- Use custom classes in `globals.css` for complex patterns

Example:
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all">
    Click me
  </button>
</div>
```

### Animations with Framer Motion
- Import reusable animation variants from `src/utils/animations.ts`
- Use `whileInView` for scroll-triggered animations
- Keep animation durations consistent (use config values)

Example:
```tsx
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/utils/animations'

export const MySection = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <motion.div variants={itemVariants}>Content 1</motion.div>
    <motion.div variants={itemVariants}>Content 2</motion.div>
  </motion.div>
)
```

## Adding New Features

### Adding a New Section

1. Create component file: `src/components/sections/YourSection.tsx`
2. Add to home page: `src/app/page.tsx`
3. Add to navigation: `src/components/Navbar.tsx` (if needed)

### Adding a New Page

1. Create directory: `src/app/your-page/`
2. Create `page.tsx` inside
3. Next.js will handle routing automatically

### Adding Animations

1. Create variants in `src/utils/animations.ts`
2. Import and use in components
3. Test in browser, adjust timing as needed

### Adding New API Route

1. Create file: `src/app/api/your-route/route.ts`
2. Export handler functions: `GET`, `POST`, etc.
3. Return `Response.json()` or `new Response()`

Example:
```typescript
export async function POST(request: Request) {
  const body = await request.json()
  // Process data
  return Response.json({ success: true })
}
```

## Common Tasks

### Update Navbar Links
Edit `src/components/Navbar.tsx`:
```typescript
const navLinks = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'Your New Page', href: '#your-id', id: 'your-id' },
  // ...
]
```

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#d4a574',  // Change this
  dark: '#1a1a1a',
  accent: '#e8d5c4',
}
```

### Update Contact Information
Edit `src/components/sections/Contact.tsx`:
```typescript
const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: 'Your new number',
    href: 'tel:+91...',
    color: 'from-blue-400 to-blue-600',
  },
  // ...
]
```

### Add Testimonials
Edit `src/components/sections/Testimonials.tsx`:
```typescript
const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Bride',
    image: 'CN',
    rating: 5,
    content: 'Their feedback...',
  },
  // ...
]
```

### Update Services
Edit `src/components/sections/Services.tsx`:
```typescript
const services = [
  {
    id: 1,
    title: 'Service Name',
    duration: '2-3 hours',
    description: 'Description...',
    features: ['Feature 1', 'Feature 2'],
    image: 'bg-gradient-to-br from-pink-300 to-pink-600',
    color: 'text-pink-600',
  },
  // ...
]
```

## Testing

### Manual Testing
1. Test all links and navigation
2. Test responsive design (mobile, tablet, desktop)
3. Test form validation
4. Test animations in different browsers

### Browser Testing
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers

### Performance Check
Use Google Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run Performance audit

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Your message"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Select your repository
   - Click Deploy

3. **Environment Variables** (if needed)
   - Add in Vercel dashboard
   - Vercel > Project > Settings > Environment Variables

### Deploy via CLI
```bash
npm install -g vercel
vercel login
vercel
```

## Troubleshooting

### TypeScript Errors
```bash
npm run dev
```
The dev server shows errors but continues running. Fix them and save files.

### Build Fails
1. Check Node version: `node --version` (should be 16+)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check for syntax errors in component files

### Animations Not Working
1. Ensure component has `'use client'` directive (for client-side animations)
2. Check that Framer Motion is imported correctly
3. Verify animation variants are properly defined

### Images Not Showing
1. Images must be in `public/` folder
2. Use correct path: `/images/my-image.jpg`
3. For external images, add domain to `next.config.js`

### Styles Not Applied
1. Check class names in component
2. Verify Tailwind CSS is installed
3. Run `npm run dev` to rebuild styles

## Performance Tips

1. **Image Optimization**
   - Use Next.js `<Image>` component
   - Optimize images before adding (use tools like TinyPNG)
   - Use WebP format when possible

2. **Code Splitting**
   - Next.js handles automatically
   - Use dynamic imports for large components: `const Component = dynamic(() => import('...'))`

3. **Animations**
   - Use GPU-accelerated properties (transform, opacity)
   - Avoid animating layout properties
   - Test on lower-end devices

4. **Caching**
   - Static assets are cached by Vercel
   - Use proper cache headers

## Security Checklist

- [ ] No API keys or secrets in code
- [ ] Form validation on both client and server
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Content Security Policy configured
- [ ] No direct file access to sensitive files

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Run ESLint

# Format code (manual)
npx prettier --write .   # Format all files
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Examples](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hooks API](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support & Questions

For issues or questions:
1. Check README.md first
2. Review existing code patterns
3. Search GitHub issues
4. Create a new issue with details

---

Happy coding! 🚀
