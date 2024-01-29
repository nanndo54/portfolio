'use client'

import styles from '@/styles/ImageCarrousel.module.css'
import { useCallback, useEffect, useRef, useState } from 'react'

import IconButton from '@/components/IconButton'
import Image from '@/components/Image'
import OpenShowcase from '@/components/OpenShowcase'
import { arrowIcon } from '@/constants/icons'
import useDebouncedCallback from '@/hooks/useDebouncedCallback'
import clsx from 'clsx/lite'

export default function ImageCarrousel({
  images,
  height,
  width,
  noBorder = false,
  noZoom = false,
  noAuto = false
}) {
  const contentRef = useRef()
  const [imageIndex, setImageIndex] = useState(0)

  const singleImage = images.length <= 1

  const handleImageChange = useCallback(
    (index) => {
      const newImageIndex = (index + images.length) % images.length
      contentRef.current.scrollTo({
        left: contentRef.current.clientWidth * newImageIndex,
        behavior: 'smooth'
      })
      setImageIndex(newImageIndex)
    },
    [images.length]
  )

  useEffect(() => {
    if (noAuto || singleImage) return
    const interval = setInterval(
      () => handleImageChange(imageIndex + 1),
      5000 + Math.random() * 3000
    )

    return () => clearInterval(interval)
  }, [noAuto, singleImage, handleImageChange, imageIndex, images])

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
    <div className={clsx(styles.base, singleImage && styles.singleImage)}>
      <IconButton
        icon={arrowIcon}
        iconProps={{ lightColor: true }}
        className={styles.previousImage}
        onClick={(ev) => {
          ev.stopPropagation()
          handleImageChange(imageIndex - 1)
        }}
        aria-label='Ver imagen anterior'
      />
      {noZoom ? (
        <div className={clsx(styles.container, noBorder && styles.noBorder)}>
          {contentElement}
        </div>
      ) : (
        <OpenShowcase
          images={images}
          index={imageIndex}
          onIndexChange={handleImageChange}
        >
          {contentElement}
        </OpenShowcase>
      )}
      <IconButton
        icon={arrowIcon}
        iconProps={{ lightColor: true }}
        className={styles.nextImage}
        onClick={(ev) => {
          ev.stopPropagation()
          handleImageChange(imageIndex + 1)
        }}
        aria-label='Ver imagen siguiente'
      />
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
