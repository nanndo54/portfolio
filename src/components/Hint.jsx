'use client'

import styles from '@/styles/Hint.module.css'

import clsx from 'clsx/lite'
import { useState } from 'react'

const CLICK_TIMEOUT = 1200
const CLICK_HINT_TIMEOUT = 1500

export default function Hint({
  className,
  position = 'top',
  label,
  clickLabel,
  showAlways = false,
  hideAlways = false,
  showOnClick = false,
  hideOnClick = false,
  children
}) {
  const [hint, setHint] = useState(label)
  const [clicked, setClicked] = useState(false)

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
      className={clsx(
        styles.base,
        className,
        'no-select',
        'hint--no-shadow hint--rounded hint--bounce',
        `hint--${position}`,
        (clicked || showAlways) && 'hint--always',
        (label == null ||
          hideAlways ||
          (showOnClick && !clicked) ||
          (hideOnClick && clicked)) &&
          styles.hide
      )}
      aria-label={hint}
      onClick={clickLabel || hideOnClick || showOnClick ? handleClick : undefined}
    >
      {children}
    </span>
  )
}
