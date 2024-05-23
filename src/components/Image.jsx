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
  placeholder,
  fill = false,
  priority = false,
  className,
  border = false,
  zoom = false,
  ...props
}) {
  return (
    <OpenShowcase disable={!zoom} images={[{ src, alt }]}>
      <NextImage
        src={`/images/${src}`}
        alt={alt}
        className={clsx(
          className,
          styles.base,
          border && `${styles.border} interactive-border`
        )}
        height={height}
        width={width}
        fill={fill}
        priority={priority}
        placeholder={placeholder == null ? undefined : 'blur'}
        blurDataURL={placeholder}
        {...props}
      />
    </OpenShowcase>
  )
}
