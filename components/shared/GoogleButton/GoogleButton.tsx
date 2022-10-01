import { GoogleButtonProps } from './types.d'
import { GoogleIcon } from 'components'
import { useTranslate } from 'hooks'

const GoogleButton: React.FC<GoogleButtonProps> = (props) => {
  const { page } = props

  return (
    <div className='mt-6'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='bg-white px-2 text-gray-500'>
            {useTranslate(
              `auth:${
                page === 'log-in' ? 'continue-with' : 'register-with-google'
              }`
            )}
          </span>
        </div>
      </div>

      <div className='mt-6 text-center'>
        <div>
          <button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'>
            <GoogleIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GoogleButton
