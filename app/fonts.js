import { Palanquin_Dark, Merriweather, Hind_Guntur } from 'next/font/google'

export const palanquin_dark = Palanquin_Dark({
  display: 'swap',
  style: 'normal',
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--title-font'
})

export const merriweather = Merriweather({
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['700'],
  subsets: ['latin'],
  variable: '--subtitle-font'
})

export const hind_guntur = Hind_Guntur({
  display: 'swap',
  style: 'normal',
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--body-font'
})
