import { ActivityCard } from './components'
import useCalendar from './useCalendar'

const Calendar = () => {
  const {
    learningActivitiesData,
    containerOffset,
    containerNav,
    container,
    t,
  } = useCalendar()

  return (
    <div className='w-full mx-auto sm:max-w-[1556px] h-[78vh]'>
      <div className='flex h-full flex-col'>
        <div
          ref={container}
          className='isolate drop-shadow-lg rounded-lg flex flex-auto flex-col overflow-auto bg-white'
        >
          <div
            style={{ width: '1548px' }}
            className='flex max-w-full flex-none flex-col sm:max-w-none'
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
                <div className='flex items-center w-50 justify-center py-3'>
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    {t('mon')}
                  </span>
                </div>
                <div className='flex items-center w-50  justify-center py-3'>
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    {t('tue')}
                  </span>
                </div>
                <div className='flex items-center w-50  justify-center py-3'>
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    {t('wed')}
                  </span>
                </div>
                <div className='flex items-center w-50  justify-center py-3'>
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    {t('thu')}
                  </span>
                </div>
                <div className='flex items-center w-50  justify-center py-3'>
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    {t('fri')}
                  </span>
                </div>
                <div className='flex items-center w-50  justify-center py-3'>
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    {t('sat')}
                  </span>
                </div>
                <div className='flex items-center w-50  justify-center py-3'>
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
                  style={{
                    gridTemplateRows: 'repeat(30, minmax(3.58rem, 1fr))',
                  }}
                >
                  <div ref={containerOffset} className='row-end-1 h-1'></div>

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
                <ol className='col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:grid-rows-30 sm:pr-8'>
                  {learningActivitiesData?.map((activity, i) => {
                    return (
                      <ActivityCard
                        activity={activity}
                        key={activity._id}
                        index={i}
                      />
                    )
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
