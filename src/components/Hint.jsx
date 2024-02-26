'use client'

import styles from '@/styles/Hint.module.css'

import clsx from 'clsx'
import { useState } from 'react'

const CLICK_TIMEOUT = 1200
const CLICK_HINT_TIMEOUT = 1500

export default function Hint({
  position = 'top',
  label,
  clickLabel,
  hideOnClick = false,
  showOnClick = false,
  children
}) {
  const [hint, setHint] = useState(label)
  const [clicked, setClicked] = useState(false)

  const className = clsx(
    styles.base,
    'hint--no-shadow hint--rounded hint--bounce',
    `hint--${position}`,
    clicked && 'hint--always',
    (showOnClick && !clicked) || (hideOnClick && clicked && styles.hide)
  )

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), CLICK_TIMEOUT)

    if (clickLabel) {
      setHint(clickLabel)
      setTimeout(() => setHint(label), CLICK_HINT_TIMEOUT)
    }
  }

  return (
    <span
      className={className}
      aria-label={hint}
      onClick={clickLabel || hideOnClick || showOnClick ? handleClick : undefined}
    >
      {children}
    </span>
  )
}
