import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, FileText, Code2, ShieldCheck, Rocket, LifeBuoy } from 'lucide-react'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discussion',
    description: 'We understand your idea, requirements, and goals.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We design the architecture, tech stack, and timeline.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your solution with clean and scalable code.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Testing',
    description: 'We ensure performance, security, and bug-free delivery.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'We deploy and deliver your project smoothly.',
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Support',
    description: 'We provide ongoing support and improvements.',
    icon: LifeBuoy,
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden px-6">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-radial-gold opacity-[0.03]"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            How We <span className="text-gold italic">Work With You</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brown-300 max-w-xl mx-auto px-6"
          >
            A clear, transparent process to turn your ideas into reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass p-8 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-6xl font-display font-bold text-white/5 group-hover:text-gold/10 transition-colors">
                {step.number}
              </div>
              
              <div className="w-14 h-14 glass flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-gold/5">
                <step.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gold transition-colors">
                {step.title}
              </h3>
              
              <p className="text-brown-300 leading-relaxed italic text-sm">
                {step.description}
              </p>

              {/* Connecting element for desktop (simple indicator) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-gold/30 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
