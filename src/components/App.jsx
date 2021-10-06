import styles from '@/styles/App.module.css'
import React from 'react'
import { IntlProvider } from 'react-intl'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import AllSections from '@/components/AllSections'
import useLanguage from '@/hooks/useLanguage'

function App() {
  const { locale, language } = useLanguage()

  return (
    <IntlProvider locale={locale} messages={language}>
      <div className={styles.base} id='base'>
        <Modal />
        <Navbar />
        <AllSections />
        <Footer />
      </div>
    </IntlProvider>
  )
}

export default App
