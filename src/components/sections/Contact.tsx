'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  message: string
}

export const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: FormData) => {
    // In a real application, send data to backend
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Hyderabad, India',
      href: 'https://maps.app.goo.gl/s58HBQSXPMDqEL3s5',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 99495 88782',
      href: 'tel:+919949588782',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'rahavimakeover@gmail.com',
      href: 'mailto:rahavimakeover@gmail.com',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: FaClock,
      label: 'Hours',
      value: 'Mon-Sat: 9am - 7pm',
      href: '#',
      color: 'from-purple-400 to-purple-600',
    },
  ]

  const services = [
    'Bridal Makeup',
    'Party & Event',
    'Pre Wedding Shoot',
    'Consultation',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark text-white">
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
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Session
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to look and feel your best? Fill out the form below or contact me directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1">{errors.name.message}</span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                />
                {errors.phone && (
                  <span className="text-red-400 text-sm mt-1">{errors.phone.message}</span>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold mb-2">Service *</label>
                <select
                  {...register('service', { required: 'Please select a service' })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="text-red-400 text-sm mt-1">{errors.service.message}</span>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                <input
                  type="date"
                  {...register('date')}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your vision..."
                  rows={5}
                  {...register('message')}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  className="p-4 bg-green-600/20 border border-green-600 rounded-lg text-green-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full button-primary py-4 text-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact cards */}
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                target={info.href.startsWith('http') && !info.href.startsWith('tel:') && !info.href.startsWith('mailto:') ? '_blank' : undefined}
                rel={info.href.startsWith('http') && !info.href.startsWith('tel:') && !info.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors group cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white flex-shrink-0`}>
                  <info.icon className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-white text-lg font-semibold group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/919949588782?text=Hi!%20I%27m%20interested%20in%20booking%20a%20makeup%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 transition-colors font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp - Quick Response Guaranteed
            </motion.a>

            {/* Map embed placeholder */}
            <div className="rounded-xl overflow-hidden h-64 bg-gray-800 flex items-center justify-center">
              <p className="text-gray-400">
                <a
                  href="https://maps.app.goo.gl/s58HBQSXPMDqEL3s5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Location on Maps
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
