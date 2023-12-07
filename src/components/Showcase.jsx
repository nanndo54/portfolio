import styles from '#/styles/Showcase.module.css'
import { useEffect, useState } from 'react'

import useAppStore from '#/state/store'
import Icon from '#/components/Icon'
import IconButton from '#/components/IconButton'
import { CloseIcon, MinusIcon, PlusIcon, ZoomIcon } from '#/constants/icons'
import Text from '#/components/Text'

function Showcase() {
  const [zoom, setZoom] = useState(1)
  const { showcase, closeShowcase } = useAppStore()
  const { open, src, element, alt } = showcase

  useEffect(() => {
    if (open) return
    setZoom(1)
  }, [open])

  const handleWheel = (ev) => {
    const isZoomIn = ev.deltaY < 0
    handleChangeZoom(zoom + (isZoomIn ? 0.15 : -0.15))
  }

  const handleChangeZoom = (newZoom) => {
    newZoom = newZoom > zoom ? Math.min(newZoom, 1.45) : Math.max(newZoom, 0.55)
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
        style={{ transform: `scale(${open ? zoom : 0.5})` }}
        onClick={(ev) => ev.stopPropagation()}
      >
        {src ? <img src={src} alt={alt} /> : element}
      </div>
      <div className={styles.overlay}>
        <IconButton
          icon={CloseIcon}
          className={styles.closeButton}
          aria-label='Cerrar'
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
              aria-label='Reducir'
            />
            <IconButton
              icon={PlusIcon}
              onClick={(ev) => {
                ev.stopPropagation()
                handleChangeZoom(zoom + 0.15)
              }}
              aria-label='Agrandar'
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Showcase
