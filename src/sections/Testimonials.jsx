import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

import logo from '../assets/logo.webp'

const testimonials = [
  {
    name: 'Riswana Assan',
    role: 'Business Owner, Haaris Cakes',
    content: 'Mohamed built our cake business website professionally and on time. Very satisfied with the result!',
    rating: 5,
    logo: logo,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden px-6">
      <div className="absolute top-1/2 left-0 w-full h-full bg-gold/5 blur-[120px] -z-10 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            What <span className="text-gold italic">Clients</span> Say.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brown-300 max-w-xl mx-auto px-6"
          >
            Real stories from partners who have experienced the "UsWithYou" difference.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-10 relative group hover:border-gold/40 hover:bg-gold/5 transition-all duration-500 shadow-2xl hover:shadow-gold/10 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  ))}
                </div>
                <div className="text-gold/20 group-hover:text-gold/40 transition-colors">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>
              </div>

              <p className="text-brown-200 italic mb-10 leading-relaxed text-lg relative z-10 px-2">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                <div className="relative group/logo">
                  <div className="absolute -inset-1 bg-gold opacity-10 blur rounded-full group-hover/logo:opacity-30 group-hover:opacity-20 transition-all duration-500"></div>
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center p-2 relative border border-gold/40 shadow-xl shadow-gold/5 group-hover:border-gold transition-colors duration-500 overflow-hidden">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.name}
                      className="w-full h-full object-contain rounded-full transition-all duration-700"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg tracking-wide mb-1 transition-colors group-hover:text-gold uppercase">{testimonial.name}</h4>
                  <p className="text-gold text-xs font-bold tracking-[0.15em] uppercase">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
