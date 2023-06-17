import useActivityCard from './useActivityCard'
import { ACTIVITY_COLORS } from 'CONSTANTS'
import { ActivityCardProps } from './types'
import {
  LearningActivityForm,
  DeleteButtonAndModal,
  SlideOver,
} from 'components'

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  const {
    deleteLearningActivityMutation,
    updateActivityHandler,
    setIsDeleteModalOpen,
    setIsInfoModalOpen,
    isDeleteModalOpen,
    isInfoModalOpen,
    columnPosition,
    rowPosition,
    rowSpan,
    form,
    t,
  } = useActivityCard(activity)

  return (
    <li
      style={{
        gridRow: `${rowPosition} / span ${rowSpan}`,
        gridColumn: `${columnPosition}`,
      }}
      onClick={() => setIsInfoModalOpen(true)}
      className={`mt-px relative flex sm:col-start-3 transition-all overflow-hidden rounded-lg activityCard ${
        isInfoModalOpen ? 'activityCard-active' : ''
      }`}
    >
      {isInfoModalOpen && (
        <SlideOver
          title={`${activity.subjectName}, ${activity.startingTime}-${activity.endingTime}`}
          submitHandler={form.handleSubmit(updateActivityHandler)}
          setOpen={setIsInfoModalOpen}
          open={isInfoModalOpen}
          openLeft={
            activity.weekday === 'Saturday' || activity.weekday === 'Sunday'
          }
        >
          <LearningActivityForm form={form} />
        </SlideOver>
      )}

      <div
        draggable
        style={{
          backgroundColor:
            ACTIVITY_COLORS[activity.activityType]?.[
              isInfoModalOpen ? 'hover' : 'default'
            ],
          height: `${rowSpan * 3.3}rem`,
        }}
        className={`group absolute !overflow-hidden inset-1 flex flex-col border-[2px] border-white overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100 hover:shadow-md transition duration-200 ease-in-out hover:cursor-pointer ${
          isInfoModalOpen ? 'shadow-md' : ''
        }`}
      >
        <div className='flex flex-wrap'>
          <div className='flex w-full justify-between'>
            <p className='font-semibold mr-1 text-blue-700 line-clamp-1'>
              {activity.subjectName},
            </p>

            <DeleteButtonAndModal
              submitHandler={deleteLearningActivityMutation}
              title={t('schedule:delete_learning_activity')}
              targetName={activity.subjectName}
              setOpen={setIsDeleteModalOpen}
              open={isDeleteModalOpen}
              disabled={false}
            />
          </div>
          <p className='text-blue-500 group-hover:text-blue-700'>
            <time>{activity.startingTime}</time>
            <span>-</span>
            <time>{activity.endingTime}</time>
          </p>
        </div>

        <p className='text-blue-700 line-clamp-1'>{t(activity.teacherName)}</p>
      </div>
    </li>
  )
}

export default ActivityCard
