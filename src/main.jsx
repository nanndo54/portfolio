import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { LanguageContextProvider } from './context/LanguageContext'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
