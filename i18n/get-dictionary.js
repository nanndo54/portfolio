import 'server-only'

import { dictionaries } from 'i18n/config'

export const getDictionary = (locale) => dictionaries[locale] ?? dictionaries[0]
