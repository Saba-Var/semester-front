import { FormProperties, Passwords } from 'types'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { resetPassword } from 'services'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const useNewPasswordForm = () => {
  const [successModal, setSuccessModal] = useState(false)

  const { mutate, isLoading } = useMutation(resetPassword)
  const { t } = useTranslation()

  const { query, push } = useRouter()

  const initialValues = {
    confirmPassword: '',
    password: '',
  }

  const submitHandler = (
    formValues: Passwords,
    { resetForm }: FormProperties
  ) => {
    const data = {
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      accessToken: query.token as string,
    }

    mutate(data, {
      onSuccess: () => {
        setSuccessModal(true)
        resetForm()
      },

      onError: (error: any) => {
        console.log(error)
      },
    })
  }

  const logInClickHandler = () => {
    push('/login')
  }

  return {
    logInClickHandler,
    setSuccessModal,
    submitHandler,
    initialValues,
    successModal,
    isLoading,
    t,
  }
}
