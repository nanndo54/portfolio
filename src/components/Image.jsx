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
  className,
  border = false,
  zoom = false,
  ...props
}) {
  // const [blurData, setBlurData] = useState()

  // useEffect(() => {
  //   // getPlaiceholder
  // }, [src])

  return (
    <OpenShowcase disable={!zoom} images={[{ src, alt }]}>
      <NextImage
        src={`/images/${src}`}
        alt={alt}
        className={clsx(className, styles.base, border && styles.border, 'no-select')}
        draggable={false}
        height={height}
        width={width}
        fill={fill}
        priority={priority}
        // placeholder='blur'
        // blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAzElEQVR42mL8//8/AyUYTFhZGJ'
        {...props}
      />
    </OpenShowcase>
  )
}
