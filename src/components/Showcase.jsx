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
  const { showcase, closeShowcase, setShowcase } = useAppStore()
  const ref = useRef()

  const [scale, setScale] = useState(initialScale)

  const { open, images, index, element, onIndexChange } = showcase
  const image = images?.[index]
  const singleImage = images?.length <= 1
  const src = image?.src
  const alt = image?.alt

  const handleClose = () => {
    closeShowcase()
    ref.current?.resetTransform()
  }

  const handleShowPreviousImage = () => {
    const newIndex = (index - 1 + images.length) % images.length
    setShowcase({ index: newIndex })
    ref.current?.resetTransform()
    onIndexChange?.(newIndex)
  }

  const handleShowNextImage = () => {
    const newIndex = (index + 1 + images.length) % images.length
    setShowcase({ index: newIndex })
    ref.current?.resetTransform()
    onIndexChange?.(newIndex)
  }

  const handleKeyDown = (ev) => {
    if (ev.key === 'Escape') handleClose()
    if (ev.key === 'ArrowLeft') handleShowPreviousImage()
    if (ev.key === 'ArrowRight') handleShowNextImage()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, index])

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
              onClick={handleShowPreviousImage}
              noBorder
              aria-label='Ver imagen anterior'
              tabIndex={open ? 0 : -1}
            >
              <Icon src={arrowIcon} contentColor />
            </IconButton>
            <TransformComponent wrapperClass={styles.canvas}>
              {src ? <Image src={src} alt={alt} noBorder noZoom /> : element}
            </TransformComponent>
            <IconButton
              className={styles.nextImage}
              onClick={handleShowNextImage}
              noBorder
              aria-label='Ver imagen siguiente'
              tabIndex={open ? 0 : -1}
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
