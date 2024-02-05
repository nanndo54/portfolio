'use client'

import styles from '@/styles/Image.module.css'
import clsx from 'clsx/lite'
import { default as NextImage } from 'next/image'

import OpenShowcase from '@/components/OpenShowcase'
import { useEffect, useState } from 'react'
// import { getPlaiceholder } from "plaiceholder";

export default function Image({
  src,
  alt,
  height,
  width,
  fill = false,
  priority = false,
  className = '',
  border = false,
  zoom = false,
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(priority ? `/static/${src}` : null)

  useEffect(() => {
    if (imageSrc) return
    import(`/public/static/${src}`).then((module) => setImageSrc(module.default))

    // const { base64, img } = getPlaceholder(src)
  }, [imageSrc, src])

  return (
    imageSrc && (
      <OpenShowcase disable={!zoom} images={[{ src, alt }]}>
        <NextImage
          src={imageSrc}
          alt={alt}
          className={clsx(className, styles.base, border && styles.border, 'no-select')}
          draggable={false}
          height={height}
          width={width}
          fill={fill}
          priority={priority}
          placeholder={priority ? undefined : 'blur'}
          {...props}
        />
      </OpenShowcase>
    )
  )
}
