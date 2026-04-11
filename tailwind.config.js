/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f7f6f5',
          100: '#ebe9e6',
          300: '#b1a99e',
          500: '#3d2a0e',
          900: '#1e1407',
          950: '#110c04',
        },
        gold: {
          DEFAULT: '#FFD400',
          light: '#FFF4CC',
        },
        bronze: '#8c6239',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 'linear-gradient(45deg, #3d2a0e 0%, #776956 50%, #3d2a0e 100%)',
        'radial-gold': 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)',
        'radial-bronze': 'radial-gradient(circle, rgba(140,98,57,0.12) 0%, transparent 70%)',
      },
      animation: {
        'slow-glow': 'glow 8s infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: 0.3 },
          '100%': { opacity: 0.7 },
        }
      }
    },
  },
  plugins: [],
}
