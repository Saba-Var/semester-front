import { useTranslation } from 'next-i18next'

export const useTranslate = (text: string) => {
  const { t } = useTranslation()

  return t(text)
}
