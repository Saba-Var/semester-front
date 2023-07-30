import { LearningActivity, LearningActivityFormData } from 'types'
import { useMutation, useQueryClient } from 'react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLearningActivityRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { weekdays } from 'CONSTANTS'
import { emitToast } from 'utils'

const useActivityCard = (activity: LearningActivity) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  const [openLeftSlideOver, setOpenLeftSlideOver] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpenLeftSlideOver(
        activity.weekday === 'Saturday' || activity.weekday === 'Sunday'
      )
    }, 800)
  }, [activity.weekday])

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

  return {
    deleteLearningActivityMutation,
    isLearningActivityUpdating,
    isLearningActivityDeleting,
    updateActivityHandler,
    setIsDeleteModalOpen,
    setIsInfoModalOpen,
    isDeleteModalOpen,
    isInfoModalOpen,
    columnPosition,
    rowPosition,
    openLeftSlideOver,
    rowSpan,
    form,
    t,
  }
}

export default useActivityCard
