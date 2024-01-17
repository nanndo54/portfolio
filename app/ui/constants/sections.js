import LandingSection from '#/components/LandingSection'
import ProjectsSection from '#/components/ProjectsSection'
import AboutMeSection from '#/components/AboutMeSection'
import SkillsSection from '#/components/SkillsSection'
import ContactSection from '#/components/ContactSection'

export default [
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
