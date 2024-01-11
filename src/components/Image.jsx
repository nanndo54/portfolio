import styles from '#/styles/Image.module.css'
import { useRef } from 'react'

import useAppStore from '#/state/store'

function Image({
  src: image,
  className = '',
  height,
  width,
  noBorder = false,
  noZoom = false
}) {
  const ref = useRef()
  const { locale, openShowcase } = useAppStore()

  const { src, alt } = image

  const imageElement = (
    <img
      ref={ref}
      src={src}
      alt={alt[locale]}
      className={`${className} ${styles.base} ${
        noBorder ? styles.noBorder : ''
      } no-select`}
      draggable={false}
      height={height}
      width={width}
    />
  )

  return noZoom ? (
    imageElement
  ) : (
    <button type='button' onClick={() => openShowcase({ images: [image] })}>
      {imageElement}
    </button>
  )
}

export default Image
