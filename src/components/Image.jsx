import styles from '#/styles/Image.module.css'
import { useRef } from 'react'

import useAppStore from '#/state/store'

function Image({
  src,
  alt,
  className = '',
  height,
  width,
  noBorder = false,
  noZoom = false
}) {
  const ref = useRef()
  const { openShowcase } = useAppStore()

  const imageSrc = `/src/assets/${src}`
  const imageElement = (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
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
    <button type='button' onClick={() => openShowcase({ imageSrc, alt })}>
      {imageElement}
    </button>
  )
}

export default Image
