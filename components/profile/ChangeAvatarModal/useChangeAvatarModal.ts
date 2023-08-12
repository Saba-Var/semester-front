import { useTranslation } from 'next-i18next'

const useChangeAvatarModal = () => {
  const { t } = useTranslation()

  return { t }
}

export default useChangeAvatarModal
