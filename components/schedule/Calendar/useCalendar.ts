import { useRef, useMemo, useCallback, type DragEvent } from 'react'
import { useTranslation } from 'next-i18next'
import { timeStringToMinutes } from 'utils'
import type {
  ActivitiesCollisionsInfo,
  LearningActivity,
  ActivityPartial,
} from 'types'

const useCalendar = (learningActivitiesData: LearningActivity[]) => {
  const containerOffset = useRef(null)
  const containerNav = useRef(null)
  const container = useRef(null)

  const { t } = useTranslation()

  const detectCollisions = useCallback(
    (activities: LearningActivity[]): ActivitiesCollisionsInfo => {
      activities.sort((a, b) => a.startingTime.localeCompare(b.startingTime))

      const schedule: { [day: string]: ActivityPartial[] } = {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
      }

      activities.forEach((activity) => {
        schedule[activity.weekday].push(activity)
      })

      const result: ActivitiesCollisionsInfo = {}
      for (const day in schedule) {
        const activitiesForDay = schedule[day]
        if (activitiesForDay.length < 2) continue

        activitiesForDay.sort((a, b) =>
          a.startingTime.localeCompare(b.startingTime)
        )

        result[day] = []
        let currentCollisionGroup: string[] = [activitiesForDay[0]?._id]

        for (let i = 1; i < activitiesForDay.length; i++) {
          const currentActivity = activitiesForDay[i]
          const nextActivity = activitiesForDay[i - 1]

          const currentStartTime = timeStringToMinutes(
            currentActivity.startingTime
          )
          const nextEndTime = timeStringToMinutes(nextActivity.endingTime)

          if (currentStartTime < nextEndTime) {
            currentCollisionGroup.push(currentActivity._id)
          } else {
            if (currentCollisionGroup.length > 1) {
              result[day] = result[day] || []
              result[day].push(currentCollisionGroup)
            }
            currentCollisionGroup = [currentActivity._id]
          }
        }

        if (currentCollisionGroup.length > 1) {
          result[day] = result[day] || []
          result[day].push(currentCollisionGroup)
        }
      }

      return result
    },
    []
  )

  const learningActivityCollisions = useMemo(
    () => detectCollisions(learningActivitiesData),
    [detectCollisions, learningActivitiesData]
  )

  const onDropHandler = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
  }

  return {
    learningActivityCollisions,
    containerOffset,
    onDropHandler,
    containerNav,
    container,
    t,
  }
}

export default useCalendar
