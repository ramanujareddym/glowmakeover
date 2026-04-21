'use client'

import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-40 w-80 h-80 rounded-full bg-primary/5"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          className="space-y-6 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="inline-block">
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">
              Professional Makeup Artist
            </span>
          </motion.div>

          {/* Main heading with animated gradient text */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Enhancing Your{' '}
              <span className="gradient-text">Natural Beauty</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Creating stunning, personalized looks for brides, special events, and editorial projects. 
            Based in Hyderabad, India, with 5+ years of professional experience.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 py-8 border-y border-gray-700"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
              <p className="text-gray-400 text-sm md:text-base">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">100+</p>
              <p className="text-gray-400 text-sm md:text-base">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">20+</p>
              <p className="text-gray-400 text-sm md:text-base">Weddings</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="#contact"
              className="button-primary px-8 py-4 text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 165, 116, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Session
            </motion.a>
            <motion.a
              href="#services"
              className="button-secondary px-8 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-primary hover:text-opacity-80 transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold uppercase tracking-wider">Scroll to explore</span>
            <HiArrowDown className="text-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
