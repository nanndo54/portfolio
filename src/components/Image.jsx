'use client'

import styles from '@/styles/Image.module.css'
import { default as NextImage } from 'next/image'

import useAppStore from '@/state/store'

export default function Image({
  src,
  alt,
  height,
  width,
  fill = false,
  priority = false,
  className = '',
  noBorder = false,
  noZoom = false,
  ...props
}) {
  const { openShowcase } = useAppStore()
  const locale = 'en'

  const imageElement = (
    <NextImage
      src={`/static/${src}`}
      alt={alt[locale]}
      className={`${className} ${styles.base} ${
        noBorder ? styles.noBorder : ''
      } no-select`}
      draggable={false}
      height={height}
      width={width}
      fill={fill}
      priority={priority}
      {...props}
    />
  )

  return noZoom ? (
    imageElement
  ) : (
    <button type='button' onClick={() => openShowcase({ images: [{ src, alt }] })}>
      {imageElement}
    </button>
  )
}
