import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageSquare, Phone, MapPin, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formState, setFormState] = useState('idle')
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('submitting')

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
        setFormState('success')
      }, (error) => {
        console.log(error.text)
        alert('Failed to send message. Please try again.')
        setFormState('idle')
      })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-brown-950 transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 dark:bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
              Let's build <br />
              <span className="text-yellow-500 dark:text-gold italic">together</span>.
            </h2>
            <p className="text-gray-600 dark:text-brown-300 text-lg mb-12 leading-relaxed max-w-lg">
              Have a visionary project in mind? We'd love to hear from you. Let's discuss how we can bring your ideas to life with trust and excellence.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass shadow-sm flex items-center justify-center text-yellow-500 dark:text-gold group-hover:scale-110 transition-transform shadow-xl shadow-gray-200/10 dark:shadow-gold/5 border border-gray-100 dark:border-white/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold mb-1">Email Us</h4>
                  <p className="text-gray-600 dark:text-brown-300">safeeofficial1730@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass shadow-sm flex items-center justify-center text-yellow-500 dark:text-gold group-hover:scale-110 transition-transform shadow-xl shadow-gray-200/10 dark:shadow-gold/5 border border-gray-100 dark:border-white/5">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold mb-1">WhatsApp</h4>
                  <p className="text-gray-600 dark:text-brown-300">+91 6383028607</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass shadow-sm flex items-center justify-center text-yellow-500 dark:text-gold group-hover:scale-110 transition-transform shadow-xl shadow-gray-200/10 dark:shadow-gold/5 border border-gray-100 dark:border-white/5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold mb-1">Office</h4>
                  <p className="text-gray-600 dark:text-brown-300">
                    Based in Coimbatore, India <br />
                    Operating Globally
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 shadow-2xl relative overflow-hidden"
          >
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-yellow-400/10 border-2 border-yellow-400 dark:border-gold rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-yellow-500 dark:text-gold" />
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
                <p className="text-gray-600 dark:text-brown-300 px-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-8 btn-secondary border-gray-200 dark:border-white/10"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-600 dark:text-brown-300 uppercase tracking-widest mb-3">Your Name</label>
                    <input
                      required
                      type="text"
                      name="user_name"
                      className="w-full bg-white dark:bg-brown-950 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-4 text-gray-900 dark:text-brown-100 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="UsWithYou"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-600 dark:text-brown-300 uppercase tracking-widest mb-3">Email Address</label>
                    <input
                      required
                      type="email"
                      name="user_email"
                      className="w-full bg-white dark:bg-brown-950 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-4 text-gray-900 dark:text-brown-100 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="uswithyou@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 dark:text-brown-300 uppercase tracking-widest mb-3">Project Details</label>
                  <textarea
                    required
                    rows="5"
                    name="message"
                    className="w-full bg-white dark:bg-brown-950 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-4 text-gray-900 dark:text-brown-100 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project vision..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="btn-primary w-full py-5 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {formState === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
