'use client'

import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-luxury-black overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Premium background elements with glassmorphism */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gold gradient orbs */}
        <motion.div
          className="absolute -top-64 -right-64 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0) 70%)',
          }}
          animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0) 70%)',
          }}
          animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-black/50 to-luxury-black" />
      </div>

      {/* Main content */}
      <div className="container-custom relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Premium subtitle with luxury styling */}
          <motion.div variants={itemVariants} className="inline-block mx-auto">
            <span className="text-luxury-gold font-display font-semibold text-sm md:text-base uppercase tracking-luxury">
              ✨ Professional Makeup Artist
            </span>
          </motion.div>

          {/* Main heading - Premium serif font */}
          <motion.div variants={itemVariants}>
            <h1 className="text-luxury-lg text-luxury-white mb-6">
              Enhancing Your{' '}
              <span className="gradient-text">Natural Beauty</span>
            </h1>
          </motion.div>

          {/* Premium description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Creating stunning, personalized looks for brides, special events, and editorial projects. 
            Based in Hyderabad, India, with 5+ years of professional expertise and 100+ satisfied clients.
          </motion.p>

          {/* Stats section - Premium layout */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 py-10 md:py-12 border-t border-b border-luxury-gold/20"
          >
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-heading text-luxury-gold font-bold">5+</p>
              <p className="text-gray-400 text-sm md:text-base font-display">Years Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-heading text-luxury-gold font-bold">100+</p>
              <p className="text-gray-400 text-sm md:text-base font-display">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-heading text-luxury-gold font-bold">20+</p>
              <p className="text-gray-400 text-sm md:text-base font-display">Weddings</p>
            </div>
          </motion.div>

          {/* CTA Buttons - Premium styling */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-10"
          >
            <motion.a
              href="#contact"
              className="button-primary w-full sm:w-auto"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Book Your Session</span>
            </motion.a>
            <motion.a
              href="#services"
              className="button-secondary w-full sm:w-auto"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Explore Services</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Premium animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-luxury-gold hover:text-luxury-gold-light transition-colors duration-300 group"
        >
          <span className="text-xs font-display font-semibold uppercase tracking-luxury opacity-75 group-hover:opacity-100">
            Scroll to explore
          </span>
          <HiArrowDown className="text-2xl group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  )
}
