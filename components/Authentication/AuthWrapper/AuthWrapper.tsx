import { AuthWrapperProps } from './types.d'
import { NoAccount } from 'components/shared'

const AuthWrapper: React.FC<AuthWrapperProps> = (props) => {
  const { children, page } = props

  return (
    <>
      <div className='flex min-h-full overflow-y-auto w-full flex-col lg:justify-center pt-4 sm:pt-12 pb-4 px-4 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <p className='text-4xl text-center cursor-default font-bold tracking-tight text-gray-900'>
            Semester
          </p>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            {page === 'log-in'
              ? 'Log in to your account'
              : 'Sign in to your account'}
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-8'>
            {children}
          </div>

          {page === 'log-in' && <NoAccount />}
        </div>
      </div>
    </>
  )
}

export default AuthWrapper
