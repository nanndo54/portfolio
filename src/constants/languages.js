import spanish from '@/lang/es.json'
import english from '@/lang/en.json'

const languages = {
  es: spanish,
  en: english
}

const languageIsSupported = (languageCode) =>
  languageCode && Object.keys(languages).find((code) => languageCode.startsWith(code))

export default languages

export { languageIsSupported }
