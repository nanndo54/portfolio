import { Inter, Poppins } from 'next/font/google'

export const titleFont = Poppins({
  display: 'swap',
  style: 'italic',
  weight: ['700'],
  subsets: ['latin'],
  variable: '--title-font'
})

export const subTitleFont = Poppins({
  display: 'swap',
  style: 'italic',
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--subtitle-font'
})

export const bodyFont = Inter({
  display: 'swap',
  style: 'normal',
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--body-font'
})
