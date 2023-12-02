import WelcomeSection from '#/components/WelcomeSection'
import JobExperiencesSection from '#/components/JobExperiencesSection'
import ProjectsSection from '#/components/ProjectsSection'
import AboutMeSection from '#/components/AboutMeSection'
import SkillsSection from '#/components/SkillsSection'
import ContactSection from '#/components/ContactSection'

export default [
  {
    id: 'welcome',
    icon: 'home',
    Component: WelcomeSection
  },
  {
    id: 'job-experience',
    icon: 'work',
    Component: JobExperiencesSection
  },
  {
    id: 'projects',
    icon: 'code',
    Component: ProjectsSection
  },
  {
    id: 'about-me',
    icon: 'person',
    Component: AboutMeSection
  },
  {
    id: 'skills',
    icon: 'build',
    Component: SkillsSection
  },
  {
    id: 'contact',
    icon: 'email',
    Component: ContactSection
  }
]
