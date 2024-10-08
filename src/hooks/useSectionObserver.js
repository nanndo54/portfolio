import sections from '@/constants/sections'
import useAppStore from '@/state/store'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const filteredSections = sections
  .filter(({ noHash }) => !noHash)
  .map(({ id }) => ({ id, intersected: false }))

export default function useSectionObserver() {
  const { setCurrentSection } = useAppStore()
  const router = useRouter()
  const [sectionsIntersection, setSectionsIntersected] = useState(filteredSections)

  const currentSection = sectionsIntersection.find(({ intersected }) => intersected)?.id

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

    sectionsElements
      .filter((element) => element != null)
      .forEach((element) => {
        observer.observe(element)
      })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!currentSection) return

    setCurrentSection(currentSection)

    const section = sections.find(({ id }) => id === currentSection)
    router.replace(section.noHash ? '' : `#${currentSection}`, { scroll: false })
  }, [setCurrentSection, currentSection, router])
}
