import { DotsIcon, WavesIcon } from 'components'
import { useTranslate } from 'hooks'

const NewsLetter = () => {
  return (
    <div className='bg-gray-50 mb-40 mt-12'>
      <div className='bg-gray-50 pt-16 sm:pt-24'>
        <div className='relative sm:py-16'>
          <div className='hidden sm:block'>
            <div className='absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-white'>
              <DotsIcon />
            </div>
          </div>
          <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='relative overflow-hidden rounded-2xl bg-blue-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20'>
              <div
                aria-hidden='true'
                className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'
              >
                <WavesIcon />
              </div>
              <div className='relative'>
                <div className='sm:text-center'>
                  <h2 className='text-2xl font-bold tracking-tight text-white sm:text-4xl'>
                    {useTranslate('overview:subscribe-email')}
                  </h2>
                  <p className='mx-auto mt-6 max-w-2xl text-lg text-blue-200'>
                    {useTranslate('overview:update-news')}.
                  </p>
                </div>
                <form
                  action='#'
                  className='mt-12 sm:mx-auto sm:flex sm:max-w-lg'
                >
                  <div className='min-w-0 flex-1'>
                    <input
                      className='block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600'
                      placeholder={useTranslate('overview:enter-email')}
                      type='email'
                    />
                  </div>
                  <div className='mt-4 sm:mt-0 sm:ml-3'>
                    <button
                      className='block w-full rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:px-10'
                      type='button'
                    >
                      {useTranslate('overview:subscribe')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
