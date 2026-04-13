import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PROJECTS_DATA } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const featuredProjects = PROJECTS_DATA.filter(p => p.featured)

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="projects" className="py-24 relative px-6 bg-white dark:bg-brown-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Our <span className="text-gold italic">Work</span>.
            </h2>
            <p className="text-gray-600 dark:text-brown-300">
              A selection of our most impactful digital solutions, delivered with excellence and trust.
            </p>
          </div>
          <Link 
            to="/projects" 
            className="btn-secondary hidden md:flex items-center gap-2 group border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="max-w-6xl w-full flex flex-col gap-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewImage={setSelectedImage} 
                index={index} 
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link 
            to="/projects" 
            className="btn-secondary w-full py-4 inline-flex items-center justify-center gap-2 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/90 dark:bg-brown-950/90 backdrop-blur-sm cursor-zoom-out"
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
                className="w-full h-full object-contain bg-gray-100 dark:bg-brown-950"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 glass shadow-lg flex items-center justify-center text-gold hover:bg-gold hover:text-brown-950 transition-all duration-300"
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
