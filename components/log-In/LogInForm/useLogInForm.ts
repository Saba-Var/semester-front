import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { SignInformValues } from 'types'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { authorization } from 'services'
import { setAccessToken } from 'slices'
import { useRouter } from 'next/router'
import { logInSchema } from 'schemas'
import { useState } from 'react'
import Cookies from 'js-cookie'

export const useLogInForm = () => {
  const [rememberCheckbox, setRememberCheckbox] = useState(false)

  const { mutate: submitForm, isLoading: authorizing } =
    useMutation(authorization)

  const dispatch = useDispatch()
  const router = useRouter()

  const form = useForm({
    resolver: yupResolver(logInSchema),
    defaultValues: {
      password: '',
      email: '',
    },
    mode: 'all',
  })

  const { handleSubmit, setError } = form

  const submitHandler: SubmitHandler<SignInformValues> = (formValues) => {
    submitForm(formValues, {
      onSuccess: (response) => {
        dispatch(setAccessToken(response?.data?.accessToken))

        Cookies.set('id', response?.data?.id, {
          expires: rememberCheckbox ? 30 : undefined,
          sameSite: 'Strict',
          secure: true,
        })

        Cookies.set('remember-me', rememberCheckbox ? 'true' : 'false', {
          expires: rememberCheckbox ? 30 : undefined,
          sameSite: 'Strict',
          secure: true,
        })

        router.push('/')
      },

      onError: (error: any) => {
        const status = error?.response?.status
        if (status === 401) {
          setError('email', {
            message: 'incorrect-credentials',
          })
          setError('password', {
            message: 'incorrect-credentials',
          })
        } else if (status === 403) {
          setError('email', {
            message: 'inactive-account',
          })
          setError('password', {
            message: 'inactive-account',
          })
        }
      },
    })
  }

  return {
    setRememberCheckbox,
    submitHandler,
    handleSubmit,
    authorizing,
    form,
  }
}
