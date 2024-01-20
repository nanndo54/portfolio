import styles from './page.module.css'

import BlockQuote from '#/components/BlockQuote'
import Footer from '#/components/Footer'

import GoToTopButton from '#/components/GoToTopButton'
import Navbar from '#/components/Navbar'
import Showcase from '#/components/Showcase'
import sections from '#/constants/sections'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default function Page() {
  // useMouseTracker(ref, (x, y) => {
  //   ref.current.style.setProperty('--x', x)
  //   ref.current.style.setProperty('--y', y)
  // })

  return (
    <main className={styles.base} top='true'>
      <Navbar />
      <Showcase />
      {sections.map(({ id, Component }) => (
        <Component key={id} id={id} />
      ))}
      <GoToTopButton />
      <BlockQuote author='Carl Sagan' quote='quote.carl-sagan1' />
      <Footer />
      <SpeedInsights debug={false} />
      <Analytics debug={false} />
    </main>
  )
}
