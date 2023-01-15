import type { ReactElement, ReactNode } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { DehydratedState } from 'react-query'
import type { AppProps } from 'next/app'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

export type SetState<T> = Dispatch<SetStateAction<T>>

export type SignUpFormValues = {
  confirmPassword: string
  password: string
  username: string
  email: string
}

export type SignInformValues = {
  password: string
  email: string
}

export type AccessToken = {
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

export type FormProperties = {
  setFieldError: (field: string, message: string) => void
  setFieldValue: (field: string, value: string) => void
  resetForm: () => void
}

export type NextPageWithSidebarLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode
    dehydratedState: DehydratedState
  }
  pageProps: {
    dehydratedState: DehydratedState
  }
}
