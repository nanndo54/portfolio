'use client'

import styles from '@/styles/Showcase.module.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import Image from '@/components/Image'

import { arrowIcon, closeIcon, minusIcon, plusIcon, zoomIcon } from '@/constants/icons'
import useAppStore from '@/state/store'
import clsx from 'clsx'

const initialScale = 1
const defaultImageWidth = 2016
const defaultImageHeight = 1080

export default function Showcase({ locale }) {
  const { showcase, closeShowcase, setShowcase } = useAppStore()
  const ref = useRef()

  const [scale, setScale] = useState(initialScale)

  const { open, images, index, onIndexChange } = showcase
  const image = images?.[index] || {}
  const { alt = {}, src, width, height, icon } = image

  const singleImage = images?.length <= 1

  const handleClose = useCallback(() => {
    closeShowcase()
    ref.current?.resetTransform()
  }, [closeShowcase, ref])

  const handleShowPreviousImage = useCallback(() => {
    const newIndex = (index - 1 + images.length) % images.length
    setShowcase({ index: newIndex })
    ref.current?.resetTransform()
    onIndexChange?.(newIndex)
  }, [index, images, onIndexChange, setShowcase])

  const handleShowNextImage = useCallback(() => {
    const newIndex = (index + 1 + images.length) % images.length
    setShowcase({ index: newIndex })
    ref.current?.resetTransform()
    onIndexChange?.(newIndex)
  }, [index, images, onIndexChange, setShowcase])

  useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.key === 'Escape') handleClose()
      if (ev.key === 'ArrowLeft') handleShowPreviousImage()
      if (ev.key === 'ArrowRight') handleShowNextImage()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, index, handleClose, handleShowPreviousImage, handleShowNextImage])

  return (
    <div
      className={clsx(
        styles.base,
        open && styles.open,
        singleImage && styles.singleImage
      )}
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
            {!singleImage && (
              <span className={styles.imageIndex}>
                {index + 1}/{images?.length}
              </span>
            )}
            <p>{alt[locale]}</p>
            <IconButton
              icon={closeIcon}
              iconProps={{ lightColor: true }}
              className={styles.closeButton}
              aria-label='Cerrar'
              noBorder
            />
          </div>
          <div className={styles.content} onClick={(ev) => ev.stopPropagation()}>
            <IconButton
              icon={arrowIcon}
              iconProps={{ lightColor: true }}
              className={styles.previousImage}
              onClick={handleShowPreviousImage}
              noBorder
              aria-label='Ver imagen anterior'
              tabIndex={open ? 0 : -1}
            />
            <TransformComponent wrapperClass={clsx(styles.canvas, icon && styles.icon)}>
              {image.src &&
                (icon ? (
                  <Icon src={src} alt={alt} aria-hidden={!open} />
                ) : (
                  <Image
                    src={src}
                    alt={alt}
                    width={defaultImageWidth}
                    height={(height * defaultImageWidth) / width || defaultImageHeight}
                    noBorder
                    noZoom
                    aria-hidden={!open}
                  />
                ))}
            </TransformComponent>
            <IconButton
              icon={arrowIcon}
              iconProps={{ lightColor: true }}
              className={styles.nextImage}
              onClick={handleShowNextImage}
              noBorder
              aria-label='Ver imagen siguiente'
              tabIndex={open ? 0 : -1}
            />
          </div>
          <div className={styles.footer} onClick={(ev) => ev.stopPropagation()}>
            <Icon src={zoomIcon} lightColor />
            <p>{(scale * 100).toFixed(0)}%</p>
            <span className={styles.buttons}>
              <IconButton
                icon={minusIcon}
                iconProps={{ lightColor: true }}
                onClick={() => ref.current?.zoomOut(0.2)}
                aria-label='Reducir'
              />
              <IconButton
                icon={plusIcon}
                iconProps={{ lightColor: true }}
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
