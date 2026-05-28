'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-charcoal px-6 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-charcoal/90" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-3xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                background: 'linear-gradient(135deg, var(--sage) 0%, var(--gold) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SPL
            </span>
            <p className="mt-4 text-sm text-cream/60">
              Turning ideas into impactful reality. First-year engineering student passionate about AI and innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-cream">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-cream/60 transition-colors hover:text-sage"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-cream">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>
                <a href="mailto:Shreyaslokhande37@gmail.com" className="transition-colors hover:text-sage">
                  Shreyaslokhande37@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918767812138" className="transition-colors hover:text-sage">
                  +91 8767812138
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p className="text-sm text-cream/40">
            &copy; {currentYear} Shreyas P Lokhande. All rights reserved.
          </p>
          <p className="text-sm text-cream/40">
            Designed & Built with{' '}
            <span className="text-gold">♥</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
