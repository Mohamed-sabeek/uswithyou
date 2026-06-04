import haarisCakesImg from '../assets/haaris-cakes.webp'
import alSafiBedaImg from '../assets/al-safi-beda.webp'
import haarisCakesLogo from '../assets/haariscakes-logo.webp'
import alSafiBedaLogo from '../assets/al-safi-beda-logo.webp'

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Haaris Cakes',
    category: ['Landing Page', 'Food Brand'],
    description: 'A professional business website for Haaris Cakes in Aranthangi, Tamil Nadu, featuring integrated WhatsApp ordering and product galleries.',
    image: haarisCakesImg,
    tags: ['React', 'Tailwind', 'Vite', 'WhatsApp API'],
    liveUrl: 'https://haariscakes.in',
    githubUrl: '#',
    featured: true,
    testimonial: {
      content: 'Mohamed built our cake business website professionally and on time. Very satisfied with the result!',
      author: 'Riswana Assan',
      role: 'Business Owner, Aranthangi',
      rating: 5,
      avatar: haarisCakesLogo
    }
  },
  {
    id: 2,
    title: 'Al Safi Beda',
    category: ['Landing Page', 'Food Brand'],
    description: 'A premium responsive landing page developed for Al Safi Beda, a homemade food brand specializing in traditional beda varieties and snacks. Built using React, Vite, and Tailwind CSS, the platform showcases authentic products, features dynamic customer reviews, and integrates direct WhatsApp ordering.',
    image: alSafiBedaImg,
    tags: ['React', 'Tailwind', 'Vite', 'Framer Motion', 'WhatsApp API'],
    liveUrl: 'https://al-safi-beda.vercel.app',
    githubUrl: '#',
    featured: true,
    testimonial: {
      content: 'Mohamed created a beautiful website for our homemade food business. The design perfectly represents our brand, and the WhatsApp ordering feature makes it easy for customers to contact us directly. The website is fast, responsive, and professionally built. We are very happy with the final result.',
      author: 'Naina Mohamed',
      role: 'Business Owner, Ayikudi',
      rating: 5,
      avatar: alSafiBedaLogo
    }
  },
]
