'use client'

import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'

export const Instagram = () => {
  const posts = [
    {
      id: 1,
      caption: 'South Indian bridal glam ✨',
      hashtags: '#bridalmakeup #southindian',
    },
    {
      id: 2,
      caption: 'Traditional bridal beauty 💫',
      hashtags: '#indianbride #makeuplook',
    },
    {
      id: 3,
      caption: 'Sangeet night glam 🎉',
      hashtags: '#sangeetmakeup #eventmakeup',
    },
    {
      id: 4,
      caption: 'Reception ready ✨',
      hashtags: '#receptionlook #bridalmakeover',
    },
    {
      id: 5,
      caption: 'Muhurtham bride 💕',
      hashtags: '#muhurtham #telugubride',
    },
    {
      id: 6,
      caption: 'Mehendi ceremony look 🌸',
      hashtags: '#mehendimakeup #indianwedding',
    },
  ]

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
  }

  return (
    <section id="instagram" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-lg uppercase tracking-wider mb-3">
            Follow Along
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Instagram
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Follow me for daily inspiration, behind-the-scenes content, and the latest looks.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/rahavimakeoverartistry"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-pink-300 to-purple-600 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <FaInstagram className="text-4xl mx-auto mb-3" />
                  <p className="font-semibold text-sm max-w-xs">{post.caption}</p>
                  <p className="text-xs mt-2 text-gray-200">{post.hashtags}</p>
                </motion.div>
              </div>

              {/* Icon */}
              <motion.div
                className="absolute top-4 right-4 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ y: -10 }}
                whileHover={{ y: 0 }}
              >
                <FaInstagram />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://instagram.com/rahavimakeoverartistry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 button-primary px-8 py-4 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram />
            Follow @rahavimakeoverartistry
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
