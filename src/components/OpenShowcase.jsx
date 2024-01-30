'use client'

import useAppStore from '@/state/store'

export default function OpenShowcase({ disable = false, children, ...showcase }) {
  const { openShowcase } = useAppStore()

  return disable ? (
    children
  ) : (
    <button type='button' onClick={() => openShowcase(showcase)}>
      {children}
    </button>
  )
}
