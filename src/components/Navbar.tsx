'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['hero', 'about', 'services', 'instagram', 'gallery', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Instagram', href: '#instagram', id: 'instagram' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-luxury-white shadow-luxury' 
          : 'bg-luxury-black/30 glassmorphism-dark'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom py-3 flex items-center justify-between gap-8">
        {/* Logo + Brand Name */}
        <Link href="#hero" className="flex items-center gap-3 flex-shrink-0 min-w-fit">
          <Image
            src="/logo.svg"
            alt="Glow Makeover by Jyo"
            width={50}
            height={50}
            className="h-12 w-12"
            priority
          />
          <div className="hidden sm:block">
            <div className="font-heading font-bold text-lg leading-tight" style={{
              color: isScrolled ? '#0D0D0D' : '#D4AF37'
            }}>
              Glow
            </div>
            <div className="font-heading font-semibold text-xs leading-tight" style={{
              color: isScrolled ? '#0D0D0D' : '#D4AF37'
            }}>
              Makeover by Jyo
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative font-semibold font-display transition-colors duration-300 text-sm tracking-wider ${
                activeSection === link.id 
                  ? 'text-luxury-gold' 
                  : isScrolled 
                    ? 'text-luxury-black hover:text-luxury-gold' 
                    : 'text-luxury-white hover:text-luxury-gold'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-luxury-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:block button-primary text-sm font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden text-3xl transition-colors duration-300 ${
            isScrolled ? 'text-luxury-black' : 'text-luxury-gold'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-luxury-white/95 backdrop-blur-xl border-t border-luxury-gold/20"
      >
        <div className="container-custom py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`py-3 font-semibold font-display transition-colors duration-300 text-sm tracking-wide ${
                activeSection === link.id ? 'text-luxury-gold' : 'text-luxury-black hover:text-luxury-gold'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <motion.a
            href="#contact"
            className="button-primary text-center text-sm"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}
