import en from '#/assets/lang/en.json'
import es from '#/assets/lang/es.json'
import useAppStore from '#/store'

const locales = {
  en,
  es
}

function useLocaleText() {
  const { locale } = useAppStore()

  return (id) => locales[locale][id]
}

export default useLocaleText
