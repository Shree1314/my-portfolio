'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    name: 'Smart Stadium (AEGIS ONE)',
    description:
      'Developed an AI-based Smart Stadium platform that helps customers and people who purchased match tickets get accurate navigation inside the stadium along with instant assistance and guidance whenever needed. The system focuses on improving crowd management, visitor experience, accessibility, and real-time support using smart technology solutions.',
    image: '/images/project1.png',
    secondaryImage: '/images/project1-dashboard.png',
    tags: ['AI', 'Digital Twin', 'Real-time Analytics', 'Crowd Management'],
    featured: true,
  },
  {
    id: 2,
    name: 'Efficiency with Comfort',
    description:
      'Designed a portable resting solution for construction workers featuring a transformable tent setup with an emergency medical kit. Built as part of a team of 4 members focusing on worker safety, portability, and comfort.',
    image: '/images/project2.png',
    tags: ['Design Thinking', 'Sustainability', 'Worker Safety', 'Innovation'],
    featured: false,
  },
  {
    id: 3,
    name: 'Food Waste Reduction System',
    description:
      'Developed a system aimed at reducing food wastage by improving food distribution and management processes through smart tracking and awareness solutions.',
    image: null,
    tags: ['Sustainability', 'Social Impact', 'Food Management'],
    featured: false,
  },
  {
    id: 4,
    name: 'SaveSphere',
    description:
      'SaveSphere is a C-based Personal Finance and Goal Tracking System designed to help users manage savings goals, monthly budgets, and expenses efficiently using core Data Structures and Algorithms (DSA) concepts.',
    image: null,
    tags: ['C Programming', 'DSA', 'Finance', 'Goal Tracking'],
    link: 'https://github.com/Shree1314/dsc-project',
    featured: false,
  },
]

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 lg:py-32"
      style={{ background: 'linear-gradient(to bottom, var(--charcoal), var(--background))' }}
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute right-0 top-1/3 h-96 w-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-sage">
            MY WORK
          </span>
          <h2
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className={`group relative ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-500 hover:border-sage/50 hover:shadow-2xl"
                style={{ perspective: '1000px' }}
              >
                {/* Image section */}
                {project.image && (
                  <div className="relative h-64 overflow-hidden lg:h-80">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                    {/* Secondary image preview on hover (for featured) */}
                    {project.featured && project.secondaryImage && (
                      <motion.div
                        className="absolute bottom-4 right-4 h-32 w-48 overflow-hidden rounded-xl border-2 border-gold/50 shadow-2xl lg:h-40 lg:w-64"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={hoveredId === project.id ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={project.secondaryImage}
                          alt={`${project.name} dashboard`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Content section */}
                <div className="p-6 lg:p-8">
                  {/* Project number */}
                  <span className="mb-2 inline-block text-xs font-medium tracking-widest text-sage">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3
                    className="mb-3 text-2xl font-bold lg:text-3xl"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sage/10 px-3 py-1 text-xs font-medium text-sage"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-sage-dark"
                    >
                      View on GitHub
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

                {/* Corner accent */}
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br from-sage/20 to-gold/20 blur-2xl transition-opacity group-hover:opacity-100" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
