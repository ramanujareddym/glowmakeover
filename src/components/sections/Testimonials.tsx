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
      name: 'Sindhu',
      role: 'Client',
      image: 'Si',
      rating: 5,
      content:
        'Loved the hairstyle with curl extensions. Beautifully done and elegant finishing. It looked graceful and stayed perfectly in place throughout the event. Highly recommend Jyothi\'s service.',
    },
    {
      id: 2,
      name: 'Saritha',
      role: 'Saree Client',
      image: 'Sa',
      rating: 5,
      content:
        'I had a wonderful experience with their saree pre-pleating service. The pleats were perfectly done, neatly aligned, and gave the saree a refined, elegant fall. The finishing was impeccable, and the fabric was handled with great care. The service was prompt, professional, and truly made the draping process effortless. Highly recommended for anyone looking for a hassle-free and polished saree look!',
    },
    {
      id: 3,
      name: 'Soundarya',
      role: 'Event Client',
      image: 'So',
      rating: 5,
      content:
        'I booked Glow Makeover Jyothi for my housewarming function and would recommend her wholeheartedly. She is punctual, well-organized, and truly professional. She understood my desired look perfectly and delivered flawless, elegant, and long-lasting makeup. I\'m extremely happy with her work and would gladly book her again.',
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
