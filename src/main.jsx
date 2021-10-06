/* eslint-disable no-undef */
import '@/styles/index.css'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Loader from '@/components/Loader'

import store from '@/store'

const App = lazy(() =>
  Promise.all([
    import('@/components/App'),
    new Promise((resolve) => setTimeout(resolve, 900))
  ]).then(([moduleExports]) => moduleExports)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.querySelector('main')
)
