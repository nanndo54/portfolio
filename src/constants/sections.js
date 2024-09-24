import AboutMeSection from '@/sections/AboutMeSection'
import ContactSection from '@/sections/ContactSection'
import LandingSection from '@/sections/LandingSection'
import ProjectsSection from '@/sections/ProjectsSection'
import QuoteSection from '@/sections/QuoteSection'
import SkillsSection from '@/sections/SkillsSection'

const sections = [
  {
    id: 'landing',
    Tag: LandingSection,
    noHash: true
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
  },
  {
    id: 'quote',
    Tag: QuoteSection,
    noHash: true,
    noQuickLink: true
  }
]

export default sections
