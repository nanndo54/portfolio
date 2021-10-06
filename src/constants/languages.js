import spanish from '@/lang/es.json'
import english from '@/lang/en.json'

const languages = {
  es: spanish,
  en: english
}

const languageCodes = Object.keys(languages)

export default languages

export { languageCodes }
