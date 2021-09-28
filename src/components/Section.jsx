import styles from '@/styles/Section.module.css'
import React, { useRef } from 'react'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import SectionLoader from './SectionLoader'

function Section({
  shadow = true,
  animated = true,
  fallback = true,
  className = '',
  children,
  onClick
}) {
  const ref = useRef(null)
  const intersected = useIntersectionObserver(ref, {
    threshold: 0.4,
    fallback
  })

  className = ` ${className} ${styles.base} ${shadow ? styles.shadow : ''} ${
    fallback
      ? animated && intersected
        ? styles.animated
        : ''
      : animated
      ? styles.animated
      : ''
  }`

  return (
    <>
      <section className={className} ref={ref} onClick={onClick}>
        {fallback && !intersected ? <SectionLoader /> : children}
      </section>
    </>
  )
}

export default Section
