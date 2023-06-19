import { Dialog, Menu, Transition } from '@headlessui/react'
import { navigation, userNavigation } from 'CONSTANTS'
import { useSidebarLayout } from './useSidebarLayout'
import { SidebarLayoutProps } from './types.d'
import { LanguageSelector } from 'components'
import { DesktopSidebar } from './components'
import { Fragment } from 'react'
import { classNames } from 'utils'
import Link from 'next/link'
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
  BellIcon,
} from '@heroicons/react/24/outline'

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const {
    isDesktopSideBarOpen,
    setSidebarOpen,
    logoutMutation,
    sidebarOpen,
    canViewPage,
    pathname,
    lang,
    t,
  } = useSidebarLayout()

  return (
    <>
      {canViewPage && (
        <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as='div'
              className='relative z-40 md:hidden'
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter='transition-opacity ease-linear duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity ease-linear duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
              </Transition.Child>

              <div className='fixed inset-0 z-40 flex'>
                <Transition.Child
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='-translate-x-full'
                  enterTo='translate-x-0'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-0'
                  leaveTo='-translate-x-full'
                >
                  <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-blue-700 pt-5 pb-4'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-300'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-300'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <div className='absolute top-0 right-0 -mr-12 pt-2'>
                        <button
                          type='button'
                          className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className='sr-only'>Close sidebar</span>
                          <XMarkIcon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className='flex flex-shrink-0 items-center px-4'>
                      <p className='text-gray-200 font-medium text-3xl'>
                        Semester
                      </p>
                    </div>
                    <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                      <nav className='space-y-1 px-2'>
                        {navigation.map((item) => (
                          <Link key={item.name.en} href={item.href}>
                            <a
                              className={classNames(
                                pathname === item.href
                                  ? 'bg-blue-800 text-white'
                                  : 'text-blue-100 hover:bg-blue-600',
                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                              )}
                              onClick={() => setSidebarOpen(false)}
                            >
                              <item.icon
                                className='mr-4 h-6 w-6 flex-shrink-0 text-blue-300'
                                aria-hidden='true'
                              />
                              {t(item.name[lang])}
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className='w-14 flex-shrink-0' aria-hidden='true'></div>
              </div>
            </Dialog>
          </Transition.Root>

          <DesktopSidebar logoutMutation={logoutMutation} />

          <div
            className={`flex flex-1 flex-col ease-anm ${
              isDesktopSideBarOpen ? 'md:ml-60' : 'md:ml-20'
            }`}
          >
            <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow'>
              <button
                type='button'
                className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden'
                onClick={() => setSidebarOpen(true)}
              >
                <span className='sr-only'>Open sidebar</span>
                <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
              </button>
              <div className='flex flex-1 justify-between px-4'>
                <div className='flex flex-1'></div>
                <div className='ml-4 flex items-center md:ml-6'>
                  <button
                    type='button'
                    className='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 focus:ring-offset-2'
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  <LanguageSelector />

                  {/* Profile dropdown */}
                  <Menu as='div' className='relative ml-3'>
                    <div>
                      <Menu.Button className='flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name.en}>
                            {() => (
                              <div
                                onClick={() => {
                                  item.href === '/overview' && logoutMutation()
                                }}
                                className={
                                  'block px-4 py-3 text-sm text-gray-700 hover:bg-blue-500 hover:text-white'
                                }
                              >
                                {t(item.name[lang])}
                              </div>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <main>
              <div className='py-2'>
                <div className='mx-auto px-4 sm:px-6 md:px-8'>
                  <div className='3xl:py-3'>{children}</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarLayout
