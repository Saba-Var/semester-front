import { AuthQuestionProps } from './types.d'
import { useTranslate } from 'hooks'
import Link from 'next/link'
import React from 'react'

const AuthQuestion: React.FC<AuthQuestionProps> = (props) => {
  const { type } = props

  return (
    <p className='text-center mt-4 text-base lg:text-lg font-medium text-gray-500'>
      {useTranslate(
        `auth:${type === 'create-account' ? 'have-account' : 'no-account'}`
      )}{' '}
      <Link href={type === 'create-account' ? '/log-in' : '/sign-up'}>
        <a className='text-blue-600 hover:text-blue-500'>
          {useTranslate(
            `auth:${type === 'create-account' ? 'log-in' : 'sign-up'}`
          )}
        </a>
      </Link>
    </p>
  )
}

export default AuthQuestion
