import type { ActivityListProps } from './types'
import { ActivityCard } from '../ActivityCard'

const ActivityList: React.FC<ActivityListProps> = ({
  setOnActivityCardClickPosition,
  learningActivityCollisions,
  learningActivitiesData,
  slideOverActivityForm,
  isCurrentSemester,
  calendarListRef,
  onDropHandler,
}) => {
  return (
    <ol
      className='col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:grid-rows-30 sm:pr-8'
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDropHandler}
      ref={calendarListRef}
    >
      {learningActivitiesData?.map((activity, i) => {
        return (
          <ActivityCard
            setOnActivityCardClickPosition={setOnActivityCardClickPosition}
            learningActivityCollisions={learningActivityCollisions}
            isCurrentSemester={isCurrentSemester}
            form={slideOverActivityForm}
            activity={activity}
            key={activity._id}
            index={i}
          />
        )
      })}
    </ol>
  )
}

export default ActivityList
