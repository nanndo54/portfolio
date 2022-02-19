import linkedInIcon from '@assets/svg/linkedin-icon.svg'
import githubIcon from '@assets/svg/github-icon.svg'
import emailIcon from '@assets/svg/email-icon.svg'
import cvIcon from '@assets/svg/cv-icon.svg'
import cvEs from '@assets/pdf/Resume-es.pdf'
import cvEn from '@assets/pdf/Resume-en.pdf'
import { useSelector } from 'react-redux'

function useContacts() {
  const { locale } = useSelector(({ app }) => app)

  const cvs = {
    es: cvEs,
    en: cvEn
  }

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
      name: 'Curriculum Vitae',
      icon: cvIcon,
      url: cvs[locale],
      download: true
    }
  ]

  return contacts
}

export default useContacts
