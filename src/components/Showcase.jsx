import styles from '#/styles/Showcase.module.css'
import { useState } from 'react'

import useAppStore from '#/store'
import Icon from '#/components/Icon'
import IconButton from '#/components/IconButton'

import zoomIcon from '#/assets/svg/zoom-icon.svg?react'
import closeIcon from '#/assets/svg/close-icon.svg?react'
import minusIcon from '#/assets/svg/minus-icon.svg?react'
import plusIcon from '#/assets/svg/plus-icon.svg?react'

function Showcase() {
  const [zoom, setZoom] = useState(1)
  const contentWidth = zoom * 800

  const { showcase, closeShowcase } = useAppStore()
  const { open, src, component: Component, alt } = showcase

  const handleWheel = (ev) => {
    const isZoomIn = ev.deltaY < 0
    handleChangeZoom(zoom + (isZoomIn ? 0.25 : -0.25))
  }

  const handleChangeZoom = (newZoom) => {
    newZoom = newZoom > zoom ? Math.min(newZoom, 1.5) : Math.max(newZoom, 0.5)
    setZoom(newZoom)
  }

  return (
    <div
      className={`${styles.base} ${open ? styles.open : ''}`}
      onClick={closeShowcase}
      onWheel={handleWheel}
    >
      {src ? (
        <img
          width={contentWidth}
          src={src}
          alt={alt}
          onClick={(ev) => ev.stopPropagation()}
        />
      ) : (
        Component && <Component />
      )}
      <IconButton icon={closeIcon} className={styles.closeButton} noBorder />
      <span className={styles.zoom}>
        <Icon src={zoomIcon} />
        <label>{zoom.toFixed(2) * 100}%</label>
        <span className={styles.zoomButtons}>
          <IconButton
            icon={minusIcon}
            onClick={(ev) => {
              ev.stopPropagation()
              handleChangeZoom(zoom - 0.25)
            }}
            alt='Reducir'
          />
          <IconButton
            icon={plusIcon}
            onClick={(ev) => {
              ev.stopPropagation()
              handleChangeZoom(zoom + 0.25)
            }}
            alt='Agrandar'
          />
        </span>
      </span>
    </div>
  )
}

export default Showcase
