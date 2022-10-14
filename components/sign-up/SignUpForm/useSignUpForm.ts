import { SignUpFormData, FormProperties } from 'types'
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

  const submitHandler = async (
    data: SignUpFormData,
    { setFieldError }: FormProperties
  ) => {
    try {
      const { status } = await registerUSer(data)

      if (status === 200) {
      }
    } catch (error: any) {
      const status = error.response.status
      if (status === 409) {
        setFieldError('email', 'email-exists')
      } else if (status === 429) {
        setShowRequestExceedModal(true)
      }
    }
  }

  return {
    setShowRequestExceedModal,
    showRequestExceedModal,
    formInitialValues,
    submitHandler,
  }
}
