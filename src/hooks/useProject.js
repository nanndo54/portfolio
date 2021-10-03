import { useDispatch, useSelector } from 'react-redux'

import { expandProject } from '@/actions/appActions'
import { getSkill } from '@/constants/skills'

function useProject(name, technologies) {
  const { activeProject } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const expanded = name === activeProject
  const skills = technologies.map((name) => getSkill(name))

  const toggleExpand = () => {
    const projectName = !expanded ? name : ''
    dispatch(expandProject(projectName))
  }

  return { expanded, toggleExpand, skills }
}

export default useProject
