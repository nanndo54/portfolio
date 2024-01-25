'use client'

import styles from '#/styles/ImageCarrousel.module.css'
import { useRef, useState } from 'react'

import Icon from '#/components/Icon'
import IconButton from '#/components/IconButton'
import Image from '#/components/Image'
import { arrowIcon } from '#/constants/icons'
import useDebouncedCallback from '#/hooks/useDebouncedCallback'
import useAppStore from '#/state/store'

export default function ImageCarrousel({
  images,
  height,
  width,
  className = '',
  noBorder = false,
  noZoom = false
}) {
  const { openShowcase } = useAppStore()
  const contentRef = useRef()

  const [imageIndex, setImageIndex] = useState(0)

  const singleImage = images.length <= 1

  const handleImageChange = (index) => {
    contentRef.current.scrollTo({
      left: contentRef.current.clientWidth * index,
      behavior: 'smooth'
    })
    setImageIndex(index)
  }

  const handleScroll = useDebouncedCallback((event) => {
    const { scrollLeft, clientWidth } = event.target
    const index = Math.round(scrollLeft / clientWidth)
    setImageIndex(index)
  }, 100)

  const contentElement = (
    <div className={styles.content} ref={contentRef} onScroll={handleScroll}>
      {images.map((image, index) => (
        <Image key={index} {...image} height={height} width={width} noBorder noZoom />
      ))}
    </div>
  )

  return (
    <div className={`${styles.base} ${singleImage ? styles.singleImage : ''}`}>
      <IconButton
        className={styles.previousImage}
        onClick={(ev) => {
          ev.stopPropagation()
          handleImageChange((imageIndex - 1 + images.length) % images.length)
        }}
        noBorder
        aria-label='Ver imagen anterior'
      >
        <Icon src={arrowIcon} lightColor />
      </IconButton>
      {noZoom ? (
        <div
          className={`${className} ${styles.container} ${
            noBorder ? styles.noBorder : ''
          }`}
        >
          {contentElement}
        </div>
      ) : (
        <button
          type='button'
          className={`${className} ${styles.container} ${
            noBorder ? styles.noBorder : ''
          }`}
          onClick={() =>
            openShowcase({ images, index: imageIndex, onIndexChange: handleImageChange })
          }
        >
          {contentElement}
        </button>
      )}
      <IconButton
        className={styles.nextImage}
        onClick={(ev) => {
          ev.stopPropagation()
          handleImageChange((imageIndex + 1 + images.length) % images.length)
        }}
        noBorder
        aria-label='Ver imagen siguiente'
      >
        <Icon src={arrowIcon} lightColor />
      </IconButton>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            aria-label={`Ver imagen ${index + 1}`}
            key={index}
            className={imageIndex === index ? styles.selected : ''}
            onClick={(ev) => {
              ev.stopPropagation()
              handleImageChange(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
