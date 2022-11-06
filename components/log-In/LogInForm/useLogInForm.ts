import { FormProperties, SignInformValues } from 'types'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { authorization } from 'services'
import { setAccessToken } from 'slices'
import { useState } from 'react'
import Cookies from 'js-cookie'

export const useLogInForm = () => {
  const [rememberCheckbox, setRememberCheckbox] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const { mutate: submitForm, isLoading: authorizing } =
    useMutation(authorization)

  const dispatch = useDispatch()

  const formInitialValues = {
    password: '',
    email: '',
  }

  const submitHandler = (
    formValues: SignInformValues,
    { setFieldError }: FormProperties
  ) => {
    submitForm(formValues, {
      onSuccess: (response) => {
        dispatch(setAccessToken(response.data.accessToken))

        Cookies.set('remember-me', rememberCheckbox ? 'true' : 'false', {
          expires: rememberCheckbox ? 30 : undefined,
          sameSite: 'Strict',
          secure: true,
        })
      },

      onError: (error: any) => {
        const status = error.response.status
        if (status === 401) {
          setFieldError('email', 'incorrect-credentials')
          setFieldError('password', 'incorrect-credentials')
        } else if (status === 403) {
          setFieldError('email', 'inactive-account')
          setFieldError('password', 'inactive-account')
        }

        setFetchError(true)
      },
    })
  }

  return {
    setRememberCheckbox,
    formInitialValues,
    submitHandler,
    authorizing,
    fetchError,
  }
}
