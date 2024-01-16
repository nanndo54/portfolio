import LandingSection from '#/components/LandingSection'
import JobExperiencesSection from '#/components/JobExperiencesSection'
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
    id: 'job-experience',
    Component: JobExperiencesSection
  },
  {
    id: 'projects',
    Component: ProjectsSection
  },
  {
    id: 'about-me',
    Component: AboutMeSection
  },
  {
    id: 'skills',
    Component: SkillsSection
  },
  {
    id: 'contact',
    Component: ContactSection,
    hideInNavbar: true
  }
]
