import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import useAllSemesters from './useAllSemesters'
import { classNames } from 'utils'
import { Fragment } from 'react'

const AllSemesters = () => {
  const { semestersData } = useAllSemesters()

  return (
    <ul
      role='list'
      className='grid mt-14 grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8'
    >
      {semestersData?.map((semester) => (
        <li
          className='overflow-hidden rounded-xl drop-shadow-lg bg-white border border-gray-200'
          key={semester._id}
        >
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6'>
            <div className='text-lg font-medium leading-6 text-gray-900'>
              {semester.name}
            </div>
            <Menu as='div' className='relative ml-auto'>
              <Menu.Button className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Semesters</span>
                <EllipsisHorizontalIcon
                  className='h-5 w-5'
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
                <Menu.Items className='absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        View<span className='sr-only'>, {semester.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Edit<span className='sr-only'>, {semester.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <dt className='text-gray-500'>Start date</dt>
              <dd className='text-gray-700'>
                <time dateTime={semester.startDate}>
                  {new Date(semester.startDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </dd>
            </div>
            <div className='flex justify-between gap-x-4 py-3'>
              <div className='text-gray-500'>Status</div>
              <div className='flex items-start gap-x-2'>
                <div className='font-medium text-gray-900'>
                  {semester.isCurrentSemester ? 'Current' : 'Past'}
                </div>
              </div>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  )
}

export default AllSemesters
