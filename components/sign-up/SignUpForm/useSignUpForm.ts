import { SignUpFormValues, FormProperties } from 'types'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { registerUSer } from 'services'
import { useState } from 'react'

export const useSignUpForm = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false)

  const { mutate, isLoading: userRegistering } = useMutation(registerUSer)

  const { t } = useTranslation()

  const formInitialValues = {
    confirmPassword: '',
    password: '',
    username: '',
    email: '',
  }

  const submitHandler = (
    formValues: SignUpFormValues,
    { setFieldError, resetForm }: FormProperties
  ) => {
    mutate(formValues, {
      onSuccess: () => {
        resetForm()
        setSignUpSuccess(true)
      },

      onError: (error: any) => {
        if (error?.response?.status === 409) {
          setFieldError('email', 'email-exists')
        }
      },
    })
  }

  return {
    formInitialValues,
    setSignUpSuccess,
    userRegistering,
    submitHandler,
    signUpSuccess,
    t,
  }
}
