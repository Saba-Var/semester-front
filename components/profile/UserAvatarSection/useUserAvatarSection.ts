import { useTranslation } from 'next-i18next'
import { useGetUserData } from 'hooks'
import { useState } from 'react'

const useUserAvatarSection = () => {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false)

  const { user } = useGetUserData()

  const { t } = useTranslation()

  return {
    avatarSrc: user?.image?.url,
    setIsAvatarModalOpen,
    isAvatarModalOpen,
    user,
    t,
  }
}

export default useUserAvatarSection
