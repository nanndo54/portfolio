'use client'

import styles from '@/styles/Showcase.module.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import Image from '@/components/Image'

import { arrowIcon, closeIcon, minusIcon, plusIcon, zoomIcon } from '@/constants/icons'
import useCarrousel from '@/hooks/useCarrousel'
import useAppStore from '@/state/store'
import clsx from 'clsx/lite'

const initialScale = 1
const defaultImageWidth = 2016
const defaultImageHeight = 1080

export default function Showcase() {
  const { showcase, closeShowcase } = useAppStore()
  const { aria } = useAppStore((state) => state.dictionary)
  const ref = useRef()

  const [scale, setScale] = useState(initialScale)
  const { open, images, index: initialIndex, onIndexChange } = showcase

  const { image, imageIndex, singleImage, handleImageChange } = useCarrousel({
    initialIndex,
    images,
    onImageChange: (newImageIndex) => {
      ref.current.resetTransform()
      if (onIndexChange) onIndexChange(newImageIndex)
    }
  })

  const { alt, src, height, width, icon, props } = image

  const handleClose = useCallback(() => {
    closeShowcase()
    ref.current?.resetTransform()
  }, [closeShowcase, ref])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (ev) => {
      if (ev.key === 'Escape') handleClose()
      if (ev.key === 'ArrowLeft') handleImageChange(imageIndex - 1)
      if (ev.key === 'ArrowRight') handleImageChange(imageIndex + 1)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, imageIndex, handleClose, handleImageChange])

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
          <header>
            {!singleImage && (
              <span className={styles.imageIndex}>
                {imageIndex + 1}/{images?.length}
              </span>
            )}
            <p>{alt}</p>
            <IconButton
              src={closeIcon}
              lightColor
              className={styles.closeButton}
              title={aria.close}
            />
          </header>
          <div className={styles.content} onClick={(ev) => ev.stopPropagation()}>
            <IconButton
              src={arrowIcon}
              lightColor
              className={styles.previousImage}
              onClick={() => handleImageChange(imageIndex - 1)}
              title={aria.previousImage}
              tabIndex={open ? 0 : -1}
            />
            <TransformComponent wrapperClass={clsx(styles.canvas, icon && styles.icon)}>
              {image.src &&
                (icon ? (
                  <Icon src={src} alt={alt} aria-hidden={!open} {...props} />
                ) : (
                  <Image
                    src={src}
                    alt={alt}
                    priority
                    aria-hidden={!open}
                    width={defaultImageWidth}
                    height={(height * defaultImageWidth) / width || defaultImageHeight}
                    zoom={false}
                  />
                ))}
            </TransformComponent>
            <IconButton
              src={arrowIcon}
              lightColor
              className={styles.nextImage}
              onClick={() => handleImageChange(imageIndex + 1)}
              title={aria.nextImage}
              tabIndex={open ? 0 : -1}
            />
          </div>
          <footer onClick={(ev) => ev.stopPropagation()}>
            <Icon src={zoomIcon} lightColor />
            <p>{(scale * 100).toFixed(0)}%</p>
            <span className={styles.buttons}>
              <IconButton
                src={minusIcon}
                lightColor
                border
                onClick={() => ref.current?.zoomOut(0.2)}
                title={aria.zoomOut}
              />
              <IconButton
                src={plusIcon}
                lightColor
                border
                onClick={() => ref.current?.zoomIn(0.2)}
                title={aria.zoomIn}
              />
            </span>
          </footer>
        </div>
      </TransformWrapper>
    </div>
  )
}
