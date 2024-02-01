'server-only'

import AboutMeSection from '@/sections/AboutMeSection'
import ContactSection from '@/sections/ContactSection'
import LandingSection from '@/sections/LandingSection'
import ProjectsSection from '@/sections/ProjectsSection'
import SkillsSection from '@/sections/SkillsSection'

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
