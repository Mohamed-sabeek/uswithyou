import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Layout, Brain, Server, Globe } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Mastery',
    Icon: Layout,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  },
  {
    title: 'Backend Prowess',
    Icon: Database,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    Icon: Server,
    skills: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Nginx'],
  },
  {
    title: 'AI Solutions',
    Icon: Brain,
    skills: ['OpenAI API', 'Vector DBs', 'Python', 'LangChain', 'LLM Integration'],
  },
  {
    title: 'Full Stack Apps',
    Icon: Code,
    skills: ['GraphQL', 'TRPC', 'Prisma', 'Auth.js', 'Socket.io'],
  },
  {
    title: 'Web Expertise',
    Icon: Globe,
    skills: ['SEO Optimization', 'Web Performance', 'Edge Runtime', 'PWA', 'Accessibility'],
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
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our <span className="text-gold italic">Tech Arsenal</span>.</h2>
          <p className="text-brown-300 max-w-xl mx-auto">We leverage cutting-edge technologies to build scalable and high-performance digital solutions.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 glass mb-6 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <category.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-gold transition-colors">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 bg-brown-950/50 border border-white/5 rounded-full text-xs text-brown-300 group-hover:border-gold/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
