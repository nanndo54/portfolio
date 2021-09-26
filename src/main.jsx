import './styles/index.css'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

const App = lazy(() => import('@/components/App'))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={'cargando'}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
