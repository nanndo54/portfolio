import LandingSection from '@/sections/LandingSection'
import dynamic from 'next/dynamic'

const sections = [
  {
    id: 'landing',
    Tag: LandingSection,
    hide: true
  },
  {
    id: 'projects',
    Tag: dynamic(() => import('@/sections/ProjectsSection'))
  },
  {
    id: 'skills',
    Tag: dynamic(() => import('@/sections/SkillsSection'))
  },
  {
    id: 'about-me',
    Tag: dynamic(() => import('@/sections/AboutMeSection'))
  },
  {
    id: 'contact',
    Tag: dynamic(() => import('@/sections/ContactSection'))
  },
  {
    id: 'quote',
    Tag: dynamic(() => import('@/sections/QuoteSection')),
    hide: true,
    ignore: true
  }
]

export default sections
