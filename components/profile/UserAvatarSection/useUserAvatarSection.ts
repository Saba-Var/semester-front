import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'
import { useState } from 'react'

const useUserAvatarSection = () => {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false)

  const user = useSelector((state: RootState) => state.user)

  const { t } = useTranslation()

  return {
    avatarSrc: user.image?.url,
    setIsAvatarModalOpen,
    isAvatarModalOpen,
    user,
    t,
  }
}

export default useUserAvatarSection
