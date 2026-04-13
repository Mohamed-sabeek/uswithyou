import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ChevronLeft, Filter } from 'lucide-react'
import { PROJECTS_DATA } from '../data/projects'
import { Link } from 'react-router-dom'

const categories = ['All', ...new Set(PROJECTS_DATA.map(p => p.category))]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory)

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-brown-300 hover:text-gold transition-colors mb-8 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our <span className="text-gold italic">Project</span> Gallery.
          </h1>
          <p className="text-brown-300 text-xl max-w-2xl leading-relaxed italic">
            A comprehensive collection of digital experiences, structural tools, and creative solutions built with passion and precision.
          </p>
        </div>

        {/* Filters */}
        {categories.length > 2 && (
          <div className="mb-12 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-3 text-gold mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Filter By:</span>
            </div>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === category 
                  ? 'bg-gold text-brown-950 border-gold shadow-lg shadow-gold/20 scale-105' 
                  : 'bg-transparent text-brown-300 border-white/10 hover:border-gold/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative glass overflow-hidden flex flex-col h-full border border-white/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brown-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="px-6 py-2 glass-dark rounded-full text-white font-bold tracking-[0.2em] text-[10px] hover:bg-gold hover:text-brown-950 transition-all duration-300 uppercase"
                    >
                      View Image
                    </button>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase bg-gold/5 px-3 py-1 rounded-full border border-gold/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-gold transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-brown-300 text-sm leading-relaxed mb-6 flex-grow italic opacity-80">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-brown-400 bg-white/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/link"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brown-950/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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
    </div>
  )
}
