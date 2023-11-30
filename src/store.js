import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { useEffect, useState } from 'react'

const initialState = {
  locale: 'en',
  theme: 'light',
  showcase: {}
}

const store = create(
  persist(
    (set) => ({
      ...initialState,
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      toggleLocale: () =>
        set((state) => ({ locale: state.locale === 'es' ? 'en' : 'es' })),
      openShowcase: ({ open = true, ...showcase }) =>
        set(() => ({ showcase: { open, ...showcase } })),
      closeShowcase: () => set(() => ({ showcase: { open: false } }))
    }),
    {
      name: 'app-storage',
      partialize: ({ locale, theme }) => ({
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
