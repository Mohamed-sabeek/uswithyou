import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Layout, Brain, Server, Zap, Globe } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Mastery',
    Icon: Layout,
    highlight: true,
    skills: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 
      'React', 'Next.js', 'Vite', 'Tailwind CSS', 
      'Responsive Design', 'REST API Integration', 
      'Form Handling', 'State Management'
    ],
  },
  {
    title: 'Backend Architecture',
    Icon: Server,
    skills: [
      'Node.js', 'Express.js', 'REST API Development', 
      'Authentication (JWT)', 'Middleware', 'MVC Architecture', 
      'File Upload Handling', 'API Error Handling'
    ],
  },
  {
    title: 'Database & Models',
    Icon: Database,
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Database Design', 'CRUD Operations'],
  },
  {
    title: 'Cloud & Deployment',
    Icon: Globe,
    skills: [
      'Vercel', 'Render', 'Netlify', 'AWS (Basics)', 
      'CI/CD Basics', 'Env Variables', 'Domain & Hosting'
    ],
  },
  {
    title: 'AI & Modern Era',
    Icon: Brain,
    skills: ['OpenAI API', 'Prompt Engineering', 'LLM Integration', 'Chatbot Development'],
  },
  {
    title: 'Performance & UX',
    Icon: Zap,
    skills: ['SEO Basics', 'Web Performance', 'Lazy Loading', 'Accessibility', 'PWA Basics'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-white dark:bg-brown-950 transition-colors duration-300">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.05] dark:bg-gold/[0.02] rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gold/10 border border-gray-200 dark:border-gold/20 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-600 dark:text-gold uppercase">Tech Arsenal</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Our <span className="text-gold italic">Digital Architecture</span>.
          </h2>
          <p className="text-gray-600 dark:text-brown-300 max-w-2xl mx-auto text-lg italic leading-relaxed">
            A comprehensive suite of technologies designed to build, scale, and optimize modern web experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative glass p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5 ${
                category.highlight ? 'border-gold/30 bg-gold/[0.03] dark:bg-gold/[0.03]' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 glass shadow-sm flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500 shadow-xl shadow-gold/5 border border-gray-100 dark:border-white/5`}>
                  <category.Icon className="w-7 h-7" />
                </div>
                {category.highlight && (
                  <span className="text-[10px] font-bold tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20 uppercase">
                    Core Power
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white group-hover:text-gold transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="text-[11px] px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium tracking-tight group-hover:border-gold/30 group-hover:text-gold transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Card Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
