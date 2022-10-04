import { useTranslate } from 'hooks'

const RememberMe = () => {
  return (
    <label className='text-sm text-gray-900 flex gap-2 items-center cursor-pointer'>
      <input
        className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-transparent'
        name='remember-me'
        type='checkbox'
      />
      <span className='select-none'>{useTranslate('auth:remember-me')}</span>
    </label>
  )
}

export default RememberMe
