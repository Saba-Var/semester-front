import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { SignInformValues } from 'types'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { authorization } from 'services'
import { setAccessToken } from 'slices'
import { useRouter } from 'next/router'
import { logInSchema } from 'schemas'
import Cookies from 'js-cookie'

export const useLogInForm = () => {
  const { mutate: submitForm, isLoading: authorizing } =
    useMutation(authorization)

  const dispatch = useDispatch()
  const { t } = useTranslation()
  const router = useRouter()

  const form = useForm({
    resolver: yupResolver(logInSchema),
    defaultValues: {
      rememberMe: false,
      password: '',
      email: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, setError } = form

  const submitHandler: SubmitHandler<SignInformValues> = (formValues) => {
    submitForm(formValues, {
      onSuccess: (response, variables: SignInformValues) => {
        dispatch(setAccessToken(response?.data?.accessToken))

        const { rememberMe } = variables

        Cookies.set('_id', response?.data?._id, {
          expires: rememberMe ? 30 : undefined,
          sameSite: 'Strict',
          secure: true,
        })

        Cookies.set('rememberMe', rememberMe ? 'true' : 'false', {
          expires: rememberMe ? 30 : undefined,
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
    submitHandler,
    handleSubmit,
    authorizing,
    form,
    t,
  }
}
