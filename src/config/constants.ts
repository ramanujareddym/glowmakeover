/**
 * Application constants and configuration
 */

export const SITE_CONFIG = {
  name: 'Rahavi Makeover Artistry',
  description: 'Professional makeup artist portfolio. Bridal, party, and editorial makeup services.',
  author: 'Harshitha',
  siteUrl: 'https://rahavimakeoverartistry.com',
  socialLinks: {
    instagram: 'https://instagram.com/rahavimakeoverartistry',
    whatsapp: 'https://wa.me/919949588782',
    email: 'rahavimakeover@gmail.com',
  },
  contact: {
    phone: '+91 99495 88782',
    email: 'rahavimakeover@gmail.com',
    location: 'Hyderabad, India',
    hours: 'Mon-Sat: 9am - 7pm',
  },
}

export const COLORS = {
  primary: '#d4a574',
  dark: '#1a1a1a',
  accent: '#e8d5c4',
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
}

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
}

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
}

export const FADE_IN_DELAY = {
  fast: 0.1,
  normal: 0.2,
  slow: 0.3,
}

export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  offcanvas: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
}
