'use client'

import { useState } from 'react'
import { CinematicIntro } from '@/components/cinematic-intro'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { CertificatesSection } from '@/components/certificates-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ScrollProgress, ScrollToTop, CustomCursor } from '@/components/scroll-effects'

export default function Portfolio() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {/* Cinematic intro */}
      {!introComplete && <CinematicIntro onComplete={() => setIntroComplete(true)} />}

      {/* Main content */}
      <div
        className={`transition-opacity duration-1000 ${
          introComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <CustomCursor />
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
