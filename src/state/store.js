'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  theme: undefined,
  currentSection: undefined,
  showcase: {}
}

const useAppStore = create(
  persist(
    (set) => ({
      ...initialState,
      toggleTheme: (dark) => set(() => ({ theme: dark ? 'dark' : 'light' })),
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
      onRehydrateStorage: () => (state) => {
        if (state.theme != null) return
        state.toggleTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
      }
    }
  )
)

export default useAppStore
