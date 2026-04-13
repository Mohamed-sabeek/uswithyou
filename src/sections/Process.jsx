import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, FileText, Code2, ShieldCheck, Rocket, LifeBuoy } from 'lucide-react'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discussion',
    description: 'We dive deep into your vision, goals, and requirements.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We craft architecture, timelines, and scalable strategy.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build fast, clean, and scalable systems.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Testing',
    description: 'We ensure performance, security, and reliability.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'We launch smoothly with zero friction.',
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Support',
    description: 'We provide continuous support and improvements.',
    icon: LifeBuoy,
  },
]

const StepCard = ({ step, index }) => {
  const isEven = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center justify-center w-full mb-16 md:mb-24 last:mb-0 ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Timeline Connector Dot (Desktop) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-brown-950 border-2 border-gold rounded-full z-20 hidden md:block shadow-[0_0_10px_rgba(255,215,0,0.3)]" />

      {/* Content Card */}
      <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <div className="group relative glass p-8 md:p-10 hover:shadow-[0_0_30px_rgba(255,200,0,0.08)] hover:border-gold/30 transition-all duration-500 overflow-hidden shadow-sm">
          {/* Step Number Backdrop */}
          <div className="absolute top-4 right-8 text-8xl md:text-9xl font-display font-bold text-gray-100 dark:text-white/[0.02] group-hover:text-gold/[0.04] transition-all duration-700 select-none">
            {step.number}
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-gold/5">
              <step.icon className="w-6 h-6" />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gold transition-colors">
              {step.title}
            </h3>

            <p className="text-gray-600 dark:text-brown-300 leading-relaxed italic text-base md:text-lg group-hover:text-gray-900 dark:group-hover:text-brown-200 transition-colors">
              {step.description}
            </p>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700" />
        </div>
      </div>

      {/* Spacer for the other side (Desktop) */}
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  )
}

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white dark:bg-brown-950 transition-colors duration-300 px-6">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 text-gray-900 dark:text-white"
          >
            The <span className="text-gold italic">Process</span> Journey.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-brown-300 text-xl max-w-2xl mx-auto leading-relaxed italic font-light"
          >
            A high-performance workflow engineered to transform complex concepts into seamless digital realities.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative py-12">
          {/* Vertical Center Line (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/30 dark:via-gold/20 to-transparent hidden md:block" />
          
          {/* Vertical Left Line (Mobile) */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/30 dark:via-gold/20 to-transparent md:hidden" />

          {/* Steps Wrapper */}
          <div className="relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
