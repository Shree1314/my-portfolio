'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 75, icon: '🐍', category: 'Programming' },
  { name: 'C Programming', level: 70, icon: '⚙️', category: 'Programming' },
  { name: 'MATLAB', level: 65, icon: '📊', category: 'Programming' },
  { name: 'Artificial Intelligence', level: 70, icon: '🤖', category: 'Technology' },
  { name: 'Machine Learning', level: 60, icon: '🧠', category: 'Technology' },
  { name: 'Problem Solving', level: 85, icon: '💡', category: 'Soft Skills' },
  { name: 'Data Structures', level: 65, icon: '📚', category: 'Computer Science' },
  { name: 'Algorithms', level: 60, icon: '🔄', category: 'Computer Science' },
  { name: 'Team Collaboration', level: 90, icon: '🤝', category: 'Soft Skills' },
  { name: 'Communication', level: 85, icon: '💬', category: 'Soft Skills' },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 lg:py-32"
      style={{ background: 'linear-gradient(to bottom, var(--background), var(--charcoal))' }}
    >
      {/* Dark background */}
      <div className="absolute inset-0" style={{ background: 'var(--charcoal)' }} />

      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--sage) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
          }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-sage">
            MY EXPERTISE
          </span>
          <h2
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--cream)' }}
          >
            Skills & <span className="text-gradient">Abilities</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all"
              style={{
                borderColor: 'rgba(247, 243, 235, 0.1)',
                background: 'rgba(247, 243, 235, 0.05)',
              }}
            >
              {/* Hover glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sage/20 to-gold/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

              <div className="relative">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h3 className="font-semibold" style={{ color: 'var(--cream)' }}>{skill.name}</h3>
                      <span className="text-xs" style={{ color: 'rgba(247, 243, 235, 0.5)' }}>{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-lg font-bold" style={{ color: 'var(--gold)' }}>{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="h-2 overflow-hidden rounded-full" style={{ background: 'rgba(247, 243, 235, 0.1)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, var(--sage) 0%, var(--gold) 100%)',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p style={{ color: 'rgba(247, 243, 235, 0.6)' }}>
            Constantly learning and expanding my skillset to stay at the forefront of technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
