'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 px-6 pt-20"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute -left-20 top-1/4 h-72 w-72 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, var(--sage-light) 0%, transparent 70%)',
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 70%)',
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full"
            style={{
              background: i % 2 === 0 ? 'var(--gold)' : 'var(--sage)',
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
            <span className="text-sm font-medium text-sage">Available for Opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">Shreyas P</span>
            <br />
            <span
              className="text-gradient"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Lokhande
            </span>
          </motion.h1>

          {/* Tagline with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <p className="text-xl text-muted-foreground md:text-2xl">
              &ldquo;<span className="text-foreground">Turning ideas into impactful reality</span>&rdquo;
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg"
          >
            Engineering student passionate about Artificial Intelligence, programming, and creating solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full bg-sage px-8 py-4 font-medium text-primary-foreground shadow-lg transition-all hover:shadow-xl"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-sage-dark"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border-2 border-sage px-8 py-4 font-medium text-sage transition-all hover:bg-sage/10"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex-shrink-0"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-4 rounded-full opacity-60"
            style={{
              background: 'linear-gradient(135deg, var(--sage) 0%, var(--gold) 100%)',
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Rotating border */}
          <motion.div
            className="absolute -inset-3 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, var(--sage), var(--gold), var(--sage-light), var(--gold-light), var(--sage))',
              padding: '3px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="h-full w-full rounded-full bg-background" />
          </motion.div>

          {/* Image container */}
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-background shadow-2xl md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/images/pfp.jpeg"
              alt="Shreyas P Lokhande"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute -right-4 top-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gold shadow-lg"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xl">✨</span>
          </motion.div>
          <motion.div
            className="absolute -left-4 bottom-8 flex h-12 w-12 items-center justify-center rounded-xl bg-sage shadow-lg"
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span className="text-xl">🚀</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-muted-foreground">SCROLL</span>
          <div className="h-10 w-6 rounded-full border-2 border-sage/50">
            <motion.div
              className="mx-auto mt-2 h-2 w-1 rounded-full bg-sage"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
