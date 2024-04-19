'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  theme: undefined,
  prefersDarkScheme: undefined,
  currentSection: undefined,
  showcase: {}
}

const useAppStore = create(
  persist(
    (set) => ({
      ...initialState,
      toggleTheme: (dark) => set(() => ({ theme: dark ? 'dark' : 'light' })),
      setPrefersDarkScheme: (prefersDarkScheme) => set(() => ({ prefersDarkScheme })),
      setCurrentSection: (currentSection) => set(() => ({ currentSection })),
      openShowcase: ({ open = true, index = 0, images = [], ...showcase }) => {
        document.body.classList.add('no-scroll')
        set(() => ({ showcase: { open, index, images, ...showcase } }))
      },
      closeShowcase: () => {
        document.body.classList.remove('no-scroll')
        set((state) => ({ showcase: { ...state.showcase, open: false } }))
      },
      setShowcase: (showcase) =>
        set((state) => ({ showcase: { ...state.showcase, ...showcase } }))
    }),
    {
      name: 'app-storage',
      partialize: ({ theme, prefersDarkScheme }) => ({
        theme,
        prefersDarkScheme
      }),
      onRehydrateStorage: () => (state) => {
        const prefersDarkScheme = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
        state.setPrefersDarkScheme(prefersDarkScheme)

        if (state.theme != null || !(state.theme === 'dark' && prefersDarkScheme)) return

        if (state.prefersDarkScheme !== prefersDarkScheme && prefersDarkScheme)
          state.toggleTheme(true)
        else if (prefersDarkScheme) state.toggleTheme(true)

        const currentSection = window.location.hash.slice(1)
        if (currentSection) state.setCurrentSection(currentSection)
      }
    }
  )
)

export default useAppStore
