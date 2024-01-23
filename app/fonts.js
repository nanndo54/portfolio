import { Hind, Proza_Libre } from 'next/font/google'

export const palanquin_dark = Proza_Libre({
  display: 'swap',
  style: 'normal',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--title-font'
})

export const merriweather = Proza_Libre({
  display: 'swap',
  style: ['normal'],
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--subtitle-font'
})

export const hind_guntur = Hind({
  display: 'swap',
  style: 'normal',
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--body-font'
})
