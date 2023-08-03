import type {
  ActivitiesCollisionsInfo,
  LearningActivity,
  SetState,
} from 'types'

export type ActivityCardProps = {
  learningActivityCollisions: ActivitiesCollisionsInfo
  setOnActivityCardClickPosition: SetState<{ x: number; y: number }>
  isCurrentSemester: boolean
  activity: LearningActivity
  index: number
}
