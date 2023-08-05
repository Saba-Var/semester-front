import type { DragEventHandler } from 'react'
import type {
  ActivitiesCollisionsInfo,
  LearningActivity,
  SetState,
} from 'types'

export type ActivityListProps = {
  learningActivityCollisions: ActivitiesCollisionsInfo
  onDropHandler: DragEventHandler<HTMLOListElement>
  learningActivitiesData: LearningActivity[]
  isCurrentSemester: boolean
  calendarListRef: any
  setOnActivityCardClickPosition: SetState<{
    x: number
    y: number
  }>
}
