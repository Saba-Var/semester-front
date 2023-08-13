import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { useState } from 'react'

const useChangeAvatarModal = () => {
  const { t } = useTranslation()

  const [activeTab, setActiveTab] = useState<string | (() => never)>(t('style'))

  const user = useSelector((state: RootState) => state.user)

  return { t, user, activeTab, setActiveTab }
}

export default useChangeAvatarModal
