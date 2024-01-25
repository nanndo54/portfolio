import { Hind, Proza_Libre } from 'next/font/google'

export const titleFont = Proza_Libre({
  display: 'swap',
  style: 'normal',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--title-font'
})

export const subTitleFont = Proza_Libre({
  display: 'swap',
  style: ['normal'],
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--subtitle-font'
})

export const bodyFont = Hind({
  display: 'swap',
  style: 'normal',
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--body-font'
})
