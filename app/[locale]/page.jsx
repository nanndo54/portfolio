import styles from './page.module.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { getDictionary } from 'i18n/get-dictionary'

import Footer from '@/components/Footer'
import GoToTopButton from '@/components/GoToTopButton'
import Interactive from '@/components/Interactive'
import Navbar from '@/components/Navbar'
import sections from '@/constants/sections'
import dynamic from 'next/dynamic'

const Showcase = dynamic(() => import('@/components/Showcase'), {
  ssr: false
})

export default async function Page({ params: { locale } }) {
  const dictionary = await getDictionary(locale)

  return (
    <Interactive dictionary={dictionary}>
      <main className={styles.base} top='true'>
        <Navbar dictionary={dictionary} />
        {sections.map(({ id, Tag }) => (
          <Tag key={id} id={id} dictionary={dictionary} />
        ))}
        <Footer />
        <Showcase />
        <GoToTopButton />

        <SpeedInsights debug={false} />
        <Analytics debug={false} />
      </main>
    </Interactive>
  )
}
