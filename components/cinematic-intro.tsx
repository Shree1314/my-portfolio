'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'initial' | 'logo' | 'text' | 'exit'>('initial')

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('logo'), 500),
      setTimeout(() => setPhase('text'), 2000),
      setTimeout(() => setPhase('exit'), 3500),
      setTimeout(() => onComplete(), 4500),
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1d1a 0%, #0d0f0d 100%)' }}
        >
          {/* Ambient particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full"
                style={{
                  background: i % 3 === 0 ? '#d4af37' : '#6b8e5f',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Light beams */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'logo' || phase === 'text' ? 0.1 : 0 }}
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
            }}
          />

          {/* Logo */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                phase === 'logo' || phase === 'text'
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              {/* Glow ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  phase === 'logo' || phase === 'text'
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
                }}
              />

              {/* SPL Logo */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.5)',
                    '0 0 40px rgba(212, 175, 55, 0.8)',
                    '0 0 20px rgba(212, 175, 55, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span
                  className="text-7xl font-bold tracking-wider md:text-9xl"
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    background: 'linear-gradient(135deg, #d4af37 0%, #f4e4ba 50%, #d4af37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  SPL
                </span>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={phase === 'text' ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="mx-auto mt-6 h-px w-32"
                style={{
                  background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
                }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={phase === 'text' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="mt-6 text-center text-sm tracking-[0.3em] text-[#6b8e5f] md:text-base"
            >
              TURNING IDEAS INTO IMPACTFUL REALITY
            </motion.p>
          </div>

          {/* Bottom gradient fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background: 'linear-gradient(to top, #0d0f0d, transparent)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
