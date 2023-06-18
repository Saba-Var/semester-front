import { ScheduleHeaderProps } from './types'
import { useTranslation } from 'next-i18next'
import { AddEventForm } from './components'

const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({
  isCurrentSemester,
  semesterName,
  endingDate,
}) => {
  const { t } = useTranslation('')

  return (
    <header className='flex flex-none items-center justify-between border-gray-200 pb-4'>
      <h2 className='text-lg 3xl:text-xl text-gray-700 font-medium leading-6'>
        {t('semester')}: <span className='!text-gray-900'>{semesterName}</span>
      </h2>

      {!isCurrentSemester && (
        <div className='text-sm text-gray-500'>
          {t('end_date')}:{' '}
          <time dateTime={endingDate!}>
            {new Date(endingDate!).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
      )}

      <div className='flex items-center'>
        <div className='relative flex items-center rounded-md bg-white shadow-sm md:items-stretch'>
          <div
            className='pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300'
            aria-hidden='true'
          />
        </div>

        {isCurrentSemester && <AddEventForm />}
      </div>
    </header>
  )
}

export default ScheduleHeader
