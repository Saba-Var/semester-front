import type { LearningActivity, ActivitiesCollisionsInfo } from 'types'

export type ActivityCardProps = {
  learningActivityCollisions: ActivitiesCollisionsInfo
  isCurrentSemester: boolean
  activity: LearningActivity
  index: number
}
