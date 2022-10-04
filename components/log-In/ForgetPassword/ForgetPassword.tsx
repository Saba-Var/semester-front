import { useTranslate } from 'hooks'

const ForgetPassword = () => {
  return (
    <div className='text-sm'>
      <a className='font-medium cursor-pointer text-indigo-600 hover:text-indigo-500'>
        {useTranslate('auth:forget-password')}
      </a>
    </div>
  )
}

export default ForgetPassword
