'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/rahavimakeoverartistry', color: '#E1306C' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/919949588782', color: '#25D366' },
    { icon: FaEnvelope, label: 'Email', href: 'mailto:rahavimakeover@gmail.com', color: '#D4A574' },
  ]

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text mb-4">RAHAVI</h3>
            <p className="text-gray-400">
              Enhancing your natural beauty with professional makeup artistry.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <a href="tel:+919949588782" className="hover:text-primary transition-colors">
                  +91 99495 88782
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <a href="mailto:rahavimakeover@gmail.com" className="hover:text-primary transition-colors">
                  rahavimakeover@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-8" />

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>&copy; {currentYear} RAHAVI MAKEOVER ARTISTRY. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            {' '} •{' '}
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
