import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'
import { calendar } from 'public'
import { Fragment } from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='relative bg-gray-50'>
      <Popover className='relative bg-white'>
        <div className='mx-auto w-screen shadow-md px-4 sm:px-6 fixed bg-white z-[99999] top-0 left-0'>
          <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <a href='#'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
                  Semester
                </h1>
              </a>
            </div>

            <div className='items-center justify-end md:flex md:flex-1 lg:w-0'>
              <a
                href='#'
                className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              >
                შესვლა
              </a>
              <a
                href='#'
                className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                რეგისტრაცია
              </a>
            </div>
          </div>
        </div>
      </Popover>

      <main className='lg:relative h-screen mt-[80px] lg:mt-0'>
        <div className='mx-auto w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 sm:px-8 lg:w-1/2 xl:pr-16'>
            <h1 className='text-4xl lg:mt-14 flex flex-col gap-2 sm:gap-3 lg:gap-4 font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>დაგეგმე სასწავლო</span>{' '}
              <span className='block text-indigo-600 xl:inline'>სემესტრი</span>
            </h1>
            <p className='mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Semester-ის საშუალებით შენ შეგიძლია ერთ სივრცეში დაგეგმო
              საუნევერსიტეტო სასწავლო განრიგი.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
                >
                  დაწყება
                </a>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg'
                >
                  გატესტვა
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2'>
          <div className='absolute inset-0 h-full w-full object-cover'>
            <Image
              className='object-cover'
              alt='quote image'
              priority={true}
              src={calendar}
              layout='fill'
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
