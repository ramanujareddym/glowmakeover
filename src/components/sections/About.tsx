'use client'

import { motion } from 'framer-motion'
import { FaAward, FaHeart, FaStar } from 'react-icons/fa'

export const About = () => {
  const features = [
    {
      icon: FaAward,
      title: 'Expert Training',
      description: 'Professionally trained with years of industry experience and continuous learning',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FaHeart,
      title: 'Personalized Approach',
      description: 'Every look is tailored to your unique features and personal style',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: FaStar,
      title: 'Premium Products',
      description: 'Using only high-end, quality makeup brands for the best results',
      color: 'from-yellow-400 to-yellow-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder with animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              {/* Decorative background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 text-lg">Professional Headshot</p>
                  <p className="text-gray-300 text-sm mt-2">(Replace with your image)</p>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white font-bold text-center text-xl shadow-xl"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div>
                  <p className="text-3xl">5+</p>
                  <p className="text-sm">Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="text-primary font-semibold text-lg uppercase tracking-wider mb-3"
              >
                The Artist Behind The Brush
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark mb-4">
                Hello, I'm Jyothi
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
                With 5+ years of experience in the beauty industry, I specialize in creating
                stunning, personalized looks for brides, special events, and editorial projects. My
                philosophy centers on enhancing your natural beauty while ensuring you feel
                confident and radiant.
              </motion.p>
            </div>

            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed">
              I bring expertise and artistry to every appointment. I use only premium,
              high-quality products and stay current with the latest techniques and trends. Whether
              it's your wedding day, a special celebration, or a professional photoshoot, I'm
              dedicated to making you look and feel absolutely beautiful.
            </motion.p>

            {/* Quote */}
            <motion.div
              variants={itemVariants}
              className="border-l-4 border-primary pl-6 py-4 italic text-gray-700 bg-gray-50 rounded"
            >
              "My goal is to make you feel confident and beautiful in your own skin."
            </motion.div>

            {/* Features */}
            <motion.div className="grid grid-cols-1 gap-4 pt-4" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white flex-shrink-0`}>
                    <feature.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
