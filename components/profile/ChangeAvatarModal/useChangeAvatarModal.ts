import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const useChangeAvatarModal = () => {
  const { t } = useTranslation()

  const user = useSelector((state: RootState) => state.user)

  return { t, user }
}

export default useChangeAvatarModal
