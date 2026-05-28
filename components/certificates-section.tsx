'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const certificates = [
  {
    id: 1,
    title: 'Programming for Everybody',
    subtitle: 'Getting Started with Python',
    issuer: 'University of Michigan',
    platform: 'Coursera',
    date: 'Nov 2025',
    image: '/images/certificate1.png',
    verifyUrl: 'https://coursera.org/verify/WKYP1LQ1UQTI',
  },
  {
    id: 2,
    title: 'Engineering Physics Prerequisites',
    subtitle: '',
    issuer: 'MIT Vishwaprayag University',
    platform: 'Coursera',
    date: 'Nov 2025',
    image: '/images/certificate2.png',
    verifyUrl: 'https://coursera.org/verify/EZPNVAV9NOI6',
  },
  {
    id: 3,
    title: 'Revisiting Chemistry',
    subtitle: 'Preparatory Course for ACE-AS1201',
    issuer: 'MIT Vishwaprayag University',
    platform: 'Coursera',
    date: 'Jan 2026',
    image: '/images/certificate3.png',
    verifyUrl: 'https://coursera.org/verify/CD3O4L62HYIV',
  },
  {
    id: 4,
    title: 'Email Etiquette',
    subtitle: '',
    issuer: 'MIT Vishwaprayag University',
    platform: 'Coursera',
    date: 'Sep 2025',
    image: '/images/certificate4.png',
    verifyUrl: 'https://coursera.org/verify/ZLDJEER0E6J8',
  },
  {
    id: 5,
    title: 'Introduction to Programming with MATLAB',
    subtitle: '',
    issuer: 'Vanderbilt University',
    platform: 'Coursera',
    date: 'Dec 2025',
    image: '/images/certificate5.png',
    verifyUrl: 'https://coursera.org/verify/TDBNBFNLSPI9',
  },
  {
    id: 6,
    title: 'Professional Etiquette Skills',
    subtitle: '',
    issuer: 'MIT Vishwaprayag University',
    platform: 'Coursera',
    date: 'Nov 2025',
    image: '/images/certificate6.png',
    verifyUrl: 'https://coursera.org/verify/Z0KEJV3XHNU1',
  },
  {
    id: 7,
    title: 'Yuva AI for All',
    subtitle: '',
    issuer: 'INDIA AI / NASSCOM',
    platform: 'FutureSkills Prime',
    date: 'Feb 2026',
    image: '/images/certificate7.png',
    verifyUrl: null,
  },
  {
    id: 8,
    title: 'Introduction to Discrete Mathematics',
    subtitle: 'For Computer Science',
    issuer: 'UC San Diego',
    platform: 'Coursera',
    date: 'Apr 2026',
    image: '/images/certificate8.png',
    verifyUrl: 'https://coursera.org/verify/specialization/WK302XOEP26H',
    specialization: true,
  },
]

export function CertificatesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null)

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background px-6 py-24 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--sage) 0%, transparent 70%)',
          }}
        />
        <motion.div
          className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-sage">
            ACHIEVEMENTS
          </span>
          <h2
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Certificates & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A collection of certifications demonstrating my commitment to continuous learning and professional development.
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:border-sage/50 hover:shadow-2xl">
                {/* Specialization badge */}
                {cert.specialization && (
                  <div className="absolute left-3 top-3 z-10 rounded-full bg-gold px-3 py-1 text-xs font-medium text-charcoal">
                    Specialization
                  </div>
                )}

                {/* Certificate image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* View badge */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-charcoal/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
                    initial={false}
                  >
                    <span className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-charcoal">
                      Click to View
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="mb-1 line-clamp-1 font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  {cert.subtitle && (
                    <p className="mb-2 line-clamp-1 text-xs text-muted-foreground">
                      {cert.subtitle}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-sage">{cert.issuer}</span>
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sage/20 to-gold/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16"
        >
          {[
            { value: '8', label: 'Total Certificates' },
            { value: '5+', label: 'Platforms' },
            { value: '1', label: 'Specialization' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl font-bold text-gradient"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-card shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/80 text-cream transition-colors hover:bg-charcoal"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Certificate image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="mb-2 text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {selectedCert.title}
                </h3>
                {selectedCert.subtitle && (
                  <p className="mb-3 text-muted-foreground">{selectedCert.subtitle}</p>
                )}
                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-sage/10 px-3 py-1 text-sm text-sage">
                    {selectedCert.issuer}
                  </span>
                  <span className="text-sm text-muted-foreground">{selectedCert.platform}</span>
                  <span className="text-sm text-muted-foreground">{selectedCert.date}</span>
                </div>
                {selectedCert.verifyUrl && (
                  <motion.a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-sage-dark"
                  >
                    Verify Certificate
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
