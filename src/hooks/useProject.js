import { getSkill } from '#constants/skills'
import useAppStore from '#/store'

function useProject(name, technologies) {
  const { activeProject } = useAppStore()

  const expanded = name === activeProject
  const skills = technologies.map((name) => getSkill(name))

  const toggleExpand = () => {
    // const projectName = !expanded ? name : ''
  }

  return { expanded, toggleExpand, skills }
}

export default useProject
