'use client'

import useAppStore from '@/state/store'
import styles from '@/styles/OpenShowcase.module.css'
import clsx from 'clsx/lite'
import useDictionary from 'i18n/client'

export default function OpenShowcase({
  className,
  disable = false,
  children,
  images,
  index,
  onIndexChange,
  ...props
}) {
  const { openShowcase } = useAppStore()
  const dictionary = useDictionary()

  const { aria } = dictionary

  return disable ? (
    children
  ) : (
    <button
      className={clsx(className, styles.base)}
      type='button'
      title={aria.openShowcase}
      onClick={() => openShowcase({ images, index, onIndexChange })}
      {...props}
    >
      {children}
    </button>
  )
}
