import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { useEffect, useState } from 'react'

const initialState = {
  isOnTop: true,
  currentSection: 'welcome',
  locale: 'en',
  theme: 'light',
  showcase: {}
}

const store = create(
  persist(
    (set) => ({
      ...initialState,
      setOnTop: (isOnTop) => set(() => ({ isOnTop })),
      setCurrentSection: (currentSection) => set(() => ({ currentSection })),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      toggleLocale: () =>
        set((state) => ({ locale: state.locale === 'es' ? 'en' : 'es' })),
      openShowcase: ({ open = true, ...showcase }) =>
        set(() => ({ showcase: { open, ...showcase } })),
      closeShowcase: () =>
        set((state) => ({ showcase: { ...state.showcase, open: false } }))
      // closeShowcase: () => set(() => ({ showcase: { open: false } }))
    }),
    {
      name: 'app-storage',
      partialize: ({ currentSection, locale, theme }) => ({
        currentSection,
        locale,
        theme
      })
    }
  )
)

const useAppStore = (callback = (state) => state) => {
  const newState = store(callback)
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState(newState)
  }, [newState])

  return state
}

const { getState } = store

export { getState }

export default useAppStore
