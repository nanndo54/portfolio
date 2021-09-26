import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from '@/reducers/appReducer'
import modalReducer from '@/reducers/modalReducer'

import defaultImage from '@img/default-technology-icon.png'

const initialApp = {
  theme: localStorage.getItem('theme') || 'ligth'
}

const initialModal = {
  show: false,
  name: 'NoName',
  color: '#FFF',
  image: defaultImage,
  descriptiion: 'NoDescription'
}

const initialState = { app: initialApp, modal: initialModal }

const reducer = combineReducers({
  app: appReducer,
  modal: modalReducer
})

const store = createStore(reducer, initialState, composeWithDevTools())

export { initialApp, initialModal }

export default store
