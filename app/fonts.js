import { Lora, Mukta, Proza_Libre } from 'next/font/google'

export const titleFont = Lora({
  display: 'swap',
  style: 'italic',
  weight: ['600'],
  subsets: ['latin'],
  variable: '--title-font'
})

export const subTitleFont = Proza_Libre({
  display: 'swap',
  style: 'normal',
  weight: ['600', '500'],
  subsets: ['latin'],
  variable: '--subtitle-font'
})

export const bodyFont = Mukta({
  display: 'swap',
  style: 'normal',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--body-font'
})
