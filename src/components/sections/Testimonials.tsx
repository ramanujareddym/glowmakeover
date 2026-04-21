'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Punam',
      role: 'Bride',
      image: 'P',
      rating: 5,
      content:
        'Harshitha made me feel like a princess on my wedding day. Her attention to detail and calming presence made the whole experience magical. My makeup lasted all day and looked perfect in every photo!',
    },
    {
      id: 2,
      name: 'Anjali',
      role: 'Bride',
      image: 'A',
      rating: 5,
      content:
        'Professional, talented, and absolutely amazing! The pre-wedding shoot makeup was flawless and camera-ready. Harshitha understood my vision perfectly and executed it beautifully.',
    },
    {
      id: 3,
      name: 'Neha',
      role: 'Event Client',
      image: 'N',
      rating: 5,
      content:
        'The makeup transformation was incredible! I received so many compliments at the event. Harshitha\'s creativity and expertise made me look and feel absolutely stunning.',
    },
    {
      id: 4,
      name: 'Priya',
      role: 'Bride',
      image: 'Pr',
      rating: 5,
      content:
        'Working with Harshitha was the best decision for my wedding makeup. She was professional, punctual, and her makeup application was impeccable. Highly recommended!',
    },
  ]

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
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
            Client Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Read what my wonderful clients have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="card-shadow bg-gray-50 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-primary text-3xl md:text-4xl mb-6 opacity-50" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-amber-700 flex items-center justify-center text-white font-bold text-xl">
                  {currentTestimonial.image}
                </div>
                <div>
                  <p className="font-bold text-dark text-lg">{currentTestimonial.name}</p>
                  <p className="text-primary text-sm">{currentTestimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.div
            className="flex items-center justify-between mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={goToPrev}
              className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="text-2xl" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <HiChevronRight className="text-2xl" />
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '100+', label: 'Happy Clients' },
              { number: '20+', label: 'Weddings' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
