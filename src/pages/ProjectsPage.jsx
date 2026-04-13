import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, Filter } from 'lucide-react'
import { PROJECTS_DATA } from '../data/projects'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

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

        {/* Single Column Layout (to fit side-by-side cards) */}
        <div className="flex flex-col gap-24 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewImage={setSelectedImage} 
                index={index} 
              />
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
