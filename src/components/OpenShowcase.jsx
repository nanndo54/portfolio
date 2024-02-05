'use client'

import useAppStore from '@/state/store'
import styles from '@/styles/OpenShowcase.module.css'
import clsx from 'clsx/lite'

export default function OpenShowcase({
  className,
  disable = false,
  title,
  children,
  ...showcase
}) {
  const { openShowcase } = useAppStore()

  return disable ? (
    children
  ) : (
    <button
      className={clsx(className, styles.base)}
      type='button'
      title={title}
      onClick={() => openShowcase(showcase)}
    >
      {children}
    </button>
  )
}
