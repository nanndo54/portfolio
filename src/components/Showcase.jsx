import styles from '#/styles/Showcase.module.css'
import { useState } from 'react'

import useAppStore from '#/store'
import Icon from '#/components/Icon'
import IconButton from '#/components/IconButton'
import { CloseIcon, MinusIcon, PlusIcon, ZoomIcon } from '#/constants/icons'
import Text from '#/components/Text'

function Showcase() {
  const [zoom, setZoom] = useState(1)
  const contentWidth = zoom * 700

  const { showcase, closeShowcase } = useAppStore()
  const { open, src, element, alt } = showcase

  const handleWheel = (ev) => {
    const isZoomIn = ev.deltaY < 0
    handleChangeZoom(zoom + (isZoomIn ? 0.15 : -0.15))
  }

  const handleChangeZoom = (newZoom) => {
    newZoom = newZoom > zoom ? Math.min(newZoom, 1.3) : Math.max(newZoom, 0.7)
    setZoom(newZoom)
  }

  return (
    <div
      className={`${styles.base} ${open ? styles.open : ''}`}
      onClick={closeShowcase}
      onWheel={handleWheel}
    >
      <div
        className={styles.content}
        style={{ width: contentWidth }}
        onClick={(ev) => ev.stopPropagation()}
      >
        {src ? <img src={src} alt={alt} /> : element}
      </div>
      <div className={styles.overlay}>
        <IconButton
          icon={CloseIcon}
          className={styles.closeButton}
          title='Cerrar'
          noBorder
        />
        <div className={styles.zoom}>
          <Icon src={ZoomIcon} />
          <Text as='p'>{(zoom * 100).toFixed(0)}%</Text>
          <span className={styles.zoomButtons}>
            <IconButton
              icon={MinusIcon}
              onClick={(ev) => {
                ev.stopPropagation()
                handleChangeZoom(zoom - 0.15)
              }}
              title='Reducir'
            />
            <IconButton
              icon={PlusIcon}
              onClick={(ev) => {
                ev.stopPropagation()
                handleChangeZoom(zoom + 0.15)
              }}
              title='Agrandar'
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Showcase
