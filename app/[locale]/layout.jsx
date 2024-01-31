import { bodyFont, subTitleFont, titleFont } from 'app/fonts'
import clsx from 'clsx/lite'
import { i18n } from 'i18n/config'
import './global.css'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default function Layout({ children, params: { locale } }) {
  return (
    <html lang={locale} translate='no'>
      <body
        className={clsx(titleFont.variable, subTitleFont.variable, bodyFont.variable)}
      >
        {children}
      </body>
    </html>
  )
}