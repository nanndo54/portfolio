'server-only'

import AboutMeSection from '@/components/AboutMeSection'
import ContactSection from '@/components/ContactSection'
import LandingSection from '@/components/LandingSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'

const sections = [
  {
    id: 'landing',
    Tag: LandingSection,
    hideInNavbar: true
  },
  {
    id: 'projects',
    Tag: ProjectsSection
  },
  {
    id: 'skills',
    Tag: SkillsSection
  },
  {
    id: 'about-me',
    Tag: AboutMeSection
  },
  {
    id: 'contact',
    Tag: ContactSection
  }
]

export default sections
