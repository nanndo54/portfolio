import getLocaleText from '#/utilities/getLocaleText'

import LinkedInIcon from '#/assets/svg/linkedin-icon.svg?react'
import GitHubIcon from '#/assets/svg/github-icon.svg?react'
import EmailIcon from '#/assets/svg/email-icon.svg?react'
import CvIcon from '#/assets/svg/cv-icon.svg?react'

const contacts = [
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/pabloc54'
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
    props: { contentColor: true },
    url: 'https://github.com/pabloc54'
  },
  {
    name: 'Email',
    icon: EmailIcon,
    url: 'mailto:pablofernando50259107@gmail.com'
  },
  {
    name: 'CV',
    icon: CvIcon,
    url: getLocaleText('link.cv')
  }
]

export default contacts
