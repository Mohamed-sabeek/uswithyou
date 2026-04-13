import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronRight, Star, Quote, ChevronDown } from 'lucide-react'

export default function ProjectCard({ project, onViewImage, index }) {
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(true)

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center transition-colors duration-300">
      {/* Project Card (Left Side) - Main Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex-1 lg:max-w-[720px] group relative glass p-4 md:p-6 shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-500 overflow-hidden border border-gray-100 dark:border-white/5"
      >
        {/* Project Image Container */}
        <div className="relative aspect-video overflow-hidden rounded-xl mb-8 group-hover:scale-[1.01] transition-transform duration-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
          />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
            <button
              onClick={() => onViewImage(project.image)}
              className="px-6 py-2.5 bg-white dark:bg-brown-950/40 rounded-full text-gray-900 dark:text-white font-bold tracking-[0.2em] text-[10px] hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 shadow-2xl border border-gray-200 dark:border-white/10 uppercase"
            >
              VIEW FULL IMAGE
            </button>
          </div>
        </div>

        <div className="px-2">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-yellow-500 dark:text-gold uppercase px-3 py-1 bg-yellow-400/5 dark:bg-gold/5 border border-yellow-400/20 dark:border-gold/20 rounded-full">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-brown-300 mb-6 leading-relaxed italic text-base md:text-lg max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tIndex) => (
              <span
                key={tIndex}
                className="px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-tight rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 px-10 text-[10px] font-bold tracking-widest flex items-center gap-2 group/btn shadow-xl shadow-yellow-400/10 dark:shadow-gold/10"
            >
              Live Demo
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Testimonial Card (Outside - Right Side on Desktop) */}
      {project.testimonial && (
        <div className="w-full lg:w-[320px] shrink-0 lg:pt-20">
          <AnimatePresence mode="wait">
            {isTestimonialVisible ? (
                <motion.div
                key="testimonial-box"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white dark:bg-white/[0.07] border border-gray-200 dark:border-white/20 backdrop-blur-xl p-6 rounded-3xl group/testimonial hover:border-yellow-400/30 dark:hover:border-gold/30 transition-all shadow-2xl shadow-gray-200/20 dark:shadow-none"
              >
                {/* Subtle Toggle Button */}
                <button
                  onClick={() => setIsTestimonialVisible(false)}
                  className="absolute top-6 right-6 text-gray-400 dark:text-white/30 hover:text-yellow-500 dark:hover:text-gold transition-all hover:scale-110"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>

                <div className="mb-4">
                  <Quote className="w-8 h-8 text-yellow-500/20 dark:text-gold/20 -scale-x-100 mb-1" />
                </div>

                <p className="text-gray-900 dark:text-white/90 italic text-base mb-6 leading-relaxed relative z-10 font-medium">
                  "{project.testimonial.content}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-4">
                  <div className="w-12 h-12 rounded-full border-2 border-yellow-400/20 dark:border-gold/20 p-0.5 overflow-hidden shadow-lg shadow-gray-200/5 dark:shadow-gold/5">
                    <img
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      className="w-full h-full rounded-full object-cover transition-all duration-500"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider truncate">
                      {project.testimonial.author}
                    </h4>
                    <p className="text-yellow-500 dark:text-gold text-[10px] font-bold uppercase tracking-[0.2em] opacity-100 mt-0.5">
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Stars Decor - More Visible */}
                <div className="flex gap-1.5 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] dark:fill-gold dark:text-gold dark:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                    ))}
                </div>

                {/* Ambient Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-yellow-400/10 dark:from-gold/10 to-transparent rounded-[inherit] opacity-0 group-hover/testimonial:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ) : (
              <motion.button
                key="testimonial-toggle"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setIsTestimonialVisible(true)}
                className="flex ml-auto items-center gap-3 px-6 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 backdrop-blur-md rounded-full text-yellow-500 dark:text-gold hover:bg-yellow-400 dark:hover:bg-gold hover:text-gray-900 dark:hover:text-gold-950 transition-all group shadow-xl hover:shadow-yellow-400/20"
              >
                <Quote className="w-4 h-4 opacity-80" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">View Review</span>
                <ChevronDown className="w-4 h-4 rotate-180" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
