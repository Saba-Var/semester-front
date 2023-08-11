import type { ReactElement, ReactNode } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { DehydratedState } from 'react-query'
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

export type SemesterEditData = { startDate: string; name: string }

export enum Weekday {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export enum ActivityType {
  PRACTICE = 'Practice',
  LECTURE = 'Lecture',
  SEMINAR = 'Seminar',
  OTHER = 'Other',
  LAB = 'Lab',
}

export interface User {
  activeSemester: string | null
  semesters: Semester[]
  password?: string
  username: string
  active: boolean
  image?: {
    url: string
    type: 'dicebear' | 'upload'
  } | null
  email: string
  _id: string
}

export interface Semester {
  learningActivities: LearningActivity[]
  isCurrentSemester: boolean
  endDate: string | null
  startDate: string
  name: string
  _id: string
  user: string
}

export interface ActivityPartial {
  _id: string
  startingTime: string
  endingTime: string
  weekday: Weekday
}

export interface LearningActivityFormData {
  activityType: ActivityType
  startingTime: string
  subjectName: string
  teacherName: string
  endingTime: string
  weekday: Weekday
  semester: string
}

export interface LearningActivity extends LearningActivityFormData {
  semester: Semester
  user: User
  _id: string
}

export type ActivitiesCollisionsInfo = { [day: string]: string[][] }
