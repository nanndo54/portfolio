'use client'

import { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

import Navbar from '#/components/Navbar'
import AllSections from '#/components/AllSections'
import Showcase from '#/components/Showcase'
import GoToTopButton from '#/components/GoToTopButton'

import useAppStore from '#/state/store'
import getCurrentSection from '#/state/getCurrentSection'
import languages from '#/constants/languages'

export default function Page() {
  const { isOnTop, locale, theme } = useAppStore()

  const messages = languages[locale]
  const currentSection = getCurrentSection()

  useEffect(() => {
    document.querySelector('html').lang = locale
  }, [locale])

  useEffect(() => {
    if (currentSection) history.replaceState(null, null, `#${currentSection}`)
  }, [currentSection])

  return (
    <main top={String(isOnTop)} dark={String(theme === 'dark')}>
      <IntlProvider locale={locale} messages={messages}>
        <Showcase />
        <Navbar />
        <AllSections />
        <GoToTopButton />
      </IntlProvider>
      <SpeedInsights />
      <Analytics mode='production' />
    </main>
  )
}
