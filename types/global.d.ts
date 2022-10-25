import { Dispatch, SetStateAction } from 'react'
import { DehydratedState } from 'react-query'
import { Session } from 'next-auth'

export type AppPropsType = {
  dehydratedState: DehydratedState
  session: Session
}

export type SetState<T> = Dispatch<SetStateAction<T>>

export type SignUpFormData = {
  confirmPassword: string
  password: string
  username: string
  email: string
}

export type SignInFormData = {
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

export type FormProperties = {
  setFieldError: (field: string, message: string) => void
  setFieldValue: (field: string, value: string) => void
  resetForm: () => void
}
