import styles from '#/styles/Section.module.css'
import { useEffect, useRef } from 'react'

import useIntersectionObserver from '#/hooks/useIntersectionObserver'
import useAppStore from '#/state/store'

const Section = ({
  background = true,
  as: Component = 'section',
  className = '',
  id,
  children
}) => {
  const { setSectionIntersected } = useAppStore()
  const sectionRef = useRef(null)

  const isIntersected = useIntersectionObserver(sectionRef, {
    once: false,
    threshold: 0.3
  })

  useEffect(() => {
    if (!setSectionIntersected || !id) return
    setSectionIntersected(id, isIntersected)
  }, [id, setSectionIntersected, isIntersected])

  return (
    <div className={styles.layout} id={id}>
      <Component
        ref={sectionRef}
        className={`${styles.base} ${className} ${background ? styles.background : ''}`}
      >
        {children}
      </Component>
    </div>
  )
}

export default Section
