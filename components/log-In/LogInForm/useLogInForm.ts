import { FormProperties, SignInFormData } from 'types'
import { useMutation } from 'react-query'
import { authorization } from 'services'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const useLogInForm = () => {
  const [fetchError, setFetchError] = useState(false)

  const { mutate } = useMutation(authorization)
  const { push } = useRouter()

  const formInitialValues = {
    password: '',
    email: '',
  }

  const submitHandler = (
    formData: SignInFormData,
    { setFieldError }: FormProperties
  ) => {
    mutate(formData, {
      onSuccess: () => {},
      onError: (error: any) => {
        const status = error.response.status
        if (status === 401) {
          setFieldError('email', 'incorrect-credentials')
          setFieldError('password', 'incorrect-credentials')
        } else if (status === 403) {
          setFieldError('email', 'inactive-account')
          setFieldError('password', 'inactive-account')
        } else if (status === 429) {
          push('/requests-exceed')
        } else {
          alert(error.message)
        }

        setFetchError(true)
      },
    })
  }

  return { formInitialValues, submitHandler, fetchError }
}
