import { SignUpFormData, FormProperties } from 'types'
import { useMutation } from 'react-query'
import { registerUSer } from 'services'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const useSignUpForm = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false)

  const { push } = useRouter()

  const formInitialValues = {
    confirmPassword: '',
    password: '',
    username: '',
    email: '',
  }

  const { mutate } = useMutation(registerUSer)

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
        const status = error.response.status
        if (status === 409) {
          setFieldError('email', 'email-exists')
        } else if (status === 429) {
          push('/requests-exceed')
        }
      },
    })
  }

  return {
    formInitialValues,
    setSignUpSuccess,
    submitHandler,
    signUpSuccess,
  }
}
