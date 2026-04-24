'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiChevronUp, HiX } from 'react-icons/hi'

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any | null>(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedItem])

  const galleryItems = [
    { id: 1, category: 'bridal', title: 'Traditional Elegance' },
    { id: 2, category: 'hairstyles', title: 'Floral Braid' },
    { id: 3, category: 'party-makeup', title: 'Evening Glam' },
    { id: 4, category: 'bridal', title: 'Royal Bridal' },
    { id: 5, category: 'hairstyles', title: 'Modern Updo' },
    { id: 6, category: 'party-makeup', title: 'Reception Glow' },
    { id: 7, category: 'bridal', title: 'South Indian Bride' },
    { id: 8, category: 'hairstyles', title: 'Classic Bun' },
    { id: 9, category: 'party-makeup', title: 'Sangeet Look' },
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
                onClick={() => setSelectedItem(item)}
              >
                {/* Optimized Gallery Image */}
                <Image
                  src={`/images/gallery/look-${item.id}.jpeg`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

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

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-luxury-black"
            >
              <Image
                src={`/images/gallery/look-${selectedItem.id}.jpeg`}
                alt={selectedItem.title}
                width={1200}
                height={1600}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '85vh', 
                  objectFit: 'contain' 
                }}
                priority
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-luxury-gold text-white rounded-full transition-all duration-300 group"
                aria-label="Close preview"
              >
                <HiX className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
