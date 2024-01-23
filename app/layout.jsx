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
  return children
}
