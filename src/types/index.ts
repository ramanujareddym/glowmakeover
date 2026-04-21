/**
 * Type definitions for the application
 */

export interface Service {
  id: number
  title: string
  duration: string
  description: string
  features: string[]
  image: string
  color: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  content: string
}

export interface GalleryItem {
  id: number
  category: string
  title: string
  color: string
  image?: string
}

export interface ContactInfo {
  icon: any
  label: string
  value: string
  href: string
  color: string
}

export interface NavLink {
  label: string
  href: string
  id: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  service: string
  date?: string
  message?: string
}

export interface SocialLink {
  icon: any
  label: string
  href: string
  color?: string
}
