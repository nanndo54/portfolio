'use client'

import styles from '@/styles/SkillsGroup.module.css'
import clsx from 'clsx'

import { useRef } from 'react'

export default function SkillsGroup({ name, children }) {
  const ref = useRef(null)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)

    const skillsGroupElements = document.getElementsByClassName(styles.base)
    for (const skillGroupElement of skillsGroupElements)
      skillGroupElement.setAttribute('active', false)

    ref.current.setAttribute('active', true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      ref.current.setAttribute('active', false)
    }, 1000)
  }

  return (
    <article
      ref={ref}
      className={clsx(styles.base, 'interactive-border-active')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className='interactive-text'>{name}</h3>
      <div className={styles.skills}>{children}</div>
    </article>
  )
}
