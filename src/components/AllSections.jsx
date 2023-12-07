import styles from '#/styles/AllSections.module.css'
import { useEffect, useState } from 'react'

import Footer from '#/components/Footer'
import BlockQuote from '#/components/BlockQuote'

import sections from '#/constants/sections'
import useAppStore from '#/store'

function AllSections() {
  const { sectionsIntersection, isOnTop, setOnTop } = useAppStore()
  const [loaded, setLoaded] = useState(false)

  const currentSection = isOnTop
    ? 'welcome'
    : sectionsIntersection.find(({ intersected }) => intersected)?.id

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    history.replaceState(null, null, `#${currentSection}`)
  }, [currentSection])

  const handlePageScroll = (ev) => {
    const newIsOnTop = ev.target.scrollTop < 50
    if (setOnTop && newIsOnTop !== isOnTop) setOnTop(newIsOnTop)
  }

  return (
    <div
      className={`${styles.base} ${loaded ? styles.loaded : ''}`}
      id='base'
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
