import styles from '@/styles/AllSections.module.css'

import GoToButton from '@/components/GoToButton'
import WelcomeSection from '@/components/WelcomeSection'
import ContactIcons from '@/components/ContactIcons'
import ProjectsSection from '@/components/ProjectsSection'
import AboutMeSection from '@/components/AboutMeSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BlockQuote from '@/components/BlockQuote'

function AllSections() {
  return (
    <div className={styles.base} id='base'>
      <WelcomeSection />
      <ContactIcons />
      <GoToButton label='goto.projects' />
      <ProjectsSection />
      <GoToButton label='goto.aboutme' />
      <AboutMeSection />
      <GoToButton label='goto.skills' />
      <SkillsSection />
      <ContactSection />
      <ContactIcons disableFloat className={styles.icons} />
      <GoToButton direction='up' label='goto.start' />
      <BlockQuote author='Carl Sagan' quote='quote.carl-sagan1' />
      <Footer />
    </div>
  )
}

export default AllSections
