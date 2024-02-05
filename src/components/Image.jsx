'use client'

import styles from '@/styles/Image.module.css'
import clsx from 'clsx/lite'
import { default as NextImage } from 'next/image'

import OpenShowcase from '@/components/OpenShowcase'
// import { getPlaiceholder } from "plaiceholder";

export default function Image({
  src,
  alt,
  height,
  width,
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
        src={`/static/${src}`}
        alt={alt}
        className={clsx(className, styles.base, border && styles.border, 'no-select')}
        draggable={false}
        height={height}
        width={width}
        fill={fill}
        priority={priority}
        // placeholder={priority ? undefined : 'blur'}
        {...props}
      />
    </OpenShowcase>
  )
}
