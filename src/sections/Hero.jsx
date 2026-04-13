import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Play } from 'lucide-react'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold opacity-5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bronze opacity-5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="mesh-bg absolute inset-0 opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-gold/20"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-ping"></span>
            <span className="text-xs font-bold tracking-widest text-gold uppercase">Open for Collaboration</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8"
          >
            We build digital <br />
            solutions — <span className="text-gold italic">with you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brown-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A premium freelance team delivering high-performance web, AI, and scalable applications tailored to your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center py-4"
            >
              View Projects
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/process')}
              className="btn-secondary flex items-center gap-2 group w-full sm:w-auto justify-center py-4"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                <Play className="w-4 h-4 text-gold group-hover:text-brown-950 transition-colors" />
              </div>
              Our Process
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Scrolls or Elements */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-brown-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
