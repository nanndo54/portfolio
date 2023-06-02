import styles from '#/styles/App.module.css'
import { IntlProvider } from 'react-intl'

import Navbar from '#/components/Navbar'
import AllSections from '#/components/AllSections'
import useAppStore from '#/store'
import languages from '#/constants/languages'

function App() {
  const { locale } = useAppStore()
  const language = languages[locale]

  return (
    <div className={styles.base}>
      <IntlProvider locale={locale} messages={language}>
        <Navbar />
        <AllSections />
      </IntlProvider>
    </div>
  )
}

export default App
