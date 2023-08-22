import { useQueryClient, useQuery } from 'react-query'
import { useTranslation } from 'next-i18next'
import type { ProfileForm } from './types'
import { useDispatch } from 'react-redux'
import type { UserDataObj } from 'types'
import { setAccessToken } from 'slices'
import { useRouter } from 'next/router'
import { useUserService } from 'hooks'
import { useState } from 'react'

const useEmailActivation = (profileForm: ProfileForm) => {
  const [showActivationSuccessModal, setShowActivationSuccessModal] =
    useState(false)
  const [showActivationFailModal, setShowActivationFailModal] = useState(false)

  const { activateEmailRequest } = useUserService()
  const { t } = useTranslation('profile')
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const router = useRouter()

  const emailToken = router.query.emailToken

  useQuery(
    ['emailActivation', emailToken],
    () => activateEmailRequest(emailToken as string),
    {
      onSuccess: (data) => {
        setShowActivationSuccessModal(true)
        dispatch(setAccessToken(data?.data?.accessToken))

        queryClient.setQueryData<UserDataObj>(
          'user',
          (oldData): UserDataObj => {
            return {
              ...oldData,
              data: {
                ...oldData?.data!,
                email: data.data.email,
              },
            }
          }
        )

        profileForm.setValue('email', data.data.email)
        router.replace('/profile')
      },

      onError: () => {
        setShowActivationFailModal(true)
        router.replace('/profile')
      },

      enabled: !!emailToken,
      retry: false,
    }
  )

  return {
    setShowActivationSuccessModal,
    showActivationSuccessModal,
    setShowActivationFailModal,
    showActivationFailModal,
    t,
  }
}

export default useEmailActivation
