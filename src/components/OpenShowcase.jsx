'use client'

import useAppStore from '@/state/store'
import styles from '@/styles/OpenShowcase.module.css'

export default function OpenShowcase({ disable = false, title, children, ...showcase }) {
  const { openShowcase } = useAppStore()

  return disable ? (
    children
  ) : (
    <button
      className={styles.base}
      type='button'
      title={title}
      onClick={() => openShowcase(showcase)}
    >
      {children}
    </button>
  )
}
