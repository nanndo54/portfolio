import CvIcon from '#/svg/CvIcon'
import LinkedInIcon from '#/svg/LinkedInIcon'
import EmailIcon from '#/svg/EmailIcon'
import GitHubIcon from '#/svg/GitHubIcon'
import useLocaleText from '#/hooks/useLocaleText'

function useContacts() {
  const getLocaleText = useLocaleText()

  const contacts = [
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon width={32} height={32} fill='#0b66c3' />,
      url: 'https://www.linkedin.com/in/pabloc54'
    },
    {
      name: 'GitHub',
      icon: <GitHubIcon width={42} height={42} fill='var(--content-color)' />,
      url: 'https://github.com/pabloc54'
    },
    {
      name: 'Email',
      icon: <EmailIcon width={40} height={40} fill='#0c86dd' />,
      url: 'mailto:pablofernando50259107@gmail.com'
    },
    {
      name: 'CV',
      icon: <CvIcon width={40} height={40} fill='#5955dd' />,
      url: getLocaleText('link.cv'),
      download: true
    }
  ]

  return contacts
}

export default useContacts
