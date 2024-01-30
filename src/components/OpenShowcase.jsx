'use client'

import useAppStore from '@/state/store'

export default function OpenShowcase({ className = '', children, ...showcase }) {
  const { openShowcase } = useAppStore()

  return (
    <button type='button' className={className} onClick={() => openShowcase(showcase)}>
      {children}
    </button>
  )
}
