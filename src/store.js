import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { useEffect, useState } from 'react'

const initialState = {
  locale: 'en',
  theme: 'light'
}

const useStore = create(
  persist(
    (set) => ({
      ...initialState,
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      toggleLocale: () =>
        set((state) => ({ locale: state.locale === 'es' ? 'en' : 'es' }))
    }),
    {
      name: 'app-storage'
    }
  )
)

const useAppStore = (callback = (state) => state) => {
  const result = useStore(callback)
  const [data, setData] = useState(initialState)

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export default useAppStore
