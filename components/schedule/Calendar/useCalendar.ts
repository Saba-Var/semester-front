import { useRef, useMemo, useCallback, type DragEvent, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { weekdays } from 'CONSTANTS'
import {
  generateNewTimeStringFromNumber,
  convertStringTimeToNumber,
  timeStringToMinutes,
} from 'utils'
import type {
  ActivitiesCollisionsInfo,
  LearningActivity,
  ActivityPartial,
} from 'types'

const useCalendar = (learningActivitiesData: LearningActivity[]) => {
  const calendarList = useRef<HTMLElement | null>(null)
  const containerOffset = useRef(null)
  const containerNav = useRef(null)
  const container = useRef<HTMLElement | null>(null)

  const [onActivityCardClickYPosition, setOnActivityCardClickYPosition] =
    useState(0)

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

  const onDropHandler = useCallback(
    (event: DragEvent<HTMLElement>) => {
      event.preventDefault()

      const scrollLeft = container?.current?.scrollLeft || 0
      const scrollTop = container?.current?.scrollTop || 0

      let x = event.clientX - 168
      let y = event.clientY - 185

      if (y < 0) y = 0
      if (x < 0) x = 0

      const distanceFromLeft = x + scrollLeft
      const distanceFromTop = y + scrollTop

      const draggedActivity = JSON.parse(event.dataTransfer.getData('activity'))
      const newDay = weekdays[Math.floor(distanceFromLeft / 213)].value

      let newRowPosition = Math.floor(
        (distanceFromTop - onActivityCardClickYPosition) / 57.2
      )

      let newStartingTime = 9 + newRowPosition / 2
      if (newStartingTime < 9) newStartingTime = 9

      let newStartingTimeString = generateNewTimeStringFromNumber(
        newStartingTime,
        'starting'
      )

      const oldEndingTime = convertStringTimeToNumber(
        draggedActivity.endingTime
      )
      const oldStartingTime = convertStringTimeToNumber(
        draggedActivity.startingTime
      )

      const differenceBetweenOldTimes = oldEndingTime - oldStartingTime

      let newEndingTime = newStartingTime + differenceBetweenOldTimes
      if (newEndingTime > 23.5) newEndingTime = 23.5

      let newEndingTimeString = generateNewTimeStringFromNumber(
        newEndingTime,
        'ending'
      )

      console.log(newDay, newStartingTimeString, newEndingTimeString)
    },
    [onActivityCardClickYPosition]
  )

  return {
    setOnActivityCardClickYPosition,
    learningActivityCollisions,
    containerOffset,
    calendarList,
    onDropHandler,
    containerNav,
    container,
    t,
  }
}

export default useCalendar
