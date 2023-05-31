import linkedInIcon from '#assets/svg/linkedin-icon.svg'
import githubIcon from '#assets/svg/github-icon.svg'
import emailIcon from '#assets/svg/email-icon.svg'
import cvIcon from '#assets/svg/cv-icon.svg'
import cvs from '#constants/cvs'
import useAppStore from '#/store'

function useContacts() {
  const { locale } = useAppStore()

  const contacts = [
    {
      name: 'LinkedIn',
      icon: linkedInIcon,
      url: 'https://www.linkedin.com/in/pabloc54'
    },
    {
      name: 'GitHub',
      icon: githubIcon,
      url: 'https://github.com/pabloc54'
    },
    {
      name: 'Email',
      icon: emailIcon,
      url: 'mailto:pablofernando50259107@gmail.com'
    },
    {
      name: 'CV',
      icon: cvIcon,
      url: cvs[locale],
      download: true
    }
  ]

  return contacts
}

export default useContacts
