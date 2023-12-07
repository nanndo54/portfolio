import styles from '#/styles/Section.module.css'
import { useEffect, useRef } from 'react'

import useIntersectionObserver from '#/hooks/useIntersectionObserver'
import useAppStore from '#/store'

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
  }, [isIntersected])

  const mouseEvent = (e) => {
    if (!sectionRef?.current) return

    const { x, y } = sectionRef.current.getBoundingClientRect()
    sectionRef.current.style.setProperty('--x', e.clientX - x)
    sectionRef.current.style.setProperty('--y', e.clientY - y)
  }

  const delayedMouseEvent = (e) => {
    setTimeout(() => {
      mouseEvent(e)
    }, 100)
  }

  useEffect(() => {
    if (!background || !sectionRef?.current) return

    sectionRef.current.addEventListener('mousemove', mouseEvent)
    sectionRef.current.addEventListener('pointermove', mouseEvent)
    sectionRef.current.addEventListener('wheel', delayedMouseEvent, { passive: true })

    return () => {
      sectionRef.current.removeEventListener('mousemove', mouseEvent)
      sectionRef.current.removeEventListener('pointermove', mouseEvent)
      sectionRef.current.removeEventListener('wheel', delayedMouseEvent, {
        passive: true
      })
    }
  }, [sectionRef])

  return (
    <Component
      className={`${className} ${styles.base} ${background ? styles.background : ''}`}
      id={id}
      ref={sectionRef}
    >
      {children}
    </Component>
  )
}

export default Section
