import '@/styles/index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '@/store'
import App from '@/components/App'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      {/* <Suspense fallback={<Loader />}> */}
      <App />
      {/* </Suspense> */}
    </Provider>
  </StrictMode>,
  document.querySelector('main')
)
