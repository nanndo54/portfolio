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

function Page() {
  const { isOnTop, locale, theme } = useAppStore()

  const messages = languages[locale]
  const currentSection = getCurrentSection()

  useEffect(() => {
    document.querySelector('html').lang = locale
  }, [locale])

  // useEffect(() => {
  //   const bodyElement = document.querySelector('body')
  //   bodyElement.toggleAttribute('dark', theme === 'dark')
  //   bodyElement.toggleAttribute('top', isOnTop)
  // }, [theme, isOnTop])

  useEffect(() => {
    if (currentSection) history.replaceState(null, null, `#${currentSection}`)
  }, [currentSection])

  return (
    <main top={isOnTop} dark={theme === 'dark'}>
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

export default Page
