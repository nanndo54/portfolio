import sections from '@/constants/sections'
import styles from '@/styles/NavbarLinks.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useSectionObserver() {
  const router = useRouter()
  const [sectionsIntersection, setSectionsIntersected] = useState([])

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

    const currentElement = document.querySelector(`a.${styles.current}`)
    if (currentElement) currentElement.classList.remove(styles.current, 'blur-background')

    const section = sections.find(({ id }) => id === currentSection)

    if (section.hide) {
      router.replace('', { scroll: false })
      return
    }

    const linkElement = document.querySelector(`a[href="#${currentSection}"]`)
    if (linkElement) linkElement.classList.add(styles.current, 'blur-background')

    router.replace(`#${currentSection}`, { scroll: false })
  }, [currentSection, router])
}
