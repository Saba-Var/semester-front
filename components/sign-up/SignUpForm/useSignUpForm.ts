import { SignUpFormData, FormProperties } from 'types'
import { useMutation } from 'react-query'
import { registerUSer } from 'services'
import { useState } from 'react'

export const useSignUpForm = () => {
  const [showRequestExceedModal, setShowRequestExceedModal] = useState(false)

  const formInitialValues = {
    confirmPassword: '',
    password: '',
    username: '',
    email: '',
  }

  const { mutate } = useMutation(registerUSer)

  const submitHandler = (
    formData: SignUpFormData,
    { setFieldError }: FormProperties
  ) => {
    mutate(formData, {
      onError: (error: any) => {
        const status = error.response.status
        if (status === 409) {
          setFieldError('email', 'email-exists')
        } else if (status === 429) {
          setShowRequestExceedModal(true)
        }
      },
    })
  }

  return {
    setShowRequestExceedModal,
    showRequestExceedModal,
    formInitialValues,
    submitHandler,
  }
}
