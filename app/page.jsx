'use client'

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

import BlockQuote from '#/components/BlockQuote'
import Footer from '#/components/Footer'

import GoToTopButton from '#/components/GoToTopButton'
import Navbar from '#/components/Navbar'
import Showcase from '#/components/Showcase'
import languages from '#/constants/languages'
import sections from '#/constants/sections'
import useMouseTracker from '#/hooks/useMouseTracker'
import getCurrentSection from '#/state/getCurrentSection'
import useAppStore from '#/state/store'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { IntlProvider } from 'react-intl'

function Page() {
  const ref = useRef(null)
  const { isOnTop, locale, theme, setOnTop } = useAppStore()
  const messages = languages[locale]

  const currentSection = getCurrentSection()

  useMouseTracker(ref, (x, y) => {
    ref.current.style.setProperty('--x', x)
    ref.current.style.setProperty('--y', y)
  })

  useEffect(() => {
    document.querySelector('html').lang = locale
  }, [locale])

  useEffect(() => {
    if (currentSection) history.replaceState(null, null, `#${currentSection}`)
  }, [currentSection])

  const handlePageScroll = (ev) => {
    const newIsOnTop = ev.target.scrollTop < 40
    if (setOnTop && newIsOnTop !== isOnTop) setOnTop(newIsOnTop)
  }
  return (
    <IntlProvider locale={locale} messages={messages}>
      <main
        className={styles.base}
        onScroll={handlePageScroll}
        ref={ref}
        top={String(isOnTop)}
        dark={String(theme === 'dark')}
      >
        <Navbar />
        <Showcase />
        {sections.map(({ id, Component }) => (
          <Component key={id} id={id} />
        ))}
        <GoToTopButton />
        <BlockQuote author='Carl Sagan' quote='quote.carl-sagan1' />
        <Footer />
      </main>
      <SpeedInsights />
      <Analytics mode='production' />
    </IntlProvider>
  )
}

export default Page
