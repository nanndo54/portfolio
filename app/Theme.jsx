'use client'

import { useLayoutEffect } from 'react'

export default function Theme({ children }) {
  useLayoutEffect(() => {
    document.body.setAttribute(
      'dark',
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }, [])

  return children
}
