import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-brown-950 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 dark:bg-gold/5 blur-[120px] rounded-full animate-slow-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 dark:bg-gold/5 blur-[120px] rounded-full animate-slow-glow delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gold/10 text-gray-600 dark:text-gold text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-gray-200 dark:border-gold/20">
              Visionary Creative Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 tracking-tight text-gray-900 dark:text-white"
          >
            Building <span className="text-gold italic block md:inline">Trust</span> <br className="hidden md:block" />
            Through Excellence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-600 dark:text-brown-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Expertly crafted digital solutions for visionary brands. We don't just build, we <span className="text-gray-900 dark:text-white font-medium italic underline decoration-gold/30 underline-offset-4">collaborate</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#contact" className="btn-primary px-10 py-5 text-sm w-full sm:w-auto shadow-2xl shadow-gold/20">
              Start Your Project
            </a>
            <a href="#projects" className="group flex items-center gap-3 text-gray-900 dark:text-white font-bold tracking-widest text-xs uppercase transition-all">
              <span className="relative">
                View Showcase
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold" />
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">20+</span>
              <span className="text-[10px] text-gray-500 dark:text-brown-300 font-bold tracking-[0.2em] uppercase opacity-60">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">99%</span>
              <span className="text-[10px] text-gray-500 dark:text-brown-300 font-bold tracking-[0.2em] uppercase opacity-60">Client Satisfaction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">24/7</span>
              <span className="text-[10px] text-gray-500 dark:text-brown-300 font-bold tracking-[0.2em] uppercase opacity-60">Premium Support</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">Global</span>
              <span className="text-[10px] text-gray-500 dark:text-brown-300 font-bold tracking-[0.2em] uppercase opacity-60">Service Reach</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
