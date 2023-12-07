import styles from '#/styles/App.module.css'
import { IntlProvider } from 'react-intl'
import { useEffect } from 'react'

import Navbar from '#/components/Navbar'
import AllSections from '#/components/AllSections'
import Showcase from '#/components/Showcase'
import GoToTopButton from '#/components/GoToTopButton'

import useAppStore from '#/state/store'
import languages from '#/constants/languages'

function App() {
  const { locale } = useAppStore()
  const messages = languages[locale]

  useEffect(() => {
    document.querySelector('html').lang = locale
  }, [locale])

  return (
    <div className={styles.base}>
      <IntlProvider locale={locale} messages={messages}>
        <Showcase />
        <Navbar />
        <AllSections />
        <GoToTopButton />
      </IntlProvider>
    </div>
  )
}

export default App
