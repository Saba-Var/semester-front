import { RememberMeProps } from './types.d'
import { useTranslate } from 'hooks'

const RememberMe: React.FC<RememberMeProps> = (props) => {
  const { setRememberCheckbox } = props

  return (
    <label className='text-sm lg:text-base text-gray-900 flex gap-2 items-center cursor-pointer'>
      <input
        onChange={(e) => {
          setRememberCheckbox(e.target.checked)
        }}
        className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-transparent'
        name='remember-me'
        type='checkbox'
      />
      <span className='select-none'>{useTranslate('auth:remember-me')}</span>
    </label>
  )
}

export default RememberMe
