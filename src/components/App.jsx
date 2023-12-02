import styles from '#/styles/App.module.css'
import { useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'

import Navbar from '#/components/Navbar'
import AllSections from '#/components/AllSections'
import Showcase from '#/components/Showcase'

import useAppStore from '#/store'
import languages from '#/constants/languages'

function App() {
  const { locale } = useAppStore()
  const messages = languages[locale]

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`${styles.base} ${loaded ? styles.loaded : ''}`}>
      <IntlProvider locale={locale} messages={messages}>
        <Showcase />
        <Navbar />
        <AllSections />
      </IntlProvider>
    </div>
  )
}

export default App
