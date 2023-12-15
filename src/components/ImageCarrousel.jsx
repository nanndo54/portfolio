import styles from '#/styles/ImageCarrousel.module.css'
import { useRef, useState } from 'react'

import useAppStore from '#/state/store'
import IconButton from '#/components/IconButton'
import { ArrowIcon } from '#/constants/icons'
import Image from '#/components/Image'
import useDebouncedCallback from '#/hooks/useDebouncedCallback'
import Icon from '#/components/Icon'
// import useDragScroll from '#/hooks/useDragScroll'

function ImageCarrousel({ images, className = '', noBorder = false, noZoom = false }) {
  const { openShowcase } = useAppStore()
  const contentRef = useRef()

  // useDragScroll(contentRef)

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
      {images.map(({ src, alt }, index) => (
        <Image key={index} src={src} alt={alt} noBorder noZoom />
      ))}
    </div>
  )

  return (
    <div className={`${styles.base} ${singleImage ? styles.singleImage : ''}`}>
      <IconButton
        className={styles.previousImage}
        onClick={() =>
          handleImageChange((imageIndex - 1 + images.length) % images.length)
        }
        noBorder
        aria-label='Ver imagen anterior'
      >
        <Icon src={ArrowIcon} contentColor />
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
            openShowcase({ src: images[imageIndex].src, alt: images[imageIndex].alt })
          }
        >
          {contentElement}
        </button>
      )}
      <IconButton
        className={styles.nextImage}
        onClick={() =>
          handleImageChange((imageIndex + 1 + images.length) % images.length)
        }
        noBorder
        aria-label='Ver imagen anterior'
      >
        <Icon src={ArrowIcon} contentColor />
      </IconButton>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            aria-label={`Ver imagen ${index + 1}`}
            key={index}
            className={imageIndex === index ? styles.selected : ''}
            onClick={() => handleImageChange(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarrousel
