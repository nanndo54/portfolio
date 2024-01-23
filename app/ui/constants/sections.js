'server-only'

import AboutMeSection from '#/components/AboutMeSection'
import ContactSection from '#/components/ContactSection'
import LandingSection from '#/components/LandingSection'
import ProjectsSection from '#/components/ProjectsSection'
import SkillsSection from '#/components/SkillsSection'

const sections = [
  {
    id: 'landing',
    Component: LandingSection,
    hideInNavbar: true
  },
  {
    id: 'projects',
    Component: ProjectsSection
  },
  {
    id: 'skills',
    Component: SkillsSection
  },
  {
    id: 'about-me',
    Component: AboutMeSection
  },
  {
    id: 'contact',
    Component: ContactSection
  }
]

export default sections
