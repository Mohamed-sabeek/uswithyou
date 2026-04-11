import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Github, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/uswithyou_/' },
  { name: 'Twitter', icon: Twitter, href: '' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/mohamed-sabeek-1a272a327/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/Mohamed-sabeek' },
]

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-950 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16 px-6 py-12 glass shadow-xl shadow-gold/5 relative overflow-hidden">
          {/* Radial Glow Overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-gold/20">
                <span className="text-brown-950 font-display font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white font-display">
                Us<span className="text-gold">With</span>You
              </span>
            </a>
            <p className="text-brown-300 leading-relaxed mb-8">
              A premium freelance team delivering impactful digital solutions with trust and collaboration.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 glass flex items-center justify-center text-brown-300 hover:text-gold hover:border-gold transition-all duration-300 shadow-lg shadow-gold/5"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-display font-bold text-white mb-6">Shortcuts</h4>
            <div className="grid grid-cols-1 gap-4">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brown-300 hover:text-gold transition-colors text-sm font-medium tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-display font-bold text-white mb-6">Connect</h4>
            <div className="grid grid-cols-1 gap-4">
              {navLinks.slice(4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brown-300 hover:text-gold transition-colors text-sm font-medium tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-display font-bold text-white mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:uswithyou.team@gmail.com" className="flex items-center gap-3 text-brown-300 hover:text-gold transition-colors group">
                <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">uswithyou.team@gmail.com</span>
              </a>
              <div className="mt-4 p-4 glass-dark">
                <p className="text-xs text-brown-300 italic">"Working with us means working for success."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-brown-300 text-sm">
            © 2026 <span className="text-gold font-bold">UsWithYou</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-brown-300 hover:text-gold text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-brown-300 hover:text-gold text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
