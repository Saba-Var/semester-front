import useActivityCard from './useActivityCard'
import { ACTIVITY_COLORS } from 'CONSTANTS'
import { ActivityCardProps } from './types'
import {
  LearningActivityForm,
  DeleteButtonAndModal,
  SlideOver,
} from 'components'
import { LearningActivityFormData } from 'types'

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const {
    deleteLearningActivityMutation,
    isLearningActivityDeleting,
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
        backgroundColor:
          ACTIVITY_COLORS[activity.activityType]?.[
            isInfoModalOpen ? 'hover' : 'default'
          ],
      }}
      onClick={() => setIsInfoModalOpen(true)}
      className={`mt-2 w-[98%] mx-auto relative flex sm:col-start-3 border-[2px] hover:cursor-pointer hover:shadow-md border-white transition-all overflow-hidden rounded-lg activityCard ${
        isInfoModalOpen ? 'activityCard-active shadow-md' : ''
      } 
    `}
    >
      {isInfoModalOpen && (
        <SlideOver
          title={`${activity.subjectName}, ${activity.startingTime}-${activity.endingTime}`}
          submitHandler={form.handleSubmit(updateActivityHandler)}
          setOpen={setIsInfoModalOpen}
          open={isInfoModalOpen}
          onClose={() =>
            form.reset(activity as unknown as LearningActivityFormData)
          }
          openLeft={
            activity.weekday === 'Saturday' || activity.weekday === 'Sunday'
          }
        >
          <LearningActivityForm form={form} />
        </SlideOver>
      )}

      <div
        className={`group absolute !overflow-hidden h-full inset-1 flex flex-col overflow-y-auto rounded-lg p-1 text-xs leading-5 duration-200 ease-in-out`}
      >
        <div className='flex flex-wrap'>
          <div className='flex w-full items-center justify-between'>
            <p className='font-semibold mr-1 text-blue-700 line-clamp-1'>
              {activity.subjectName},
            </p>

            <DeleteButtonAndModal
              submitHandler={deleteLearningActivityMutation}
              title={t('schedule:delete_learning_activity')}
              disabled={isLearningActivityDeleting}
              classes={`${!isInfoModalOpen ? 'hidden' : ''} group-hover:block`}
              targetName={activity.subjectName}
              setOpen={setIsDeleteModalOpen}
              open={isDeleteModalOpen}
              height={17}
              width={17}
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
