import styles from '#styles/Section.module.css'
import { forwardRef, useEffect, useRef } from 'react'

const Section = forwardRef(
  (
    {
      background = true,
      animated = false,
      as: Tag = 'section',
      className = '',
      onClick = () => {},
      children
    },
    ref
  ) => {
    const sectionRef = ref || useRef(null)

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
      sectionRef.current.addEventListener('wheel', delayedMouseEvent, { passive: true })

      return () => {
        sectionRef.current.removeEventListener('mousemove', mouseEvent)
        sectionRef.current.removeEventListener('wheel', delayedMouseEvent, {
          passive: true
        })
      }
    }, [sectionRef])

    const baseClassName = `${styles.base} ${className} ${
      background ? styles.background : ''
    } ${animated ? styles.animated : ''}`

    return (
      <Tag className={baseClassName} ref={sectionRef} onClick={onClick}>
        {children}
      </Tag>
    )
  }
)

export default Section
