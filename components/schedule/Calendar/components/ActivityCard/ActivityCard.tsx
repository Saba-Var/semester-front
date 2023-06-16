import useActivityCard from './useActivityCard'
import { ActivityCardProps } from './types'

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  const { rowPosition, columnPosition, rowSpan } = useActivityCard(activity)

  return (
    <li
      style={{
        gridRow: `${rowPosition} / span ${rowSpan}`,
        gridColumn: `${columnPosition}`,
      }}
      className='relative mt-px flex sm:col-start-3 overflow-hidden rounded-lg hover:z-[2]'
    >
      <div
        style={{
          height: `${rowSpan * 3.5}rem`,
        }}
        className='group absolute !overflow-hidden inset-1 flex flex-col border-[2px] border-white overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100 hover:shadow-md transition duration-200 ease-in-out hover:border-transparent hover:cursor-pointer'
      >
        <p className='font-semibold text-blue-700'>{activity.subjectName}</p>
        <p className='text-blue-500 group-hover:text-blue-700'>
          <time>{activity.startingTime}</time>
          <span>-</span>
          <time>{activity.endingTime}</time>
        </p>
      </div>
    </li>
  )
}

export default ActivityCard
