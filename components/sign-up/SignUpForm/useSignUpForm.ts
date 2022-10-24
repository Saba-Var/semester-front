import { SignUpFormData, FormProperties } from 'types'
import { useMutation } from 'react-query'
import { registerUSer } from 'services'
import { useState } from 'react'

export const useSignUpForm = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false)
  const { mutate, isLoading: userRegistering } = useMutation(registerUSer)

  const formInitialValues = {
    confirmPassword: '',
    password: '',
    username: '',
    email: '',
  }

  const submitHandler = (
    formData: SignUpFormData,
    { setFieldError, resetForm }: FormProperties
  ) => {
    mutate(formData, {
      onSuccess: () => {
        resetForm()
        setSignUpSuccess(true)
      },

      onError: (error: any) => {
        if (error.response.status === 409) {
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
  }
}
