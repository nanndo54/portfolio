'use server'

import fs from 'fs'
import { getPlaiceholder } from 'plaiceholder'

export async function getPlaceholder(src) {
  const buffer = fs.readFileSync(`public/static/${src}`)

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer)

  return { ...plaiceholder, img: { src, height, width } }
}
