import { Kanit, Poppins } from 'next/font/google'

export const titleFont = Poppins({
  display: 'swap',
  style: 'italic',
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--title-font'
})

export const subTitleFont = Poppins({
  display: 'swap',
  style: 'normal',
  weight: ['600'],
  subsets: ['latin'],
  variable: '--subtitle-font'
})

export const bodyFont = Kanit({
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '500'],
  subsets: ['latin'],
  variable: '--body-font'
})
