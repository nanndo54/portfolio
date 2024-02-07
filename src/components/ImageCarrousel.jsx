'use client'

import styles from '@/styles/ImageCarrousel.module.css'
import { useRef } from 'react'

import IconButton from '@/components/IconButton'
import Image from '@/components/Image'
import OpenShowcase from '@/components/OpenShowcase'
import { arrowIcon } from '@/constants/icons'
import useCarrousel from '@/hooks/useCarrousel'
import clsx from 'clsx/lite'
import useDictionary from 'i18n/client'

export default function ImageCarrousel({
  className,
  images,
  height,
  width,
  border = false,
  zoom = true
}) {
  const contentRef = useRef()
  const { aria } = useDictionary()
  const { imageIndex, singleImage, handleImageChange, onScroll } = useCarrousel({
    images,
    onImageChange: (newImageIndex) => {
      contentRef.current.scrollTo({
        left: contentRef.current.clientWidth * newImageIndex,
        behavior: 'smooth'
      })
    }
  })

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
        className={styles.content}
        ref={contentRef}
        onScroll={onScroll}
        style={{
          width: `clamp(100%, ${width}px, 100%)`,
          aspectRatio: Math.fround(width / height)
        }}
      >
        {images.map((image, index) => (
          <Image key={index} {...image} height={height} width={width} zoom={false} />
        ))}
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
