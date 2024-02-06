import useDebouncedCallback from '@/hooks/useDebouncedCallback'
import { useCallback, useEffect, useState } from 'react'

export default function useCarrousel({ initialIndex = 0, images = [], onImageChange }) {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    setImageIndex(initialIndex)
  }, [initialIndex])

  const image = images[imageIndex] || {}
  const singleImage = images.length <= 1

  const handleImageChange = useCallback(
    (index) => {
      const newImageIndex = (index + images.length) % images.length
      setImageIndex(newImageIndex)

      if (onImageChange) onImageChange(newImageIndex)
    },
    [images.length, onImageChange]
  )

  const onScroll = useDebouncedCallback((event) => {
    const { scrollLeft, clientWidth } = event.target
    const newImageIndex = Math.round(scrollLeft / clientWidth)
    setImageIndex(newImageIndex)
  }, 100)

  return { image, imageIndex, singleImage, handleImageChange, onScroll }
}
