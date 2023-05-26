import styles from '@/styles/Section.module.css'
import { useEffect, useRef } from 'react'

import SectionLoader from './SectionLoader'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

function Section({
  shadow = true,
  animated = true,
  fallback = true,
  Tag = 'section',
  className = '',
  onIntersected = () => {},
  onClick = () => {},
  threshold = 0.3,
  once = true,
  children
}) {
  const ref = useRef(null)
  const intersected = useIntersectionObserver(
    ref,
    {
      threshold
    },
    fallback,
    once
  )

  useEffect(() => {
    onIntersected(intersected)
  }, [intersected])

  useEffect(() => {
    if (!shadow || !ref?.current) return

    ref.current.addEventListener('mousemove', mouseEvent)

    return () => ref.current.removeEventListener('mousemove', mouseEvent)
  }, [ref])

  const mouseEvent = (e) => {
    ref.current.classList.add(styles.shadow)
    const { x, y } = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--x', e.clientX - x)
    ref.current.style.setProperty('--y', e.clientY - y)
  }

  const baseClassName = `${styles.base} ${className} ${shadow ? styles.shadow : ''} ${
    fallback
      ? animated && intersected
        ? styles.animated
        : ''
      : animated
      ? styles.animated
      : ''
  }`

  return (
    <Tag className={baseClassName} ref={ref} onClick={onClick}>
      {fallback && !intersected ? <SectionLoader /> : children}
    </Tag>
  )
}

export default Section
