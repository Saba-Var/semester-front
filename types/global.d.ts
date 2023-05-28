import type { ReactElement, ReactNode } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { DehydratedState } from 'react-query'
import type { FormikHelpers } from 'formik'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

export type AppPropsWithLayout = AppProps & {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode
    dehydratedState: DehydratedState
  }
  pageProps: {
    dehydratedState: DehydratedState
  }
}

export type NextPageWithSidebarLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type SetState<T> = Dispatch<SetStateAction<T>>

export type SignUpFormValues = {
  confirmPassword: string
  password: string
  username: string
  email: string
}

export type SignInformValues = {
  rememberMe: boolean
  password: string
  email: string
}

export type AccessToken = {
  accessToken: string
}

export type AuthState = {
  accessToken: string
}

export type Status = {
  status: number
}

export type Message = {
  message: string
}

export type Email = {
  email: string
}

export type ResetPasswordReq = {
  confirmPassword: string
  accessToken: string
  password: string
}

export type Passwords = {
  confirmPassword: string
  password: string
}

// should be deleted
export type FormikSubmitHandler<Values> = (
  values: Values,
  formikHelpers: FormikHelpers<Values>
) => void | Promise<any>
