import type { FormikSubmitHandler, Email } from 'types'
import { resetPasswordEmailReq } from 'services'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { useState } from 'react'

export const useResetPasswordRequest = () => {
  const [successModal, setSuccessModal] = useState(false)

  const { t } = useTranslation()

  const { mutate: requestResetLink, isLoading } = useMutation(
    resetPasswordEmailReq
  )

  const initialValues = {
    email: '',
  }

  const submitHandler: FormikSubmitHandler<Email> = (
    values,
    { setFieldError, resetForm }
  ) => {
    requestResetLink(values, {
      onSuccess: () => {
        setSuccessModal(true)
        resetForm()
      },

      onError: (error: any) => {
        if (error?.response?.status === 404) {
          setFieldError('email', 'user-not-found')
        } else {
          setFieldError('email', 'email-sent-failed')
        }
      },
    })
  }

  return {
    setSuccessModal,
    initialValues,
    submitHandler,
    successModal,
    isLoading,
    t,
  }
}
