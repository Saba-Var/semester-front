import { AuthQuestion } from 'components/shared'
import { AuthWrapperProps } from './types.d'
import { useTranslate } from 'hooks'

const AuthWrapper: React.FC<AuthWrapperProps> = (props) => {
  const { children, page } = props

  return (
    <>
      <div className='flex h-screen overflow-y-auto w-full flex-col lg:justify-center pt-4 sm:pt-12 pb-8 px-4 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            {useTranslate(
              `auth:${page === 'log-in' ? 'log-in-to' : 'create-account'}`
            )}
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full lg:w-[450px] 2xl:w-[500px]'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-8'>
            {children}
          </div>

          <AuthQuestion type={page} />
        </div>
      </div>
    </>
  )
}

export default AuthWrapper
