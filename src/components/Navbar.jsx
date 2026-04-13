import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Team', href: '/#team' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-brown-950/80 backdrop-blur-md border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group relative">
            <motion.div 
              whileHover={{ rotate: 0 }}
              initial={{ rotate: 3 }}
              className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-gold/20"
            >
              <span className="text-brown-950 font-display font-bold text-xl">U</span>
            </motion.div>
            <div className="flex flex-col -gap-1">
              <span className="text-xl font-display font-bold tracking-tight text-white leading-none">
                Us<span className="text-gold">With</span>You
              </span>
              <span className="text-[10px] text-brown-300 font-bold tracking-[0.2em] uppercase opacity-60">Creative Studio</span>
            </div>
            
            {/* Subtle Logo Glow */}
            <div className="absolute -inset-2 bg-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                link.href.startsWith('/#') || link.href === '/' ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-brown-300 hover:text-white transition-colors font-medium text-sm tracking-wide group"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative px-4 py-2 text-brown-300 hover:text-white transition-colors font-medium text-sm tracking-wide group"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                )
              ))}
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/#contact'}
              className="btn-primary flex items-center gap-2 group ml-4 relative overflow-hidden"
            >
              <span className="relative z-10">Hire Us</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gold transition-colors hover:bg-white/5 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-brown-950/60 backdrop-blur-sm z-[-1]"
            />
            
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-brown-950 border-b border-white/5 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  link.href.startsWith('/#') || link.href === '/' ? (
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between px-4 py-4 rounded-xl hover:bg-gold/5 text-lg font-display font-medium text-brown-100 hover:text-gold transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={link.name}
                    >
                      <Link
                        to={link.href}
                        className="flex items-center justify-between px-4 py-4 rounded-xl hover:bg-gold/5 text-lg font-display font-medium text-brown-100 hover:text-gold transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  )
                ))}
                
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/#contact';
                  }}
                  className="btn-primary w-full py-4 text-lg mt-4 shadow-xl shadow-gold/20"
                >
                  Hire Us
                </motion.button>
                
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-xs text-brown-300 font-bold tracking-[0.2em] uppercase opacity-40">
                    © 2026 UsWithYou Studio
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
