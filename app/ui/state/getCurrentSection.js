import sections from '#/constants/sections'
import { getState } from '#/state/store'

const getCurrentSection = () => {
  const { isOnTop, sectionsIntersection } = getState()

  const firstSection = sections[0]
  return isOnTop
    ? firstSection.id
    : sectionsIntersection.find(({ intersected }) => intersected)?.id
}

export default getCurrentSection
