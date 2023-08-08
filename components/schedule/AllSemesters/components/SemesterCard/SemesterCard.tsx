import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { DeleteButtonAndModal } from 'components'
import useSemesterCard from './useSemesterCard'
import { SemesterMenu } from './components'
import { SemesterCardProps } from './types'
import { longDateFormat } from 'utils'
import Link from 'next/link'

const SemesterCard: React.FC<SemesterCardProps> = ({ semester }) => {
  const {
    deleteSemesterMutation,
    setShowDeleteModal,
    showDeleteModal,
    isDeleting,
    language,
    t,
  } = useSemesterCard(semester)

  return (
    <li className='overflow-hidden rounded-xl drop-shadow-lg bg-white border border-gray-200'>
      <div className='flex justify-between items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6'>
        <div className='text-lg break-all font-medium leading-6 text-gray-900'>
          {semester.name}
        </div>

        {!semester.endDate && <SemesterMenu semester={semester} />}
      </div>

      <div className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
        <div className='flex justify-between gap-x-4 py-3'>
          <div className='text-gray-500'>{t('start_date')}</div>
          <dd className='text-gray-700'>
            <time dateTime={semester.startDate}>
              {longDateFormat(semester.startDate, language)}
            </time>
          </dd>
        </div>

        {semester.endDate && (
          <div className='flex justify-between gap-x-4 py-3'>
            <div className='text-gray-500'>{t('end_date')}</div>
            <div className='text-gray-700'>
              <time dateTime={semester.endDate}>
                {longDateFormat(semester.endDate, language)}
              </time>
            </div>
          </div>
        )}

        <div className='flex justify-between gap-x-4 py-3'>
          <div className='text-gray-500'>
            {t('schedule:total_learning_activities')}
          </div>
          <div className='text-gray-700'>
            {semester.learningActivities.length}
          </div>
        </div>

        <div className='flex justify-between items-center gap-x-4 py-3'>
          <div className='text-gray-500'>{t('schedule:semester_status')}</div>
          <div
            className={`bg-emerald-500 py-1 px-3 text-base rounded-md text-white ${
              !semester.isCurrentSemester && '!bg-gray-200 text-gray-700'
            }`}
          >
            {semester.isCurrentSemester ? t('current') : t('ended')}
          </div>
        </div>

        <div className='flex justify-between items-center gap-x-4 py-3'>
          <DeleteButtonAndModal
            submitHandler={deleteSemesterMutation}
            title={t('schedule:delete_semester')}
            setOpen={setShowDeleteModal}
            targetName={semester.name}
            open={showDeleteModal}
            disabled={isDeleting}
          />

          <Link href={`/schedule/${semester._id}`}>
            <div className='flex text-blue-700 font-medium cursor-pointer items-center'>
              <p>{t('calendar')}</p>
              <ChevronRightIcon width={24} height={24} />
            </div>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default SemesterCard
