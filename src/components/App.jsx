import styles from '@/styles/App.module.css'
import { IntlProvider } from 'react-intl'

import Navbar from '@/components/Navbar'
import Modal from '@/components/Modal'
import AllSections from '@/components/AllSections'
import useLanguage from '@/hooks/useLanguage'

function App() {
  const { locale, language } = useLanguage()

  return (
    <div className={styles.base}>
      <IntlProvider locale={locale} messages={language}>
        <Modal />
        <Navbar />
        <AllSections />
      </IntlProvider>
    </div>
  )
}

export default App
