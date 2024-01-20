import sections from '#/constants/sections'
import useAppStore from '#/state/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function useSectionObserver() {
  const router = useRouter()
  const { isOnTop, sectionsIntersection, setSectionIntersected } = useAppStore()

  const currentSection = isOnTop
    ? sections[0].id
    : sectionsIntersection.find(({ intersected }) => intersected)?.id

  useEffect(() => {
    const sectionsElements = sections.map((section) =>
      document.getElementById(section.id)
    )

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (setSectionIntersected)
          setSectionIntersected(entry.target.id, entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    sectionsElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [setSectionIntersected])

  useEffect(() => {
    if (currentSection)
      router.replace(`#${currentSection}`, { scroll: false, shallow: true })
  }, [currentSection, router])

  return currentSection
}
