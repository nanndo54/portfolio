import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from '@/reducers/appReducer'
import modalReducer from '@/reducers/modalReducer'

const initialApp = {
  theme: localStorage.getItem('theme') || 'light',
  activeProject: ''
}

const initialModal = {
  show: false,
  name: 'HTML'
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
