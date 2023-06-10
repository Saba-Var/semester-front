import { Menu, Transition } from '@headlessui/react'
import useAllSemesters from './useAllSemesters'
import { classNames } from 'utils'
import { Fragment } from 'react'
import Link from 'next/link'
import {
  EllipsisHorizontalIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'

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
          <div className='flex justify-between items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6'>
            <div className='text-lg font-medium leading-6 text-gray-900'>
              {semester.name}
            </div>

            <div className='font-medium text-yellow-500'>
              {semester.isCurrentSemester ? 'Current' : 'Past'}
            </div>
          </div>

          <div className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
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
              <Menu as='div' className='relative'>
                <Menu.Button className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>Semesters</span>
                  <EllipsisHorizontalIcon
                    className='h-7 w-7'
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
                  <Menu.Items className='absolute -top-20 left-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block p-3 py-2 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Edit
                          <span className='sr-only'>, {semester.name}</span>
                        </a>
                      )}
                    </Menu.Item>
                    <hr />
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block p-3 py-2 text-sm border-none leading-6 text-red-700'
                          )}
                        >
                          Delete
                          <span className='sr-only'>, {semester.name}</span>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Link href={`/schedule/${semester._id}`}>
                <div className='flex text-blue-700 font-medium cursor-pointer items-center'>
                  <p>View</p>
                  <ChevronRightIcon width={24} height={24} />
                </div>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default AllSemesters
