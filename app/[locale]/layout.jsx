import Theme from 'app/Theme'
import './global.css'

import { bodyFont, subTitleFont, titleFont } from 'app/fonts'
import clsx from 'clsx/lite'
import { i18n } from 'i18n/config'
import getDictionary from 'i18n/server'

export async function generateMetadata({ params: { locale } }) {
  const { description } = await getDictionary()

  return {
    description,
    metadataBase: `https://nanndo54.dev/${locale}`,
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

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} translate='no'>
      <Theme>
        <body
          className={clsx(titleFont.variable, subTitleFont.variable, bodyFont.variable)}
          top='true'
        >
          {children}
        </body>
      </Theme>
    </html>
  )
}
