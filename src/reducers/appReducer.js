import { initialApp } from '@/store'

const appReducer = (state = initialApp, action) => {
  switch (action.type) {
    case '@app/toggleTheme': {
      const theme = state.theme === 'light' ? 'dark' : 'light'
      const newState = { ...state, theme }
      localStorage.setItem('theme', theme)
      return newState
    }
    case '@app/toggleLanguage': {
      const locale = state.locale === 'es' ? 'en' : 'es'
      const newState = { ...state, locale }
      localStorage.setItem('locale', locale)
      return newState
    }
    case '@app/expandProject': {
      const newState = { ...state, activeProject: action.payload }
      return newState
    }
    default:
      return state
  }
}

export default appReducer
