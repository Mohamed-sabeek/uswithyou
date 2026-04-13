import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="bg-white dark:bg-brown-950 min-h-screen selection:bg-gold selection:text-brown-950 overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
