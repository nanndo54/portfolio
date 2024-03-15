const themeColor = '#7c7edf'

export const viewport = {
  colorScheme: 'dark light',
  themeColor
}

export const metadata = {
  keywords: 'portfolio, portafolio, full-stack, frontend, javascript, developer',
  appleWebApp: {
    statusBarStyle: themeColor
  }
}

export default function RootLayout({ children }) {
  return children
}
