'use client'

import styles from '@/styles/Image.module.css'
import clsx from 'clsx/lite'
import { default as NextImage } from 'next/image'

import OpenShowcase from '@/components/OpenShowcase'

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
  const locale = 'en'

  const imageElement = (
    <NextImage
      src={`/static/${src}`}
      alt={alt[locale]}
      className={clsx(className, styles.base, border && styles.border, 'no-select')}
      draggable={false}
      height={height}
      width={width}
      fill={fill}
      priority={priority}
      {...props}
    />
  )

  return (
    <OpenShowcase disable={!zoom} images={[{ src, alt }]}>
      {imageElement}
    </OpenShowcase>
  )
}
