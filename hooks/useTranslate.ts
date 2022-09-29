import { useTranslation } from 'next-i18next'

const useTranslate = (text: string) => {
  const { t } = useTranslation()

  return t(text)
}

export default useTranslate
