import { hind_guntur, merriweather, palanquin_dark } from 'app/fonts'
import './ui/global.css'

export const metadata = {
  title: 'Portfolio | nanndo54',
  description:
    "My personal portfolio. Hi! I'm Pablo Cabrera (nanndo54), FullStack Web Developer at your dispose",
  keywords: 'portfolio, frontend, javascript, developer',
  'og:title': 'Pablo Cabrera | Portfolio',
  'og:description':
    "My personal portfolio. Hi! I'm Pablo Cabrera (nanndo54), FullStack Developer at your dispose",
  'og:url': 'https://nanndo54.dev',
  'og:type': 'website',
  'color-scheme': 'dark light',
  'theme-color': '#7c7edf',
  'apple-mobile-web-app-status-bar-style': '#7c7edf'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' translate='no'>
      <body
        className={`${palanquin_dark.variable} ${merriweather.variable} ${hind_guntur.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
