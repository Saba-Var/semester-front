import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { resetPasswordEmailReq } from 'services'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { emailSchema } from 'schemas'
import type { Email } from 'types'
import { useState } from 'react'

export const useResetPasswordRequestForm = () => {
  const [successModal, setSuccessModal] = useState(false)

  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
  })

  const { reset: resetForm, setError, handleSubmit } = form

  const { mutate: requestResetLink, isLoading } = useMutation(
    resetPasswordEmailReq
  )

  const submitHandler: SubmitHandler<Email> = (values) => {
    requestResetLink(values, {
      onSuccess: () => {
        setSuccessModal(true)
        resetForm()
      },

      onError: (error: any) => {
        if (error?.response?.status === 404) {
          setError('email', {
            message: 'user-not-found',
          })
        } else {
          setError('email', {
            message: 'email-sent-failed',
          })
        }
      },
    })
  }

  return {
    setSuccessModal,
    submitHandler,
    handleSubmit,
    successModal,
    isLoading,
    form,
    t,
  }
}
