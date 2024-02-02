'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { useEffect, useState } from 'react'

const initialState = {
  isOnTop: true,
  theme: undefined,
  currentSection: 'landing',
  showcase: {}
}

const store = create(
  persist(
    (set) => ({
      ...initialState,
      setOnTop: (isOnTop) =>
        set(() => {
          document.body.setAttribute('top', isOnTop)

          return { isOnTop }
        }),
      toggleTheme: (dark) =>
        set(() => {
          const theme = dark ? 'dark' : 'light'

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
      }),
      onRehydrateStorage: () => {
        return (state) => {
          if (state.theme == null && state.toggleTheme)
            state.toggleTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
      }
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
