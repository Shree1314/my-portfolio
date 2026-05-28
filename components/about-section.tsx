'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-background px-6 py-24 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute right-0 top-0 h-96 w-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--sage) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-sage">
            WHO I AM
          </span>
          <h2
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am <span className="font-semibold text-foreground">Shreyas P Lokhande</span>, a first-year engineering student passionate about{' '}
              <span className="text-sage">Artificial Intelligence</span>, programming, and problem solving.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I completed my 12th in Science stream with subjects like Physics, Chemistry, Mathematics and Computer Science. Currently, I am pursuing engineering and continuously improving my technical skills.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a <span className="text-gold">fast learner</span>, multitasker and a supportive team member. My goal is to master programming and build impactful real-world solutions.
            </p>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: '8+', label: 'Certificates' },
                { value: '4+', label: 'Projects' },
                { value: '1st', label: 'Year BTech' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-3xl font-bold text-gradient md:text-4xl"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-4"
          >
            {[
              {
                icon: '🎓',
                title: 'Education',
                content: 'BTech 1st Year - MIT Vishwaprayag University',
              },
              {
                icon: '💡',
                title: 'Focus Areas',
                content: 'AI, Machine Learning, Web Development, Problem Solving',
              },
              {
                icon: '🎯',
                title: 'Goal',
                content: 'Master programming and create impactful real-world solutions',
              },
              {
                icon: '⚡',
                title: 'Strengths',
                content: 'Fast Learner, Multitasker, Team Player, Problem Solver',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:border-sage/50 hover:shadow-xl"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-sage/5 to-gold/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sage/10 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
