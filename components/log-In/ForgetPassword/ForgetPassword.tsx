import { useTranslate } from 'hooks'
import Link from 'next/link'

const ForgetPassword = () => {
  return (
    <div className='text-sm lg:text-base'>
      <Link href='/reset'>
        <a className='font-medium cursor-pointer text-blue-600 hover:underline hover:text-blue-700'>
          {useTranslate('auth:forget-password')}
        </a>
      </Link>
    </div>
  )
}

export default ForgetPassword
