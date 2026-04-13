import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Services from '../sections/Services'
import Pricing from '../sections/Pricing'
import Projects from '../sections/Projects'
import Team from '../sections/Team'
import Contact from '../sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Pricing />
      <Team />
      <Contact />
    </>
  )
}
