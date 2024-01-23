import '#/global.css'
import { hind_guntur, merriweather, palanquin_dark } from 'app/fonts'
import { i18n } from 'i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default function Layout({ children, params: { locale } }) {
  return (
    <html lang={locale} translate='no'>
      <body
        className={`${palanquin_dark.variable} ${merriweather.variable} ${hind_guntur.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
