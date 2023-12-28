import styles from '#/styles/Showcase.module.css'
import { useEffect, useRef, useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import Icon from '#/components/Icon'
import IconButton from '#/components/IconButton'
import Text from '#/components/Text'
import Image from '#/components/Image'

import useAppStore from '#/state/store'
import { arrowIcon, closeIcon, minusIcon, plusIcon, zoomIcon } from '#/constants/icons'

const initialScale = 1

function Showcase() {
  const ref = useRef()

  const [scale, setScale] = useState(initialScale)
  const { showcase, closeShowcase, setShowcase } = useAppStore()

  const { open, images, index, element } = showcase
  const image = images?.[index]
  const singleImage = images?.length <= 1
  const src = image?.src
  const alt = image?.alt

  const handleClose = () => {
    closeShowcase()
    if (ref.current) {
      ref.current.resetTransform()
      ref.current.resetTransform()
    }
  }

  const handleEscape = (ev) => {
    if (ev.key === 'Escape') handleClose()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [open])

  return (
    <div
      className={`${styles.base} ${open ? styles.open : ''} ${
        singleImage ? styles.singleImage : ''
      }`}
    >
      <TransformWrapper
        initialScale={initialScale}
        maxScale={2.5}
        minScale={0.6}
        onTransformed={(_, { scale }) => setScale(scale)}
        centerOnInit
        centerZoomedOut
        ref={ref}
      >
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.header}>
            {alt && <Text as='p'>{alt}</Text>}
            <IconButton
              icon={closeIcon}
              className={styles.closeButton}
              aria-label='Cerrar'
              noBorder
            />
          </div>
          <div className={styles.content} onClick={(ev) => ev.stopPropagation()}>
            <IconButton
              className={styles.previousImage}
              onClick={() =>
                setShowcase({ index: (index - 1 + images.length) % images.length })
              }
              noBorder
              aria-label='Ver imagen anterior'
            >
              <Icon src={arrowIcon} contentColor />
            </IconButton>
            <TransformComponent wrapperClass={styles.canvas}>
              {src ? <Image src={src} alt={alt} noBorder noZoom /> : element}
            </TransformComponent>
            <IconButton
              className={styles.nextImage}
              onClick={() =>
                setShowcase({ index: (index + 1 + images.length) % images.length })
              }
              noBorder
              aria-label='Ver imagen siguiente'
            >
              <Icon src={arrowIcon} contentColor />
            </IconButton>
          </div>
          <div className={styles.footer} onClick={(ev) => ev.stopPropagation()}>
            <Icon src={zoomIcon} />
            <Text as='p'>{(scale * 100).toFixed(0)}%</Text>
            <span className={styles.buttons}>
              <IconButton
                icon={minusIcon}
                onClick={() => ref.current?.zoomOut(0.2)}
                aria-label='Reducir'
              />
              <IconButton
                icon={plusIcon}
                onClick={() => ref.current?.zoomIn(0.2)}
                aria-label='Agrandar'
              />
            </span>
          </div>
        </div>
      </TransformWrapper>
    </div>
  )
}

export default Showcase
