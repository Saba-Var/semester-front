import { Fragment, useRef } from 'react'
import { classNames } from 'utils'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

const Calendar = () => {
  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)

  return (
    <div className='flex h-full flex-col'>
      <header className='flex flex-none items-center justify-between border-gray-200 px-6 py-4'>
        <h1 className='text-base font-semibold leading-6 text-gray-900'>
          <time dateTime='2022-01'>
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
            }).format(new Date())}
          </time>
        </h1>
        <div className='flex items-center'>
          <div className='relative flex items-center rounded-md bg-white shadow-sm md:items-stretch'>
            <div
              className='pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300'
              aria-hidden='true'
            />
            <button
              type='button'
              className='flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50'
            >
              <span className='sr-only'>Previous week</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </button>
            <button
              type='button'
              className='hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block'
            >
              Today
            </button>
            <span className='relative -mx-px h-5 w-px bg-gray-300 md:hidden' />
            <button
              type='button'
              className='flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50'
            >
              <span className='sr-only'>Next week</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden md:ml-4 md:flex md:items-center'>
            <Menu as='div' className='relative'>
              <Menu.Button
                type='button'
                className='flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              >
                Week view
                <ChevronDownIcon
                  className='-mr-1 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Day view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Week view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Month view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Year view
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className='ml-6 h-6 w-px bg-gray-300' />
            <button
              type='button'
              className='ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Add event
            </button>
          </div>
          <Menu as='div' className='relative ml-6 md:hidden'>
            <Menu.Button className='-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Open menu</span>
              <EllipsisHorizontalIcon className='h-5 w-5' aria-hidden='true' />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Create event
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Go to today
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Day view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Week view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Month view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Year view
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      <div
        ref={container}
        className='isolate drop-shadow-lg rounded-lg flex flex-auto flex-col overflow-auto bg-white'
      >
        <div
          style={{ width: '165%' }}
          className='flex max-w-full flex-none flex-col sm:max-w-none xl:max-w-full'
        >
          <div
            ref={containerNav}
            className='sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8'
          >
            <div className='grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden'>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  M
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  T
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'>
                  W
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  T
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  F
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  S
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  S
                </span>
              </button>
            </div>

            <div className='-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid'>
              <div className='col-end-1 w-14' />
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  Mon
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  Tue
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  Wed
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  Thu
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  Fri
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  Sat
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  Sun
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-auto'>
            <div className='sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100' />
            <div className='grid flex-auto grid-cols-1 grid-rows-1'>
              {/* Horizontal lines */}
              <div
                className='col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100'
                style={{ gridTemplateRows: 'repeat(30, minmax(3.5rem, 1fr))' }}
              >
                <div ref={containerOffset} className='row-end-1 h-2'></div>

                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    9
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    10
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    11
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    12
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    13
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    14
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    15
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    16
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    17
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    18
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    19
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    20
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    21
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    22
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-5 text-right text-xs leading-5 text-gray-400'>
                    23
                  </div>
                </div>
                <div />
                <div />
              </div>

              {/* Vertical lines */}
              <div className='col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7'>
                <div className='col-start-1 row-span-full' />
                <div className='col-start-2 row-span-full' />
                <div className='col-start-3 row-span-full' />
                <div className='col-start-4 row-span-full' />
                <div className='col-start-5 row-span-full' />
                <div className='col-start-6 row-span-full' />
                <div className='col-start-7 row-span-full' />
                <div className='col-start-8 row-span-full w-8' />
              </div>

              {/* Events */}
              <ol className='col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8'>
                <li
                  className='relative mt-px flex sm:col-start-3'
                  style={{ gridRow: '74 / span 12' }}
                >
                  <a
                    href='#'
                    className='group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100'
                  >
                    <p className='order-1 font-semibold text-blue-700'>
                      Breakfast
                    </p>
                    <p className='text-blue-500 group-hover:text-blue-700'>
                      <time dateTime='2022-01-12T06:00'>6:00 AM</time>
                    </p>
                  </a>
                </li>
                <li
                  className='relative mt-px flex sm:col-start-3'
                  style={{ gridRow: '92 / span 30' }}
                >
                  <a
                    href='#'
                    className='group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100'
                  >
                    <p className='order-1 font-semibold text-pink-700'>
                      Flight to Paris
                    </p>
                    <p className='text-pink-500 group-hover:text-pink-700'>
                      <time dateTime='2022-01-12T07:30'>7:30 AM</time>
                    </p>
                  </a>
                </li>
                <li
                  className='relative mt-px hidden sm:col-start-6 sm:flex'
                  style={{ gridRow: '122 / span 24' }}
                >
                  <a
                    href='#'
                    className='group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200'
                  >
                    <p className='order-1 font-semibold text-gray-700'>
                      Meeting with design team at Disney
                    </p>
                    <p className='text-gray-500 group-hover:text-gray-700'>
                      <time dateTime='2022-01-15T10:00'>10:00 AM</time>
                    </p>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
