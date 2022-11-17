import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useTranslate, useRequestsExceed } from 'hooks'
import type { GetStaticProps } from 'next'

const RequestsExceed = () => {
  const { goBack } = useRequestsExceed()

  return (
    <div className='h-screen'>
      <div className='min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              429
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l flex flex-col gap-2 sm:border-gray-200 sm:pl-6'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  {useTranslate('auth:request-limit-exceed')}
                </h2>
                <p className='mt-1 text-base text-gray-500'>
                  {useTranslate('auth:request-limit-exceed-info')}
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <button
                  type='button'
                  onClick={() => goBack()}
                  className='inline-flex items-center gap-1 rounded-md border border-transparent bg-blue-600 pl-3 pr-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                  <ArrowLeftIcon className='h-4 w-5' />
                  <p>{useTranslate('common:go-back')}</p>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default RequestsExceed

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['auth', 'common', 'home'])),
    },
  }
}
