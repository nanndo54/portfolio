'use client'

import useAppStore from '@/state/store'

export default function OpenShowcase({ children, ...showcase }) {
  const { openShowcase } = useAppStore()

  return (
    <button type='button' onClick={() => openShowcase(showcase)}>
      {children}
    </button>
  )
}
