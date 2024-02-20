import 'node_modules/hint.css/hint.min.css'
import './global.css'

import { bodyFont, subTitleFont, titleFont } from 'app/fonts'
import clsx from 'clsx/lite'
import { locales } from 'i18n/config'
import getDictionary, { getStaticParams } from 'i18n/server'
import { setStaticParamsLocale } from 'next-international/server'

export async function generateMetadata({ params: { locale } }) {
  const { description } = await getDictionary()

  const languages = {}
  for (const locale of locales) {
    languages[locale] = `https://nanndo54.dev/${locale}`
  }

  return {
    description,
    metadataBase: `https://nanndo54.dev/${locale}`,
    alternates: {
      languages
    },
    openGraph: {
      siteName: 'Portfolio | nanndo54',
      type: 'website',
      locale,
      images: {
        url: `/splash/${locale}.jpg`,
        type: 'image/jpeg',
        width: 1200,
        height: 628,
        alt: 'nanndo54.dev'
      }
    }
  }
}

export function generateStaticParams() {
  return getStaticParams()
}

export default async function LocaleLayout({ children, params: { locale } }) {
  setStaticParamsLocale(locale)

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
