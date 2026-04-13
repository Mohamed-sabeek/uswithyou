import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, Cpu, Zap, BarChart, Settings, PenTool, ChevronRight } from 'lucide-react'

const SERVICES_DATA = [
  {
    title: 'Web Development',
    description: 'High-performance, modern websites that convert visitors into customers.',
    Icon: Globe,
  },
  {
    title: 'Full Stack Applications',
    description: 'Scalable, complex web applications built with the latest industry standards.',
    Icon: Cpu,
  },
  {
    title: 'AI & Data Solutions',
    description: 'Intelligent automation and data-driven insights tailored to your business.',
    Icon: BarChart,
  },
  {
    title: 'UI/UX Design',
    description: 'Bespoke, user-centric designs that prioritize experience and aesthetics.',
    Icon: PenTool,
  },
  {
    title: 'System Integration',
    description: 'Seamlessly connecting your digital infrastructure for maximum efficiency.',
    Icon: Settings,
  },
  {
    title: 'Performance Optimization',
    description: 'Boosting site speed, SEO, and overall user experience for peak performance.',
    Icon: Zap,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-brown-900/20 transition-colors duration-300 px-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Our <span className="text-yellow-500 dark:text-gold italic">Services</span>.
            </h2>
            <p className="text-gray-600 dark:text-brown-300">
              We offer a comprehensive range of digital solutions to help your business thrive in the modern web landscape.
            </p>
          </div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="hidden md:block w-24 h-24 border border-gray-200 dark:border-gold/20 rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-10 glass hover:border-yellow-400/30 dark:hover:border-gold/30 hover:bg-yellow-400/5 transition-all duration-300 overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-none"
              >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400 opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-300 pointer-events-none"></div>

              <div className="w-14 h-14 glass shadow-sm mb-8 flex items-center justify-center text-yellow-500 dark:text-gold group-hover:bg-yellow-400 dark:group-hover:bg-gold group-hover:text-gray-900 transition-all duration-500 transform group-hover:rotate-6">
                <service.Icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-brown-300 leading-relaxed mb-6 italic">{service.description}</p>
              
              <div className="flex items-center gap-2 text-yellow-500 dark:text-gold font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explore <Zap className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link 
            to="/process" 
            className="btn-secondary inline-flex items-center gap-2 group px-8 py-4 transition-all duration-300"
          >
            Explore Our Process
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
