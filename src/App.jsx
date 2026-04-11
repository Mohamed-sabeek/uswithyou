import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Process from './sections/Process'
import Pricing from './sections/Pricing'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Team from './sections/Team'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Smooth scroll polyfill for older browsers if needed
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="bg-brown-950 min-h-screen selection:bg-gold selection:text-brown-950 overflow-x-hidden">
      {/* Progress Bar removed for build stability */}

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Process />
        <Pricing />
        <Projects />
        <Testimonials />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
