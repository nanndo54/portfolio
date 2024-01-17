import styles from '#/styles/AllSections.module.css'
import { useRef } from 'react'

import Footer from '#/components/Footer'
import BlockQuote from '#/components/BlockQuote'

import sections from '#/constants/sections'
import useAppStore from '#/state/store'
import useMouseTracker from '#/hooks/useMouseTracker'

function AllSections() {
  const ref = useRef(null)
  const { isOnTop, setOnTop } = useAppStore()

  useMouseTracker(ref, (x, y) => {
    ref.current.style.setProperty('--x', x)
    ref.current.style.setProperty('--y', y)
  })

  const handlePageScroll = (ev) => {
    const newIsOnTop = ev.target.scrollTop < 40
    if (setOnTop && newIsOnTop !== isOnTop) setOnTop(newIsOnTop)
  }

  return (
    <div className={styles.base} onScroll={handlePageScroll} ref={ref}>
      {sections.map(({ id, Component }) => (
        <Component key={id} id={id} />
      ))}
      <BlockQuote author='Carl Sagan' quote='quote.carl-sagan1' />
      <Footer />
    </div>
  )
}

export default AllSections