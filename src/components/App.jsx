import styles from '@/styles/App.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

import Navbar from './Navbar'
import Footer from './Footer'
import Modal from './Modal'
import GoToButton from './GoToButton'
import WelcomeSection from './WelcomeSection'
import AboutMeSection from './AboutMeSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'

import useTheme from '@/hooks/useTheme'

function App() {
  const { theme } = useSelector(({ app }) => app)
  useTheme(theme)

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
