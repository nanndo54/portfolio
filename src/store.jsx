import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from '@/reducers/appReducer'
import modalReducer from '@/reducers/modalReducer'

import { languageCodes } from '@/constants/languages'

const initialLocale =
  (languageCodes.includes(localStorage.getItem('locale')) &&
    localStorage.getItem('locale')) ||
  languageCodes.find((code) => navigator.language.startsWith(code)) ||
  'en'

const initialTheme =
  (['light', 'dark'].includes(localStorage.getItem('theme')) &&
    localStorage.getItem('theme')) ||
  'light'

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
