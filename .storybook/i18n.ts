import { loadTranslationResources } from '../utils'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
  resources: await loadTranslationResources(),
})

export default i18n
