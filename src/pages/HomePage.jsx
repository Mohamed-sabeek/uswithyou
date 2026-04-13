import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Services from '../sections/Services'
import Process from '../sections/Process'
import Pricing from '../sections/Pricing'
import Projects from '../sections/Projects'
import Testimonials from '../sections/Testimonials'
import Team from '../sections/Team'
import Contact from '../sections/Contact'

export default function HomePage() {
  return (
    <>
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
    </>
  )
}
