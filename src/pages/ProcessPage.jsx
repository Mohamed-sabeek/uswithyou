import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronLeft, MessageSquare, FileText, Code2, ShieldCheck, Rocket, LifeBuoy } from 'lucide-react'

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
      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white dark:bg-brown-950 border-2 border-yellow-400 dark:border-gold rounded-full z-20 hidden md:block shadow-[0_0_15px_rgba(250,204,21,0.5)] dark:shadow-[0_0_15px_rgba(255,215,0,0.5)]" />

      {/* Content Card */}
      <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <div className="group relative glass p-8 md:p-10 hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-none hover:border-yellow-400/30 dark:hover:border-gold/30 transition-all duration-500 overflow-hidden shadow-sm border border-gray-200 dark:border-white/5">
          {/* Step Number Backdrop */}
          <div className="absolute top-4 right-8 text-8xl md:text-9xl font-display font-bold text-gray-900/[0.08] dark:text-white/[0.02] group-hover:text-yellow-500/[0.08] dark:group-hover:text-gold/[0.04] transition-all duration-700 select-none">
            {step.number}
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/20 dark:bg-gold/10 flex items-center justify-center text-yellow-500 dark:text-gold mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-gray-300/15 dark:shadow-gold/5 border border-gray-200 dark:border-white/5">
              <step.icon className="w-6 h-6" />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-500 dark:group-hover:text-gold transition-colors">
              {step.title}
            </h3>

            <p className="text-gray-700 dark:text-brown-300 leading-relaxed italic text-base md:text-lg group-hover:text-gray-900 dark:group-hover:text-brown-200 transition-colors">
              {step.description}
            </p>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 dark:bg-gold group-hover:w-full transition-all duration-700" />
        </div>
      </div>

      {/* Spacer for the other side (Desktop) */}
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  )
}

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white dark:bg-brown-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 dark:text-brown-300 hover:text-yellow-500 dark:hover:text-gold transition-colors mb-8 group font-medium"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.9] text-gray-900 dark:text-white"
          >
            The <span className="text-yellow-500 dark:text-gold italic">Process</span> Journey.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-brown-300 text-xl md:text-2xl max-w-3xl leading-relaxed italic font-light"
          >
            A high-performance workflow engineered to transform complex concepts into seamless digital realities.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative py-12">
          {/* Vertical Center Line (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-400/50 dark:via-gold/20 to-transparent hidden md:block" />
          
          {/* Vertical Left Line (Mobile) */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-400/50 dark:via-gold/20 to-transparent md:hidden" />

          {/* Steps Wrapper */}
          <div className="relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 glass border-gray-200 dark:border-gold/10 text-center relative overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-200/20 dark:shadow-none"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.05] dark:from-gold/[0.03] via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Ready to start your <br className="hidden md:block" />
              <span className="text-yellow-500 dark:text-gold italic underline decoration-yellow-400/20 dark:decoration-gold/20 underline-offset-[12px]">Success Journey?</span>
            </h2>
            <p className="text-gray-600 dark:text-brown-300 mb-12 max-w-2xl mx-auto text-lg md:text-xl italic font-light">
              Let's combine our architectural precision with your bold vision to create the extraordinary.
            </p>
            <Link 
              to="/#contact" 
              className="btn-primary px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-yellow-400/10 dark:shadow-gold/10 whitespace-nowrap inline-block"
            >
              Start Collaboration
            </Link>
          </div>
          
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-400/[0.03] dark:bg-gold/[0.03] blur-[120px] rounded-full" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/[0.03] dark:bg-gold/[0.03] blur-[120px] rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}

