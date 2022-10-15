import { useTranslate } from 'hooks'

const ForgetPassword = () => {
  return (
    <div className='text-sm'>
      <a className='font-medium cursor-pointer text-blue-600 hover:text-blue-500'>
        {useTranslate('auth:forget-password')}
      </a>
    </div>
  )
}

export default ForgetPassword
