import { useRef, useMemo, useCallback, type DragEvent, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useLearningActivityRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { weekdays } from 'CONSTANTS'
import { emitToast } from 'utils'
import {
  generateNewTimeStringFromNumber,
  convertStringTimeToNumber,
  timeStringToMinutes,
} from 'utils'
import type {
  ActivitiesCollisionsInfo,
  LearningActivity,
  ActivityPartial,
  Weekday,
  Semester,
} from 'types'

const useCalendar = (learningActivitiesData: LearningActivity[]) => {
  const calendarList = useRef<HTMLElement | null>(null)
  const container = useRef<HTMLElement | null>(null)
  const containerOffset = useRef(null)
  const containerNav = useRef(null)

  const [onActivityCardClickPosition, setOnActivityCardClickPosition] =
    useState({
      x: 0,
      y: 0,
    })

  const { updateLearningActivityRequest } = useLearningActivityRequests()
  const slideOverActivityForm = useForm({})
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  const { query } = useRouter()

  const { mutate: updateLearningActivityMutation } = useMutation(
    ({ id, data }: { id: string; data: LearningActivity }) =>
      updateLearningActivityRequest(id, data),
    {
      onMutate: async ({ id, data }) => {
        await queryClient.cancelQueries(['semesters', query?.id])

        const previousSemester = queryClient.getQueryData<{ data: Semester }>([
          'semesters',
          query?.id,
        ])

        queryClient.setQueryData<{ data: Semester }>(
          ['semesters', query?.id],
          (old): { data: Semester } => {
            if (!old)
              return {
                data: {
                  learningActivities: [],
                  isCurrentSemester: false,
                  startDate: '',
                  endDate: '',
                  _id: '',
                  name: '',
                  user: '',
                },
              }

            const currentActivity = old?.data.learningActivities.find(
              (activity) => activity._id === id
            )

            if (!currentActivity) return old

            currentActivity.startingTime = data.startingTime
            currentActivity.endingTime = data.endingTime
            currentActivity.weekday = data.weekday

            slideOverActivityForm.reset(currentActivity)

            return { data: old.data }
          }
        )

        return { previousSemester }
      },

      onError: (_error, variables, context) => {
        queryClient.setQueryData('semesters', context?.previousSemester)
        emitToast(t('something_went_wrong'), 'error')
        slideOverActivityForm.reset(
          context?.previousSemester?.data.learningActivities.find(
            (activity) => activity._id === variables.id
          )
        )
      },

      onSettled: () => {
        queryClient.invalidateQueries(['semesters', query?.id])
      },
    }
  )

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

      const weekdayIndex = Math.floor(
        (distanceFromLeft - onActivityCardClickPosition.x / 1.8) / 213
      )
      const newDay = weekdays[weekdayIndex]?.value

      let newRowPosition = Math.floor(
        (distanceFromTop - onActivityCardClickPosition.y) / 57.2
      )

      let newStartingTime = 9 + newRowPosition / 2
      if (newStartingTime < 9) newStartingTime = 9

      let newStartingTimeString = generateNewTimeStringFromNumber(
        newStartingTime,
        'starting'
      )

      const draggedActivity: LearningActivity = JSON.parse(
        event.dataTransfer.getData('activity')
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

      updateLearningActivityMutation({
        id: draggedActivity._id,
        data: {
          ...draggedActivity,
          startingTime: newStartingTimeString,
          endingTime: newEndingTimeString,
          weekday: newDay as Weekday,
        },
      })
    },
    [onActivityCardClickPosition, updateLearningActivityMutation]
  )

  return {
    setOnActivityCardClickPosition,
    learningActivityCollisions,
    slideOverActivityForm,
    containerOffset,
    onDropHandler,
    containerNav,
    calendarList,
    container,
    t,
  }
}

export default useCalendar
