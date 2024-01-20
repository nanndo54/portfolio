'use client'

import styles from './page.module.css'

import BlockQuote from '#/components/BlockQuote'
import Footer from '#/components/Footer'

import GoToTopButton from '#/components/GoToTopButton'
import Navbar from '#/components/Navbar'
import Showcase from '#/components/Showcase'
import languages from '#/constants/languages'
import sections from '#/constants/sections'
import useAppStore from '#/state/store'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { IntlProvider } from 'react-intl'

function Page() {
  const { isOnTop, locale, theme } = useAppStore()
  const messages = languages[locale]

  // useMouseTracker(ref, (x, y) => {
  //   ref.current.style.setProperty('--x', x)
  //   ref.current.style.setProperty('--y', y)
  // })

  return (
    <main className={styles.base} top={String(isOnTop)} dark={String(theme === 'dark')}>
      <IntlProvider locale={locale} messages={messages}>
        <Navbar />
        <Showcase />
        {sections.map(({ id, Component }) => (
          <Component key={id} id={id} />
        ))}
        <GoToTopButton />
        <BlockQuote author='Carl Sagan' quote='quote.carl-sagan1' />
        <Footer />
      </IntlProvider>
      <SpeedInsights debug={false} />
      <Analytics mode='production' debug={false} />
    </main>
  )
}

export default Page
