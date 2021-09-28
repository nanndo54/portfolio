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
import SectionLoader from './SectionLoader'

function App() {
  const { theme } = useSelector(({ app }) => app)
  useTheme(theme)

  return (
    <div className={styles.base} id='base'>
      <Modal />
      <Navbar />
      <div className={styles.sections}>
        <WelcomeSection />
        <GoToButton direction='down' />
        <SectionLoader />
        <AboutMeSection />
        <GoToButton direction='down' />
        <SkillsSection />
        <GoToButton direction='down' />
        <ProjectsSection />
        <ContactSection />
        <GoToButton direction='up' />
      </div>
      <Footer />
    </div>
  )
}

export default App
