import { hind_guntur, merriweather, palanquin_dark } from 'app/fonts'
import './ui/global.css'

export const metadata = {
  title: 'Portfolio | nanndo54',
  description:
    "My personal portfolio. Hi! I'm Pablo Cabrera (nanndo54), FullStack Web Developer at your dispose",
  keywords: 'portfolio, frontend, javascript, developer',
  colorScheme: 'dark light',
  themeColor: '#7c7edf',
  appleWebApp: {
    statusBarStyle: '#7c7edf',
    title: 'Portfolio | nanndo54'
  },
  openGraph: {
    title: 'Portfolio | nanndo54',
    description:
      "My personal portfolio. Hi! I'm Pablo Cabrera (nanndo54), FullStack Developer at your dispose",
    url: 'https://nanndo54.dev',
    siteName: 'Portfolio | nanndo54',
    type: 'website',
    locale: 'en_US'
  }
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
