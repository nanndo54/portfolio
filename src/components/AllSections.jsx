import styles from '#/styles/AllSections.module.css'
import { useEffect, useState } from 'react'

import Footer from '#/components/Footer'
import BlockQuote from '#/components/BlockQuote'

import sections from '#/constants/sections'
import useAppStore from '#/state/store'

function AllSections() {
  const { isOnTop, setOnTop } = useAppStore()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const handlePageScroll = (ev) => {
    const newIsOnTop = ev.target.scrollTop < 40
    if (setOnTop && newIsOnTop !== isOnTop) setOnTop(newIsOnTop)
  }

  return (
    <div
      className={`${styles.base} ${isLoading ? styles.isLoading : ''}`}
      onScroll={handlePageScroll}
    >
      {sections.map(({ id, Component }) => (
        <Component key={id} id={id} />
      ))}
      <BlockQuote author='Carl Sagan' quote='quote.carl-sagan1' />
      <Footer />
    </div>
  )
}

export default AllSections
