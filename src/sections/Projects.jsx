import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Maximize2, X } from 'lucide-react'
import haarisCakesImg from '../assets/haaris-cakes.webp'

const PROJECTS_DATA = [
  {
    title: 'Haaris Cakes',
    category: '#1 Paid Client Project',
    description: 'A professional business website for Haaris Cakes in Aranthangi, Tamil Nadu, featuring integrated WhatsApp ordering and product galleries.',
    image: haarisCakesImg,
    tags: ['React', 'Tailwind', 'Vite', 'WhatsApp API'],
    liveUrl: 'https://haariscakes.in',
    githubUrl: '#',
  },
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gold italic">Work</span>.
            </h2>
            <p className="text-brown-300">
              A selection of our most impactful digital solutions, delivered with excellence and trust.
            </p>
          </div>
          <a 
            href="/projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary hidden md:flex items-center gap-2 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex justify-center">
          <div className="max-w-3xl w-full">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative glass p-4 overflow-hidden shadow-2xl hover:shadow-gold/10 transition-shadow duration-500"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  {/* View Image Button - Centered Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="px-6 py-2.5 glass-dark rounded-full text-white font-bold tracking-[0.2em] text-[10px] hover:bg-gold hover:text-brown-950 transition-all duration-300 shadow-2xl border border-white/10 uppercase"
                    >
                      VIEW FULL IMAGE
                    </button>
                  </div>
                </div>

                <div className="px-4 pb-4 relative">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase px-3 py-1 glass-dark">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-gold transition-colors">{project.title}</h3>
                  <p className="text-brown-300 mb-8 leading-relaxed italic text-lg">{project.description}</p>
                  
                  <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-4 py-2 glass-dark text-xs font-bold text-brown-300 uppercase tracking-tighter"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-3 px-8 text-xs font-bold tracking-widest flex items-center gap-2 group/btn whitespace-nowrap shadow-xl"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center md:hidden">
          <a 
            href="/projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary w-full py-4 inline-flex items-center justify-center gap-2"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brown-950/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Project Preview"
                className="w-full h-full object-contain bg-brown-950"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 glass flex items-center justify-center text-gold hover:bg-gold hover:text-brown-950 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
