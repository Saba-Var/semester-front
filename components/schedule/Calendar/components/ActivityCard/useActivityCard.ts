import { LearningActivity, LearningActivityFormData } from 'types'
import { useMutation, useQueryClient } from 'react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLearningActivityRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { weekdays } from 'CONSTANTS'
import { emitToast } from 'utils'
import { useState } from 'react'

const useActivityCard = (activity: LearningActivity) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  const { updateLearningActivityRequest, deleteLearningActivityRequest } =
    useLearningActivityRequests()

  const queryClient = useQueryClient()
  const { t } = useTranslation('')

  const form = useForm({
    defaultValues: activity as unknown as LearningActivityFormData,
  })

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

  const { mutate: deleteLearningActivityMutation } = useMutation(
    () => deleteLearningActivityRequest(activity._id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['learningActivities', activity.semester])
        emitToast(t('deleted_successfully'))
        setIsDeleteModalOpen(false)
      },
    }
  )

  const { mutate: updateLearningActivityMutation } = useMutation(
    (data: LearningActivityFormData) =>
      updateLearningActivityRequest(data, activity._id)
  )

  const updateActivityHandler: SubmitHandler<LearningActivityFormData> = (
    data
  ) => {
    updateLearningActivityMutation(data, {
      onSuccess: () => {
        queryClient.invalidateQueries(['learningActivities', activity.semester])
        emitToast(t('saved_successfully'))
        setIsInfoModalOpen(false)
      },
    })
  }

  return {
    deleteLearningActivityMutation,
    updateActivityHandler,
    setIsDeleteModalOpen,
    setIsInfoModalOpen,
    isDeleteModalOpen,
    isInfoModalOpen,
    columnPosition,
    rowPosition,
    rowSpan,
    form,
    t,
  }
}

export default useActivityCard
