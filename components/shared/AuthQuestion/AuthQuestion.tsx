import { AuthQuestionProps } from './types.d'
import { useTranslate } from 'hooks'
import Link from 'next/link'
import React from 'react'

const AuthQuestion: React.FC<AuthQuestionProps> = (props) => {
  const { type } = props
  return (
    <p className='text-center mt-3 text-base font-medium text-gray-500'>
      {useTranslate(
        `auth:${type === 'sign-up' ? 'have-account' : 'no-account'}`
      )}{' '}
      <Link href={type === 'sign-up' ? '/log-in' : '/sign-up'}>
        <a className='text-blue-600 hover:text-blue-500'>
          {useTranslate(`auth:${type === 'sign-up' ? 'log-in' : 'sign-up'}`)}
        </a>
      </Link>
    </p>
  )
}

export default AuthQuestion
