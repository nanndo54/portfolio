import { hind_guntur, merriweather, palanquin_dark } from 'app/fonts'
import './ui/global.css'

export const metadata = {
  title: 'Portfolio | nanndo54',
  description:
    "My personal portfolio. Hi! I'm Pablo Cabrera (nanndo54), FullStack Web Developer at your dispose",
  keywords: 'portfolio, frontend, javascript, developer',
  appleWebApp: {
    statusBarStyle: '#7c7edf',
    title: 'Portfolio | nanndo54'
  },
  metadataBase: 'https://nanndo54.dev/',
  openGraph: {
    title: 'Portfolio | nanndo54',
    description:
      "My personal portfolio. Hi! I'm Pablo Cabrera (nanndo54), FullStack Developer at your dispose",
    siteName: 'Portfolio | nanndo54',
    type: 'website',
    locale: 'en_US'
  }
}

export const viewport = {
  colorScheme: 'dark light',
  themeColor: '#7c7edf'
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
