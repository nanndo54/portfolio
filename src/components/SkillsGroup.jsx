'use client'

import styles from '@/styles/SkillsGroup.module.css'

import { useRef } from 'react'

export default function SkillsGroup({ name, children }) {
  const ref = useRef(null)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)

    const groups = document.getElementsByClassName(styles.base)
    for (const group of groups) {
      group.classList.remove(styles.active, 'interactive-border')
    }

    ref.current.classList.add(styles.active, 'interactive-border')
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      ref.current.classList.remove(styles.active)
    }, 1200)
  }

  return (
    <div
      ref={ref}
      className={styles.base}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{name}</h3>
      <div className={styles.skills}>{children}</div>
    </div>
  )
}
