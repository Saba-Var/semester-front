import { useTranslate } from 'hooks'
import Link from 'next/link'
import React from 'react'

const NoAccount = () => {
  return (
    <p className='text-center mt-6 text-base font-medium text-gray-500'>
      {useTranslate('auth:no-account')}{' '}
      <Link href='sign-up'>
        <a className='text-indigo-600 hover:text-indigo-500'>
          {useTranslate('auth:sign-up')}
        </a>
      </Link>
    </p>
  )
}

export default NoAccount
