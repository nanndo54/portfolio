import './global.css'

import { bodyFont, subTitleFont, titleFont } from 'app/fonts'
import clsx from 'clsx/lite'
import { i18n } from 'i18n/config'
import { getDictionary } from 'i18n/get-dictionary'

export async function generateMetadata({ params: { locale } }) {
  const dictionary = await getDictionary(locale)
  const { description } = dictionary

  return {
    description,
    metadataBase: `https://nanndo54.dev/${locale}`,
    openGraph: {
      siteName: 'Portfolio | nanndo54',
      type: 'website',
      locale
    }
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} translate='no'>
      <body
        className={clsx(titleFont.variable, subTitleFont.variable, bodyFont.variable)}
        top='true'
      >
        {children}
      </body>
    </html>
  )
}
