import styles from '@/styles/Section.module.css'
import { useRef } from 'react'

import SectionLoader from './SectionLoader'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

function Section({
  shadow = true,
  animated = true,
  fallback = true,
  className,
  children,
  onClick,
  Tag = 'section'
}) {
  const ref = useRef(null)
  const intersected = useIntersectionObserver(
    ref,
    {
      threshold: 0.3
    },
    fallback
  )

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
