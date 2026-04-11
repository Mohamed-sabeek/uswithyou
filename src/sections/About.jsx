import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Users, Zap } from 'lucide-react'

const features = [
  {
    title: 'Trust & Transparency',
    description: 'We believe in open communication and honest partnership throughout the project lifecycle.',
    Icon: Shield,
  },
  {
    title: 'Collaborative Growth',
    description: 'Your vision, our expertise. We work as an extension of your team to deliver excellence.',
    Icon: Users,
  },
  {
    title: 'Quality First',
    description: 'Meticulous attention to detail and rigorous testing ensure top-tier digital products.',
    Icon: Zap,
  },
  {
    title: 'Impactful Results',
    description: 'We focus on building solutions that drive growth and solve real-world problems.',
    Icon: CheckCircle,
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              More than freelancers, <br />
              we are <span className="text-gold italic">your partners</span>.
            </h2>
            <p className="text-brown-300 text-lg mb-10 leading-relaxed max-w-xl">
              "UsWithYou" isn't just a name; it's our core philosophy. We don't just work for clients; we work with them to transform ideas into impactful digital realities.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 glass flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-brown-950 transition-all duration-300">
                    <feature.Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-brown-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass p-4 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl relative z-10 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team Collaboration"
                className="w-full h-auto rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gold/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 border-2 border-gold/10 rounded-2xl rotate-6 -z-10 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/20 blur-[100px] -z-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
