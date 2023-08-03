import { useMutation, useQueryClient } from 'react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLearningActivityRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { weekdays } from 'CONSTANTS'
import { emitToast } from 'utils'
import {
  type MouseEvent,
  type DragEvent,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react'
import type {
  LearningActivityFormData,
  ActivitiesCollisionsInfo,
  LearningActivity,
  SetState,
} from 'types'

const useActivityCard = (
  setOnActivityCardClickYPosition: SetState<number>,
  learningActivityCollisions: ActivitiesCollisionsInfo,
  activity: LearningActivity
) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [openLeftSlideOver, setOpenLeftSlideOver] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  const { updateLearningActivityRequest, deleteLearningActivityRequest } =
    useLearningActivityRequests()

  const queryClient = useQueryClient()
  const { t } = useTranslation('')

  const form = useForm({
    defaultValues: activity as unknown as LearningActivityFormData,
  })

  useEffect(() => {
    const slideOverTimeout = setTimeout(() => {
      setOpenLeftSlideOver(
        activity.weekday === 'Saturday' || activity.weekday === 'Sunday'
      )
    }, 800)

    return () => clearTimeout(slideOverTimeout)
  }, [activity.weekday])

  const startingHour = +activity.startingTime.split(':')[0]
  const startingHourMinute = +activity.startingTime.split(':')[1]

  const endingHour = +activity.endingTime.split(':')[0]
  const endingHourMinute = +activity.endingTime.split(':')[1]

  let rowPosition =
    (startingHour - 9 + 1) * 2 - 1 + (!!startingHourMinute ? 1 : 0)

  const columnPosition =
    weekdays.findIndex((day) => day.value === activity.weekday) + 1

  let rowSpan =
    (endingHour - startingHour + 1) * 2 -
    (!endingHourMinute ? 2 : 1) -
    (startingHourMinute && endingHourMinute ? 1 : 0) -
    (startingHourMinute && !endingHourMinute ? 1 : 0)

  const getCurrentActivityCollisionIndex = useCallback(() => {
    const collisionsInTheCurrentDay =
      learningActivityCollisions[activity.weekday]

    let collisionPosition = 1

    if (!collisionsInTheCurrentDay?.length) return collisionPosition

    collisionsInTheCurrentDay.forEach((collisions) => {
      const currentActivityCollision = collisions.find(
        (id) => id === activity._id
      )

      if (currentActivityCollision) {
        collisionPosition = collisions.indexOf(currentActivityCollision) + 1
        return
      }
    })

    return collisionPosition
  }, [activity._id, activity.weekday, learningActivityCollisions])

  const collisionPosition = useMemo(getCurrentActivityCollisionIndex, [
    getCurrentActivityCollisionIndex,
  ])

  const {
    mutate: deleteLearningActivityMutation,
    isLoading: isLearningActivityDeleting,
  } = useMutation(() => deleteLearningActivityRequest(activity._id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['semesters', activity.semester])
      emitToast(t('deleted_successfully'))
      setIsDeleteModalOpen(false)
    },
  })

  const {
    mutate: updateLearningActivityMutation,
    isLoading: isLearningActivityUpdating,
  } = useMutation((data: LearningActivityFormData) =>
    updateLearningActivityRequest(data, activity._id)
  )

  const updateActivityHandler: SubmitHandler<LearningActivityFormData> = (
    data
  ) => {
    updateLearningActivityMutation(data, {
      onSuccess: () => {
        queryClient.invalidateQueries(['semesters', activity.semester])
        emitToast(t('saved_successfully'))
        form.reset(data)
        setIsInfoModalOpen(false)
      },
    })
  }

  const dragActivity = (event: DragEvent<HTMLElement>) => {
    let element = event.target as HTMLDivElement
    element.classList.add('hide-draggable-element')

    event.dataTransfer.setData('activity', JSON.stringify(activity))
  }

  const endDragActivity = (event: DragEvent<HTMLElement>) => {
    const target = event.target as HTMLDivElement
    target.classList.remove('hide-draggable-element')
  }

  const onMouseDownCapture = (event: MouseEvent<HTMLLIElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const yPosition = event.clientY - rect.top - 5

    setOnActivityCardClickYPosition(yPosition)
  }

  return {
    deleteLearningActivityMutation,
    isLearningActivityUpdating,
    isLearningActivityDeleting,
    updateActivityHandler,
    setIsDeleteModalOpen,
    onMouseDownCapture,
    setIsInfoModalOpen,
    collisionPosition,
    openLeftSlideOver,
    isDeleteModalOpen,
    isInfoModalOpen,
    endDragActivity,
    columnPosition,
    dragActivity,
    rowPosition,
    rowSpan,
    form,
    t,
  }
}

export default useActivityCard
