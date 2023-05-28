import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'next-i18next'
import { resetPasswordSchema } from 'schemas'
import { useMutation } from 'react-query'
import { resetPassword } from 'services'
import { useRouter } from 'next/router'
import { type Passwords } from 'types'
import { useState } from 'react'

export const useNewPasswordForm = () => {
  const [successModal, setSuccessModal] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const { mutate, isLoading } = useMutation(resetPassword)
  const { query, push } = useRouter()
  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      confirmPassword: '',
      password: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, reset: resetForm } = form

  const submitHandler: SubmitHandler<Passwords> = ({
    confirmPassword,
    password,
  }) => {
    const data = {
      accessToken: query?.token as string,
      confirmPassword,
      password,
    }

    mutate(data, {
      onSuccess: () => {
        setSuccessModal(true)
        resetForm()
      },

      onError: () => setFetchError(true),
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
    handleSubmit,
    successModal,
    fetchError,
    isLoading,
    form,
    t,
  }
}
