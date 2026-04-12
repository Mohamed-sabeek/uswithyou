import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Github, X } from 'lucide-react'
import member1 from '../assets/member1.jpeg'
import member2 from '../assets/member2.jpeg'
import member3 from '../assets/member3.jpeg'

const TEAM_DATA = [
  {
    name: 'Mohamed Sabeek H',
    role: 'Full Stack Developer & UI/UX Designer',
    description: 'Develops complete end-to-end web applications, handling frontend, backend, and designing clean, responsive, and user-friendly interfaces.',
    image: member2,
    socials: { linkedin: 'https://www.linkedin.com/in/mohamed-sabeek-1a272a327/', github: 'https://github.com/Mohamed-sabeek' },
  },
  {
    name: 'Mohamed Asif I',
    role: 'Business Development & Client Manager',
    description: 'Handles client acquisition, communication, and requirement analysis. Ensures smooth coordination between clients and the development team.',
    image: member1,
    socials: { linkedin: 'https://www.linkedin.com/in/mohamed-asif-i-a7b401311/', github: 'https://github.com/MOHAMEDASIF2007' },
  },
  {
    name: 'Deva S',
    role: 'Game Developer & Software Engineer',
    description: 'Works on game development and interactive features while supporting application development with creative and technical solutions.',
    image: member3,
    socials: { linkedin: 'https://www.linkedin.com/in/deva-s-1657a5343', github: 'https://github.com/s-deva20' },
  },
]

export default function Team() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="team" className="py-24 bg-brown-950/20 px-6 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Meet the <span className="text-gold italic">Visionaries</span>.
          </h2>
          <p className="text-brown-300 max-w-xl mx-auto px-6">
            A small, dedicated team of experts focused on delivering excellence with every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative glass p-6 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-white/5 hover:border-gold/30"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl mb-8 transition-all duration-700 shadow-2xl shadow-black/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* View Image Button - Centered Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px] z-20">
                  <button
                    onClick={() => setSelectedImage(member.image)}
                    className="px-6 py-2.5 glass-dark rounded-full text-white font-bold tracking-[0.2em] text-[10px] hover:bg-gold hover:text-brown-950 transition-all duration-300 shadow-2xl border border-white/10 uppercase"
                  >
                    View Full Image
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brown-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 glass-dark flex justify-center gap-6 z-30">
                  <a href={member.socials.linkedin} className="text-brown-300 hover:text-gold transition-colors p-2 glass rounded-full"><Linkedin size={18} /></a>
                  <a href={member.socials.github} className="text-brown-300 hover:text-gold transition-colors p-2 glass rounded-full"><Github size={18} /></a>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-gold transition-colors tracking-tight">{member.name}</h3>
                <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-80">{member.role}</p>
                <p className="text-brown-300 leading-relaxed italic text-sm border-l-2 border-gold/20 pl-4 py-1">
                  {member.description}
                </p>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 blur-[80px] group-hover:bg-gold/10 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brown-950/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Member Preview"
                className="w-full h-full object-cover bg-brown-950"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 glass flex items-center justify-center text-gold hover:bg-gold hover:text-brown-950 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

