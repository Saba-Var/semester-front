import type { Resource } from 'i18next'

export const loadTranslationResources = async (): Promise<Resource> => {
  const supportedLanguages = ['en', 'ka']
  const supportedNamespaces = ['common', 'auth']
  const resources: Resource = {}

  for (const lang of supportedLanguages) {
    const langResources: Resource = {}

    for (const ns of supportedNamespaces) {
      const resource = await import(`../public/locales/${lang}/${ns}.json`)
      langResources[ns] = resource.default
    }
    resources[lang] = langResources
  }

  return resources
}
