'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [isExpanded, setIsExpanded] = useState(false)

  const galleryItems = [
    { id: 1, category: 'bridal', title: 'Bridal Look 1', color: 'from-rose-300 to-rose-600' },
    { id: 2, category: 'hairstyles', title: 'Bridal Look 2', color: 'from-pink-300 to-pink-600' },
    { id: 3, category: 'party-makeup', title: 'Bridal Look 3', color: 'from-purple-300 to-purple-600' },
    { id: 4, category: 'bridal', title: 'Bridal Look 4', color: 'from-red-300 to-red-600' },
    { id: 5, category: 'hairstyles', title: 'Bridal Look 5', color: 'from-orange-300 to-orange-600' },
    { id: 6, category: 'party-makeup', title: 'Bridal Look 6', color: 'from-yellow-300 to-yellow-600' },
    { id: 7, category: 'bridal', title: 'Bridal Look 7', color: 'from-indigo-300 to-indigo-600' },
    { id: 8, category: 'hairstyles', title: 'Bridal Look 8', color: 'from-blue-300 to-blue-600' },
    { id: 9, category: 'party-makeup', title: 'Bridal Look 9', color: 'from-teal-300 to-teal-600' },
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'hairstyles', label: 'Hairstyles' },
    { id: 'party-makeup', label: 'Party Makeup' },
  ]

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  const displayItems = isExpanded ? filteredItems : filteredItems.slice(0, 9)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-lg uppercase tracking-wider mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Bridal Styles & Looks
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our stunning collection of bridal looks, hairstyles, and party makeup transformations.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id)
                setIsExpanded(false)
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-dark border-2 border-primary hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {displayItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image placeholder with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={false}
                >
                  <motion.div
                    className="text-center text-white"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <p className="font-semibold text-lg mb-2">{item.title}</p>
                    <motion.button
                      className="text-sm font-semibold underline"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {!isExpanded && filteredItems.length > 9 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <motion.button
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-3 button-secondary px-8 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More
              <HiChevronDown className="text-xl" />
            </motion.button>
          </motion.div>
        )}

        {isExpanded && filteredItems.length > 9 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center gap-3 button-secondary px-8 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show Less
              <HiChevronUp className="text-xl" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Icon fallback since HiChevronDown and HiChevronUp might not be available
const HiChevronDown = () => <span>↓</span>
const HiChevronUp = () => <span>↑</span>
