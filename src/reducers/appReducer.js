import { initialApp } from '@/store'

const appReducer = (state = initialApp, action) => {
  switch (action.type) {
    case '@app/toggleTheme': {
      const theme = state.theme === 'ligth' ? 'dark' : 'ligth'
      const newState = { ...state, theme }
      localStorage.setItem('theme', theme)
      return newState
    }
    default:
      return state
  }
}

export default appReducer
