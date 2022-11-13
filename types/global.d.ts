import { Dispatch, SetStateAction } from 'react'
import { DehydratedState } from 'react-query'
import { Session } from 'next-auth'

export type AppPropsType = {
  dehydratedState: DehydratedState
  session: Session
}

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
