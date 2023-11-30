import styles from '#/styles/AllSections.module.css'
import { useEffect, useState } from 'react'

import GoToButton from '#/components/GoToButton'
import WelcomeSection from '#/components/WelcomeSection'
import JobExperiencesSection from '#/components/JobExperiencesSection'
import ProjectsSection from '#/components/ProjectsSection'
import AboutMeSection from '#/components/AboutMeSection'
import SkillsSection from '#/components/SkillsSection'
import ContactSection from '#/components/ContactSection'
import Footer from '#/components/Footer'
import BlockQuote from '#/components/BlockQuote'
import Showcase from '#/components/Showcase'

function AllSections() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`${styles.base} ${loaded ? styles.loaded : ''}`} id='base'>
      <WelcomeSection />
      <JobExperiencesSection />
      <ProjectsSection />
      <AboutMeSection />
      <SkillsSection />
      <ContactSection />
      <GoToButton direction='up' label='goto.start' />
      <BlockQuote author='Carl Sagan' quote='quote.carl-sagan1' />
      <Footer />
      <Showcase />
    </div>
  )
}

export default AllSections
