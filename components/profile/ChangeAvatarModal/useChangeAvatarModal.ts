import { useForm, type SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { useState } from 'react'

const useChangeAvatarModal = () => {
  const { t } = useTranslation()

  const [activeTab, setActiveTab] = useState<string | (() => never)>(t('style'))

  const user = useSelector((state: RootState) => state.user)

  const form = useForm({
    defaultValues: {
      style: user.image?.collectionName as string,
    },
    mode: 'onTouched',
  })

  return { t, user, activeTab, setActiveTab, form }
}

export default useChangeAvatarModal
