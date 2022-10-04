import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LanguageSelector, AuthQuestion } from 'components'
import { Popover, Transition } from '@headlessui/react'
import { HeaderProps } from './types.d'
import { useTranslate } from 'hooks'
import { Fragment } from 'react'
import Link from 'next/link'

const Header: React.FC<HeaderProps> = (props) => {
  const { setBlurContent } = props

  return (
    <Popover className='relative bg-white shadow'>
      <div className='mx-auto w-screen shadow-md px-4 sm:px-6 fixed bg-white z-[99] top-0 left-0'>
        <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <p
              className='text-4xl cursor-pointer font-bold tracking-tight text-gray-900'
              onClick={() => window.scrollTo(0, 0)}
            >
              Semester
            </p>
          </div>

          <div className='w-full flex items-center justify-end'>
            <LanguageSelector />

            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button
                className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                onClick={() => setBlurContent(true)}
              >
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>

            <div className='hidden md:block'>
              <Link href='/log-in'>
                <a className='ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                  {useTranslate('auth:log-in')}
                </a>
              </Link>

              <Link href='/sign-up'>
                <a className='ml-6 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
                  {useTranslate('auth:sign-up')}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Transition
        leaveFrom='opacity-100 scale-100'
        enterTo='opacity-100 scale-100'
        enterFrom='opacity-0 scale-95'
        enter='duration-200 ease-out'
        leaveTo='opacity-0 scale-95'
        leave='duration-100 ease-in'
        as={Fragment}
      >
        <Popover.Panel
          focus
          className='fixed inset-x-0 top-0 z-[999] origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 z-[99] divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div className='flex justify-start lg:w-0 lg:flex-1'>
                  <p className='text-4xl cursor-pointer font-bold tracking-tight text-gray-900'>
                    Semester
                  </p>
                </div>
                <div className='-mr-2' onClick={() => setBlurContent(false)}>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div>
                <Link href='/log-in'>
                  <a className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
                    {useTranslate('auth:log-in')}
                  </a>
                </Link>

                <AuthQuestion type='log-in' />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
