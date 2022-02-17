import styles from '@/styles/AllSections.module.css'
import { FormattedMessage } from 'react-intl'

import GoToButton from '@/components/GoToButton'
import WelcomeSection from '@/components/WelcomeSection'
import AboutMeSection from '@/components/AboutMeSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

function AllSections() {
  return (
    <div className={styles.base} id='base'>
      <WelcomeSection />
      <GoToButton label='goto.projects' />
      <ProjectsSection />
      <GoToButton label='goto.aboutme' />
      <AboutMeSection />
      <GoToButton label='goto.skills' />
      <SkillsSection />
      <ContactSection />
      <GoToButton direction='up' label='goto.start' />
      <blockquote>
        <FormattedMessage id='quote' /> — <i>Carl Sagan</i>
      </blockquote>
      <Footer />
    </div>
  )
}

export default AllSections
