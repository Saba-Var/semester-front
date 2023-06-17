import { SlideOver, LearningActivityForm } from 'components'
import useActivityCard from './useActivityCard'
import { LearningActivityFormData } from 'types'
import { ACTIVITY_COLORS } from 'CONSTANTS'
import { ActivityCardProps } from './types'
import { useForm } from 'react-hook-form'

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  const {
    setIsInfoModalOpen,
    isInfoModalOpen,
    columnPosition,
    rowPosition,
    setHovered,
    rowSpan,
    hovered,
    t,
  } = useActivityCard(activity)

  const form = useForm({
    defaultValues: activity as unknown as LearningActivityFormData,
  })

  return (
    <li
      style={{
        gridRow: `${rowPosition} / span ${rowSpan}`,
        gridColumn: `${columnPosition}`,
        transform: isInfoModalOpen ? 'scale(1.05)' : 'scale(1)',
        zIndex: isInfoModalOpen ? 2 : hovered ? 3 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setIsInfoModalOpen(true)}
      className='mt-px relative flex sm:col-start-3 transition-all overflow-hidden rounded-lg'
    >
      {isInfoModalOpen && (
        <SlideOver
          onClose={() => {
            form.reset()
            setHovered(false)
          }}
          title={activity.subjectName}
          setOpen={setIsInfoModalOpen}
          open={isInfoModalOpen}
        >
          <LearningActivityForm form={form} />
        </SlideOver>
      )}

      <div
        style={{
          backgroundColor:
            ACTIVITY_COLORS[activity.activityType]?.[
              hovered || isInfoModalOpen ? 'hover' : 'default'
            ],
          height: `${rowSpan * 3.5}rem`,
        }}
        className='group absolute !overflow-hidden inset-1 flex flex-col border-[2px] border-white overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100 hover:shadow-md transition duration-200 ease-in-out hover:cursor-pointer'
      >
        <div className='flex gap-1 flex-wrap'>
          <p className='font-semibold text-blue-700'>{activity.subjectName},</p>
          <p className='text-blue-500 group-hover:text-blue-700'>
            <time>{activity.startingTime}</time>
            <span>-</span>
            <time>{activity.endingTime}</time>
          </p>
        </div>

        <p className='text-blue-700'>{t(activity.teacherName)}</p>
      </div>
    </li>
  )
}

export default ActivityCard
