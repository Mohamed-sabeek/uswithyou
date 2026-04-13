import haarisCakesImg from '../assets/haaris-cakes.webp'
import logo from '../assets/logo.webp'

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Haaris Cakes',
    category: 'E-commerce',
    description: 'A professional business website for Haaris Cakes in Aranthangi, Tamil Nadu, featuring integrated WhatsApp ordering and product galleries.',
    image: haarisCakesImg,
    tags: ['React', 'Tailwind', 'Vite', 'WhatsApp API'],
    liveUrl: 'https://haariscakes.in',
    githubUrl: '#',
    featured: true,
    testimonial: {
      content: 'Mohamed built our cake business website professionally and on time. Very satisfied with the result!',
      author: 'Riswana Assan',
      role: 'Business Owner',
      rating: 5,
      avatar: logo
    }
  },
]
