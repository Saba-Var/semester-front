import { useTranslate } from 'hooks'

const ForgetPassword = () => {
  return (
    <div className='text-sm'>
      <a className='font-medium cursor-pointer text-blue-600 hover:underline hover:text-blue-700'>
        {useTranslate('auth:forget-password')}
      </a>
    </div>
  )
}

export default ForgetPassword
