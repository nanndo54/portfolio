import styles from '#/styles/AllSections.module.css'
import { useEffect } from 'react'

import Footer from '#/components/Footer'
import BlockQuote from '#/components/BlockQuote'

import sections from '#/constants/sections'
import useAppStore from '#/store'

function AllSections() {
  const { currentSection, isOnTop, setOnTop } = useAppStore()

  useEffect(() => {
    history.replaceState(null, null, `#${currentSection}`)
  }, [currentSection])

  const handlePageScroll = (ev) => {
    const newIsOnTop = ev.target.scrollTop === 0
    if (newIsOnTop !== isOnTop) setOnTop(newIsOnTop)
  }

  return (
    <div
      className={`${styles.base} ${isOnTop ? '' : styles.show}`}
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
