import styles from './page.module.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { getDictionary } from 'i18n/dictionaries'

import BlockQuote from '@/components/BlockQuote'
import Footer from '@/components/Footer'
import GoToTopButton from '@/components/GoToTopButton'
import Interactive from '@/components/Interactive'
import Navbar from '@/components/Navbar'
import Showcase from '@/components/Showcase'
import sections from '@/constants/sections'

export default async function Page({ params: { locale } }) {
  const dictionary = await getDictionary(locale)

  return (
    <Interactive>
      <main className={styles.base} top='true'>
        <Navbar locale={locale} dictionary={dictionary} />
        {sections.map(({ id, Tag }) => (
          <Tag key={id} id={id} dictionary={dictionary[id]} />
        ))}
        <BlockQuote dictionary={dictionary.quote} />
        <Footer />
        <Showcase locale={locale} />
        <GoToTopButton />

        <div class={styles.background}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <SpeedInsights debug={false} />
        <Analytics debug={false} />
      </main>
    </Interactive>
  )
}
