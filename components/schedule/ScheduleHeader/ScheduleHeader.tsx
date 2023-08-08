import { ScheduleHeaderProps } from './types'
import { useTranslation } from 'next-i18next'
import { AddEventForm } from './components'
import { longDateFormat } from 'utils'

const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({
  isCurrentSemester,
  semesterName,
  endingDate,
  startDate,
}) => {
  const { t, i18n } = useTranslation('')

  return (
    <header className='flex flex-none items-center justify-between border-gray-200 pb-4'>
      <h2 className='text-lg 3xl:text-xl text-gray-700 font-medium leading-6'>
        {t('semester')}: <span className='!text-gray-900'>{semesterName}</span>
      </h2>

      <div>
        <div className='text-sm text-gray-500'>
          {t('start_date')}:{' '}
          <time dateTime={startDate}>
            {longDateFormat(startDate, i18n.language)}
          </time>
        </div>

        {endingDate && (
          <div className='text-sm text-gray-500'>
            {t('end_date')}:{' '}
            <time dateTime={endingDate!}>
              {longDateFormat(endingDate, i18n.language)}
            </time>
          </div>
        )}
      </div>

      {isCurrentSemester && <AddEventForm />}
    </header>
  )
}

export default ScheduleHeader
