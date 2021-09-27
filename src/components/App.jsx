import styles from '@/styles/App.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

import Modal from './Modal'
import Navbar from './Navbar'
import Footer from './Footer'

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
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
