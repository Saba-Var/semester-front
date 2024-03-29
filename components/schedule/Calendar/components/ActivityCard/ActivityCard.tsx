import useActivityCard from './useActivityCard'
import { ACTIVITY_COLORS } from 'CONSTANTS'
import { ActivityCardProps } from './types'
import { LearningActivityForm, DeleteModal, SlideOver } from 'components'

const ActivityCard: React.FC<ActivityCardProps> = ({
  setOnActivityCardClickPosition,
  learningActivityCollisions,
  isCurrentSemester,
  activity,
  form,
}) => {
  const {
    deleteLearningActivityMutation,
    isLearningActivityDeleting,
    isLearningActivityUpdating,
    updateActivityHandler,
    slideOverStateHandler,
    setIsDeleteModalOpen,
    setIsInfoModalOpen,
    onMouseDownCapture,
    openLeftSlideOver,
    collisionPosition,
    isDeleteModalOpen,
    endDragActivity,
    isInfoModalOpen,
    columnPosition,
    dragActivity,
    rowPosition,
    rowSpan,
    t,
  } = useActivityCard(
    setOnActivityCardClickPosition,
    learningActivityCollisions,
    activity,
    form
  )

  return (
    <li
      style={{
        gridRow: `${rowPosition} / span ${rowSpan}`,
        gridColumn: `${columnPosition}`,
        backgroundColor:
          ACTIVITY_COLORS[activity.activityType]?.[
            isInfoModalOpen ? 'hover' : 'default'
          ],
        zIndex: collisionPosition,
        width: `calc(100% - ${
          collisionPosition === 1 ? 0 : collisionPosition
        }rem)`,
        marginLeft: `${collisionPosition === 1 ? 0 : collisionPosition}rem`,
      }}
      onClick={() => {
        setIsInfoModalOpen(true)
        slideOverStateHandler()
      }}
      className={`mt-2 w-[98%] mx-auto relative flex sm:col-start-3 border-[2px] hover:shadow-md border-white transition-all overflow-hidden rounded-lg activityCard ${
        isInfoModalOpen ? 'activityCard-active shadow-md' : ''
      } ${isCurrentSemester ? 'cursor-grab' : 'cursor-pointer'}
    `}
      onMouseDownCapture={onMouseDownCapture}
      draggable={isCurrentSemester}
      onDragEnd={endDragActivity}
      onDragStart={dragActivity}
    >
      <SlideOver
        title={`${activity.subjectName}, ${activity.startingTime}-${activity.endingTime}`}
        disabled={isLearningActivityUpdating || !form.formState.isDirty}
        headerColor={ACTIVITY_COLORS[activity.activityType]?.hover}
        submitHandler={form.handleSubmit(updateActivityHandler)}
        showSubmitButton={isCurrentSemester}
        openFromLeft={openLeftSlideOver}
        open={isInfoModalOpen}
        addExtraSpace
        onClose={() => {
          form.reset()
          setIsInfoModalOpen(false)
          slideOverStateHandler()
        }}
      >
        <LearningActivityForm disableForm={!isCurrentSemester} form={form} />
      </SlideOver>

      <div
        className={`group absolute !overflow-hidden h-full inset-1 flex flex-col overflow-y-auto rounded-lg p-1 text-xs leading-5 duration-200 ease-in-out`}
      >
        <div className='flex flex-wrap'>
          <div className='flex w-full items-center justify-between'>
            <p className='font-semibold select-none mr-1 text-blue-700 line-clamp-1'>
              {activity.subjectName},
            </p>

            {isCurrentSemester && (
              <DeleteModal
                submitHandler={deleteLearningActivityMutation}
                title={t('schedule:delete_learning_activity')}
                disabled={isLearningActivityDeleting}
                classes={`${
                  !isInfoModalOpen ? 'hidden' : ''
                } group-hover:block`}
                targetName={activity.subjectName}
                setOpen={setIsDeleteModalOpen}
                open={isDeleteModalOpen}
                trashIconHeight={17}
                trashIconWidth={17}
                withTrashIconOpener
              />
            )}
          </div>
          <p className='text-blue-500 select-none group-hover:text-blue-700'>
            <time>{activity.startingTime}</time>
            <span>-</span>
            <time>{activity.endingTime}</time>
          </p>
        </div>

        <p className='text-blue-700 line-clamp-1 select-none'>
          {t(activity.teacherName)}
        </p>
      </div>
    </li>
  )
}

export default ActivityCard
