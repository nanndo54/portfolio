import { Lora, Mukta } from 'next/font/google'

export const titleFont = Lora({
  display: 'swap',
  style: 'italic',
  weight: ['600'],
  subsets: ['latin'],
  variable: '--title-font'
})

export const subTitleFont = Mukta({
  display: 'swap',
  style: 'normal',
  weight: ['700'],
  subsets: ['latin'],
  variable: '--subtitle-font'
})

export const bodyFont = Mukta({
  display: 'swap',
  style: 'normal',
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--body-font'
})
