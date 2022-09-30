import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, GoogleIcon } from 'components'
import { GetStaticProps } from 'next'

const LogIn = () => {
  return (
    <div className='flex flex-col h-screen items-center w-full'>
      <AuthWrapper page='log-in'>
        <>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <div className='mt-1'>
                <input
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  name='email'
                  type='email'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <input
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  type='password'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <label className='text-sm text-gray-900 flex gap-2 items-center cursor-pointer'>
                <input
                  className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-transparent'
                  name='remember-me'
                  type='checkbox'
                />
                <span className='select-none'>Remember me</span>
              </label>

              <div className='text-sm'>
                <a className='font-medium cursor-pointer text-indigo-600 hover:text-indigo-500'>
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                type='submit'
              >
                Log in
              </button>
            </div>
          </form>

          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='bg-white px-2 text-gray-500'>
                  Or continue with
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
        </>
      </AuthWrapper>
    </div>
  )
}

export default LogIn

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['auth', 'common', 'home'])),
    },
  }
}
