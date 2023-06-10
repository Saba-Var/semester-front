import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import useAllSemesters from './useAllSemesters'
import { SemesterMenu } from './components'
import Link from 'next/link'

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

            <SemesterMenu semester={semester} />
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

            {semester.endDate && (
              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>End date</dt>
                <dd className='text-gray-700'>
                  <time dateTime={semester.endDate}>
                    {new Date(semester.endDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </dd>
              </div>
            )}

            <div className='flex justify-between gap-x-4 py-3'>
              <div className='text-gray-500'>Total learning activities</div>
              <div className='text-gray-700'>
                {semester.learningActivities.length}
              </div>
            </div>

            <div className='flex justify-between items-center gap-x-4 py-3'>
              <div className='text-gray-500'>Semester status</div>
              <div
                className={`bg-emerald-500 py-1 px-3 text-base rounded-md text-white ${
                  !semester.isCurrentSemester && 'bg-gray-200 text-gray-700'
                }`}
              >
                {semester.isCurrentSemester ? 'Current' : 'Past'}
              </div>
            </div>

            <div className='flex justify-between items-center gap-x-4 py-3'>
              <TrashIcon
                className='text-red-700 cursor-pointer'
                width={20}
                height={20}
              />

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
