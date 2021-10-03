import styles from '@/styles/App.module.css'
import React from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import GoToButton from '@/components/GoToButton'
import WelcomeSection from '@/components/WelcomeSection'
import AboutMeSection from '@/components/AboutMeSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

function App() {
  return (
    <div className={styles.base} id='base'>
      <Modal />
      <Navbar />
      <div className={styles.sections}>
        <WelcomeSection />
        <GoToButton direction='down' label='acerca de mí' />
        <AboutMeSection />
        <GoToButton direction='down' label='habilidades' />
        <SkillsSection />
        <GoToButton direction='down' label='proyectos' />
        <ProjectsSection />
        <ContactSection />
        <GoToButton direction='up' label='inicio' />
        <blockquote>
          “Lo que nos hace grandes es el hecho de poder ver lo pequeños que somos” —
          <i>Carl Sagan</i>
        </blockquote>
      </div>
      <Footer />
    </div>
  )
}

export default App
