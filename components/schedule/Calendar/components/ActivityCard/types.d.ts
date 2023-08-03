import type {
  ActivitiesCollisionsInfo,
  LearningActivity,
  SetState,
} from 'types'

export type ActivityCardProps = {
  learningActivityCollisions: ActivitiesCollisionsInfo
  setOnActivityCardClickYPosition: SetState<number>
  isCurrentSemester: boolean
  activity: LearningActivity
  index: number
}
