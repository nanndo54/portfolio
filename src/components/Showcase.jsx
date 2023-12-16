import styles from '#/styles/Showcase.module.css'
import { useEffect, useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import Icon from '#/components/Icon'
import IconButton from '#/components/IconButton'
import Text from '#/components/Text'
import Image from '#/components/Image'

import useAppStore from '#/state/store'
import { CloseIcon, MinusIcon, PlusIcon, ZoomIcon } from '#/constants/icons'

const initialScale = 1

function Showcase() {
  const [scale, setScale] = useState(initialScale)
  const { showcase, closeShowcase } = useAppStore()
  const { open, src, element, alt } = showcase

  useEffect(() => {
    if (open) return
    setScale(1)
  }, [open])

  return (
    <div className={`${styles.base} ${open ? styles.open : ''}`}>
      <TransformWrapper
        initialScale={initialScale}
        maxScale={3}
        minScale={0.8}
        onTransformed={(_, { scale }) => {
          setScale(scale)
        }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div
              className={styles.overlay}
              onClick={() => {
                closeShowcase()
                resetTransform()
              }}
            >
              {alt && (
                <Text as='h5' className={styles.title}>
                  {alt}
                </Text>
              )}
              <IconButton
                icon={CloseIcon}
                className={styles.closeButton}
                aria-label='Cerrar'
                noBorder
              />
              <div className={styles.zoom}>
                <Icon src={ZoomIcon} />
                <Text as='p'>{(scale * 100).toFixed(0)}%</Text>
                <span className={styles.zoomButtons}>
                  <IconButton
                    icon={MinusIcon}
                    onClick={(ev) => {
                      ev.stopPropagation()
                      zoomOut()
                    }}
                    aria-label='Reducir'
                  />
                  <IconButton
                    icon={PlusIcon}
                    onClick={(ev) => {
                      ev.stopPropagation()
                      zoomIn()
                    }}
                    aria-label='Agrandar'
                  />
                </span>
              </div>
            </div>
            <TransformComponent
              wrapperClass={styles.content}
              style={{ transform: `scale(${open ? scale : 0.5})` }}
              onClick={(ev) => ev.stopPropagation()}
            >
              {src ? <Image src={src} alt={alt} noBorder noZoom /> : element}
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}

export default Showcase
