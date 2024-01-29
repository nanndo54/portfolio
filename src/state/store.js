'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { useEffect, useState } from 'react'

const initialState = {
  isOnTop: true,
  theme: 'light',
  currentSection: 'landing',
  showcase: {}
}

const store = create(
  persist(
    (set) => ({
      ...initialState,
      setOnTop: (isOnTop) =>
        set(() => {
          const mainElement = document.querySelector('main')
          mainElement.setAttribute('top', isOnTop)

          return { isOnTop }
        }),
      toggleTheme: () =>
        set((state) => {
          const theme = state.theme === 'light' ? 'dark' : 'light'

          return { theme }
        }),
      setCurrentSection: (currentSection) => set(() => ({ currentSection })),
      openShowcase: ({ open = true, index = 0, images = [], ...showcase }) =>
        set(() => ({ showcase: { open, index, images, ...showcase } })),
      closeShowcase: () =>
        set((state) => ({ showcase: { ...state.showcase, open: false } })),
      setShowcase: (showcase) =>
        set((state) => ({ showcase: { ...state.showcase, ...showcase } }))
    }),
    {
      name: 'app-storage',
      partialize: ({ theme }) => ({
        theme
      })
    }
  )
)

export default function useAppStore(callback = (state) => state) {
  const newState = store(callback)
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState(newState)
  }, [newState])

  return state
}
