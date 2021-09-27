import styles from '@/styles/Section.module.css'
import React, { useRef } from 'react'
import ContentLoader from 'react-content-loader'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

import dotsImage from '@img/dots.png'

const scrollNext = (ev) => {
  const base = document.getElementById('base')
  const coords = ev.target.getBoundingClientRect()
  const top = base.scrollTop + coords.y

  base.scrollTo({
    top,
    behavior: 'smooth'
  })
}

function Section({
  children,
  shadow = true,
  last = false,
  animated = true,
  fallback = true
}) {
  const ref = useRef(null)
  const intersected = useIntersectionObserver(ref, {
    threshold: 0.4,
    fallback
  })

  const className = `${styles.base} ${shadow ? styles.shadow : ''} ${
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
      <section className={className} ref={ref}>
        {fallback && !intersected ? (
          <ContentLoader
            speed={2}
            viewBox='0 0 600 350'
            backgroundColor='var(--shadow-color)'
            foregroundColor='var(--section-background-color)'>
            <rect x='200' y='25' rx='3' ry='3' width='200' height='20' />
            <rect x='0' y='90' rx='3' ry='3' width='600' height='6' />
            <rect x='0' y='115' rx='3' ry='3' width='580' height='6' />
            <rect x='0' y='140' rx='3' ry='3' width='580' height='6' />
            <rect x='0' y='165' rx='3' ry='3' width='290' height='6' />
            <rect x='0' y='220' rx='3' ry='3' width='600' height='6' />
            <rect x='0' y='245' rx='3' ry='3' width='600' height='6' />
            <rect x='0' y='270' rx='3' ry='3' width='560' height='6' />
            <rect x='0' y='295' rx='3' ry='3' width='210' height='6' />
          </ContentLoader>
        ) : (
          children
        )}
      </section>
      {!last && (
        <img
          className={styles.next}
          src={dotsImage}
          onClick={scrollNext}
          alt='go to next section'
        />
      )}
    </>
  )
}

export default Section
