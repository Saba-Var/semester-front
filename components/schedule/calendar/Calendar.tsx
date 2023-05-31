import { PlusIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import { useRef } from 'react'

const Calendar = () => {
  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)

  const { t } = useTranslation()

  return (
    <div className='flex h-full flex-col'>
      <header className='flex flex-none items-center justify-between border-gray-200 py-4'>
        <h2 className='text-lg font-semibold leading-6 text-gray-900'>
          <time dateTime='2022-01'>
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
            }).format(new Date())}
          </time>
        </h2>
        <div className='flex items-center'>
          <div className='relative flex items-center rounded-md bg-white shadow-sm md:items-stretch'>
            <div
              className='pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300'
              aria-hidden='true'
            />
          </div>
          <div className='md:ml-4 md:flex md:items-center'>
            <button
              type='button'
              className='ml-6 rounded-md items-center justify-center flex gap-1 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              <span>{t('add')}</span>
              <PlusIcon width={24} height={24} />
            </button>
          </div>
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
                  {t('schedule:monday_first_letter')}
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  {t('schedule:tuesday_first_letter')}
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'>
                  {t('schedule:wednesday_first_letter')}
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  {t('schedule:thursday_first_letter')}
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  {t('schedule:friday_first_letter')}
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  {t('schedule:saturday_first_letter')}
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pb-3 pt-2'
              >
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  {t('schedule:sunday_first_letter')}
                </span>
              </button>
            </div>

            <div className='-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid'>
              <div className='col-end-1 w-14' />
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  {t('mon')}
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  {t('tue')}
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  {t('wed')}
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  {t('thu')}
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  {t('fri')}
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  {t('sat')}
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='items-center justify-center font-semibold text-gray-900'>
                  {t('sun')}
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
