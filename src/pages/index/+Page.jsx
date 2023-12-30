import { IntlProvider } from 'react-intl'
import { useEffect } from 'react'

import Navbar from '#/components/Navbar'
import AllSections from '#/components/AllSections'
import Showcase from '#/components/Showcase'
import GoToTopButton from '#/components/GoToTopButton'

import useAppStore from '#/state/store'
import languages from '#/constants/languages'
import getCurrentSection from '#/state/getCurrentSection'

function Page() {
  const { isOnTop, locale, theme } = useAppStore()

  const messages = languages[locale]
  const currentSection = getCurrentSection()

  useEffect(() => {
    document.querySelector('html').lang = locale
  }, [locale])

  useEffect(() => {
    const bodyElement = document.querySelector('body')
    bodyElement.toggleAttribute('dark', theme === 'dark')
    bodyElement.toggleAttribute('top', isOnTop)
  }, [theme, isOnTop])

  useEffect(() => {
    if (currentSection) history.replaceState(null, null, `#${currentSection}`)
  }, [currentSection])

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Showcase />
      <Navbar />
      <AllSections />
      <GoToTopButton />
    </IntlProvider>
  )
}

export default Page
