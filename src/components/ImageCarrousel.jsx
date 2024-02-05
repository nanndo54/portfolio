'use client'

import styles from '@/styles/ImageCarrousel.module.css'
import { useCallback, useRef, useState } from 'react'

import IconButton from '@/components/IconButton'
import Image from '@/components/Image'
import OpenShowcase from '@/components/OpenShowcase'
import { arrowIcon } from '@/constants/icons'
import useDebouncedCallback from '@/hooks/useDebouncedCallback'
import useAppStore from '@/state/store'
import clsx from 'clsx/lite'

export default function ImageCarrousel({
  className,
  images,
  height,
  width,
  border = false,
  zoom = true
}) {
  const { aria } = useAppStore((state) => state.dictionary)

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

  const handleScroll = useDebouncedCallback((event) => {
    const { scrollLeft, clientWidth } = event.target
    const index = Math.round(scrollLeft / clientWidth)
    setImageIndex(index)
  }, 100)

  return (
    <div
      className={clsx(
        className,
        styles.base,
        border && styles.border,
        singleImage && styles.singleImage
      )}
    >
      <IconButton
        src={arrowIcon}
        lightColor
        className={styles.previousImage}
        onClick={(ev) => {
          ev.stopPropagation()
          handleImageChange(imageIndex - 1)
        }}
        title={aria.previousImage}
      />
      <OpenShowcase
        disable={!zoom}
        images={images}
        index={imageIndex}
        onIndexChange={handleImageChange}
      >
        <div className={styles.content} ref={contentRef} onScroll={handleScroll}>
          {images.map((image, index) => (
            <Image key={index} {...image} height={height} width={width} zoom={false} />
          ))}
        </div>
      </OpenShowcase>
      <IconButton
        src={arrowIcon}
        lightColor
        className={styles.nextImage}
        onClick={(ev) => {
          ev.stopPropagation()
          handleImageChange(imageIndex + 1)
        }}
        title={aria.nextImage}
      />
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            type='button'
            title={`${aria.seeImage} ${index + 1}`}
            key={index}
            className={clsx(imageIndex === index && styles.selected)}
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
