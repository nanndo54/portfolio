import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import appReducer from '@/reducers/appReducer'
import modalReducer from '@/reducers/modalReducer'

import { languageIsSupported } from '@/constants/languages'

const initialLocale =
  languageIsSupported(localStorage.getItem('locale')) ||
  languageIsSupported(navigator.language) ||
  'en'

const theme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

const initialTheme =
  (['light', 'dark'].includes(localStorage.getItem('theme')) &&
    localStorage.getItem('theme')) ||
  theme

const initialApp = {
  activeProject: '',
  locale: initialLocale,
  theme: initialTheme
}

const initialModal = {
  name: 'HTML',
  show: false
}

const initialState = { app: initialApp, modal: initialModal }

const reducer = combineReducers({
  app: appReducer,
  modal: modalReducer
})

const store = createStore(
  reducer,
  initialState,
  import.meta.env.MODE === 'development' ? composeWithDevTools() : undefined
)

export default store

export { initialApp, initialModal }
