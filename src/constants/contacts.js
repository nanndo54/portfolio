import linkedinIcon from '#/assets/svg/linkedin-icon.svg?react'
import githubIcon from '#/assets/svg/github-icon.svg?react'
import emailIcon from '#/assets/svg/email-icon.svg?react'

const contacts = [
  {
    name: 'LinkedIn',
    icon: linkedinIcon,
    url: 'https://www.linkedin.com/in/nanndo54'
  },
  {
    name: 'GitHub',
    icon: githubIcon,
    props: { contentColor: true },
    url: 'https://github.com/nanndo54'
  },
  {
    name: 'Email',
    icon: emailIcon,
    url: 'mailto:nanndo54@outlook.com'
  }
]

export default contacts
