import sections from '@/constants/section-ids'
import useAppStore from '@/state/store'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useSectionObserver() {
  const router = useRouter()
  const { isOnTop, setCurrentSection } = useAppStore()
  const [sectionsIntersection, setSectionsIntersected] = useState([])

  const currentSection = isOnTop
    ? sections[0].id
    : sectionsIntersection.find(({ intersected }) => intersected)?.id

  useEffect(() => {
    const sectionsElements = sections.map((section) =>
      document.getElementById(section.id)
    )

    const observer = new IntersectionObserver(
      ([entry]) => {
        const id = entry.target.id
        const intersected = entry.isIntersecting

        setSectionsIntersected((sectionsIntersection) => {
          const newSectionsIntersection = [...sectionsIntersection]
          const section = newSectionsIntersection.find(
            (sectionIntersection) => sectionIntersection.id === id
          )
          if (section) section.intersected = intersected
          else newSectionsIntersection.push({ id, intersected })

          return newSectionsIntersection
        })
      },
      { threshold: 0.3 }
    )

    sectionsElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!currentSection) return

    if (setCurrentSection) setCurrentSection(currentSection)
    // router.replace(`#${currentSection}`, { scroll: false })
  }, [currentSection, setCurrentSection, router])
}