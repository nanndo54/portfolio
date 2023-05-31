import styles from '#styles/AllSections.module.css'
import { useEffect, useState } from 'react'

import GoToButton from '#components/GoToButton'
import WelcomeSection from '#components/WelcomeSection'
import ProjectsSection from '#components/ProjectsSection'
import AboutMeSection from '#components/AboutMeSection'
import SkillsSection from '#components/SkillsSection'
import ContactSection from '#components/ContactSection'
import Footer from '#components/Footer'
import BlockQuote from '#components/BlockQuote'

function AllSections() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 50)
  }, [])

  return (
    <div className={`${styles.base} ${loaded ? styles.loaded : ''}`}>
      <WelcomeSection />
      <ProjectsSection />
      <AboutMeSection />
      <SkillsSection />
      <ContactSection />
      <GoToButton direction='up' label='goto.start' />
      <BlockQuote author='Carl Sagan' quote='quote.carl-sagan1' />
      <Footer />
    </div>
  )
}

export default AllSections
