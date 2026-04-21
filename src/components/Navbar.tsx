'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className={`text-2xl font-bold ${isScrolled ? 'gradient-text' : 'text-white'}`}>
          RAHAVI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative font-semibold transition-colors ${
                activeSection === link.id ? 'text-primary' : isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:block button-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden text-2xl ${isScrolled ? 'text-dark' : 'text-white'}`}
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
        className="md:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`py-2 font-semibold transition-colors ${
                activeSection === link.id ? 'text-primary' : 'text-dark'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <motion.a
            href="#contact"
            className="button-primary text-center"
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
