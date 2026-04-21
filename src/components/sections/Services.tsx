'use client'

import { motion } from 'framer-motion'
import { FaClock, FaCheckCircle } from 'react-icons/fa'

export const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Bridal Makeup',
      duration: '2-3 hours',
      description: 'Your wedding day deserves flawless, long-lasting makeup that photographs beautifully and makes you feel like the best version of yourself.',
      features: [
        'Consultation to discuss your vision',
        'Trial session included',
        'Premium products used',
        'Long-lasting formula',
      ],
      image: 'bg-gradient-to-br from-pink-300 to-pink-600',
      color: 'text-pink-600',
    },
    {
      id: 2,
      title: 'Party & Event',
      duration: '1-1.5 hours',
      description: 'Stand out at any special occasion with glamorous makeup tailored to your style and the event atmosphere.',
      features: [
        'Customized look design',
        'Long-lasting formula',
        'False lashes included',
        'Quick touch-up support',
      ],
      image: 'bg-gradient-to-br from-purple-300 to-purple-600',
      color: 'text-purple-600',
    },
    {
      id: 3,
      title: 'Pre Wedding Shoot',
      duration: '1.5-2 hours',
      description: 'Stunning makeup for your pre-wedding photoshoots that captures your love story with timeless elegance and beauty.',
      features: [
        'Creative concept development',
        'HD camera-ready finish',
        'Quick changes for multiple looks',
        'Professional photography tips',
      ],
      image: 'bg-gradient-to-br from-rose-300 to-rose-600',
      color: 'text-rose-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
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
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Professional Makeup Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From bridal elegance to editorial edge, I provide personalized makeup services for every occasion.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group card-shadow bg-white rounded-xl overflow-hidden hover:scale-105 transition-transform"
              whileHover={{ y: -10 }}
            >
              {/* Image placeholder */}
              <div className={`h-48 ${service.image} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={false}
                >
                  <motion.button
                    className="button-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-dark">{service.title}</h3>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <FaClock className="text-primary" />
                  <span className="font-semibold">{service.duration}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className="block w-full text-center button-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          className="text-center text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          All services include a consultation to discuss your vision and preferences.
          <br />
          Travel fees may apply for locations outside the Hyderabad area.
        </motion.p>
      </div>
    </section>
  )
}
