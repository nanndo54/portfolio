import styles from '#/styles/Image.module.css'
import { useRef } from 'react'
import { default as NextImage } from 'next/image'

import useAppStore from '#/state/store'

function Image({
  src,
  alt,
  height,
  width,
  fill = false,
  priority = false,
  className = '',
  noBorder = false,
  noZoom = false,
  ariaHidden = false
}) {
  const ref = useRef()
  const { locale, openShowcase } = useAppStore()

  const imageElement = (
    <NextImage
      ref={ref}
      src={src}
      alt={alt[locale]}
      className={`${className} ${styles.base} ${
        noBorder ? styles.noBorder : ''
      } no-select`}
      draggable={false}
      height={height}
      width={width}
      fill={fill}
      priority={priority}
      aria-hidden={ariaHidden}
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

export default Image
