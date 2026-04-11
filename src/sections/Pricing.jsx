import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, TrendingUp } from 'lucide-react'

const PRICING_DATA = [
  {
    title: 'STARTER',
    price: '₹3,000–₹5,000',
    features: [
      'Landing page',
      '1-page site',
      'Basic contact form',
      'Mobile responsive',
      'Delivered in 5–7 days'
    ],
    buttonText: 'GET STARTED',
    popular: false
  },
  {
    title: 'STANDARD',
    price: '₹7,000–₹12,000',
    features: [
      'Multi-page business website',
      'Custom design',
      'Contact form',
      'Basic SEO',
      'Delivered in 10–15 days'
    ],
    buttonText: 'MOST POPULAR',
    popular: true
  },
  {
    title: 'PREMIUM',
    price: '₹15,000+',
    features: [
      'Full stack web app',
      'REST API',
      'Database',
      'Admin panel',
      'Custom features',
      'Delivered in 25–30 days'
    ],
    buttonText: 'CONTACT ME',
    popular: false
  }
]

export default function Pricing() {
  const whatsappNumber = '6383028607'
  const whatsappBaseUrl = `https://wa.me/91${whatsappNumber}`

  return (
    <section id="pricing" className="py-24 relative overflow-hidden px-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Invest in your <span className="text-gold italic">Growth</span>
            </h2>
            <TrendingUp className="text-gold w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_DATA.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass p-8 flex flex-col h-full group ${
                plan.popular ? 'border-gold shadow-2xl shadow-gold/10 z-10 scale-105' : 'hover:border-gold/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-brown-950 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-1">
                  MOST POPULAR <Star className="w-3 h-3 fill-brown-950" />
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-brown-300 font-bold tracking-[0.2em] mb-6">{plan.title}</h3>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {plan.price}
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-brown-200 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={`${whatsappBaseUrl}?text=Hello! I'm interested in the ${plan.title} plan for my project.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl text-center font-bold tracking-widest text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gold text-brown-950 hover:bg-white hover:text-brown-950 shadow-xl shadow-gold/20'
                    : 'bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-brown-950'
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
      </div>
    </section>
  )
}
