import { FormikSubmitHandler, Passwords } from 'types'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { resetPassword } from 'services'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const useNewPasswordForm = () => {
  const [successModal, setSuccessModal] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const { mutate, isLoading } = useMutation(resetPassword)
  const { query, push } = useRouter()
  const { t } = useTranslation()

  const initialValues = {
    confirmPassword: '',
    password: '',
  }

  const submitHandler: FormikSubmitHandler<Passwords> = (
    { confirmPassword, password },
    { resetForm }
  ) => {
    const data = {
      accessToken: query.token as string,
      confirmPassword,
      password,
    }

    mutate(data, {
      onSuccess: () => {
        setSuccessModal(true)
        resetForm()
      },

      onError: () => {
        setFetchError(true)
      },
    })
  }

  const logInClickHandler = () => {
    push('/log-in')
  }

  return {
    logInClickHandler,
    setSuccessModal,
    setFetchError,
    submitHandler,
    initialValues,
    successModal,
    fetchError,
    isLoading,
    t,
  }
}
