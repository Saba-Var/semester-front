import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'next-i18next'
import type { SignUpFormValues } from 'types'
import { useMutation } from 'react-query'
import { registerUSer } from 'services'
import { signUpSchema } from 'schemas'
import { useState } from 'react'

export const useSignUpForm = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false)

  const { mutate, isLoading: userRegistering } = useMutation(registerUSer)

  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      confirmPassword: '',
      password: '',
      username: '',
      email: '',
    },
    mode: 'all',
  })

  const { handleSubmit, reset: resetForm, setError } = form

  const submitHandler: SubmitHandler<SignUpFormValues> = (values) => {
    mutate(values, {
      onSuccess: () => {
        resetForm()
        setSignUpSuccess(true)
      },

      onError: (error: any) => {
        if (error?.response?.status === 409) {
          setError('email', {
            message: 'email-exists',
          })
        }
      },
    })
  }

  return {
    setSignUpSuccess,
    userRegistering,
    submitHandler,
    signUpSuccess,
    handleSubmit,
    form,
    t,
  }
}
