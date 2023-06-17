import { LearningActivity, LearningActivityFormData } from 'types'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { weekdays } from 'CONSTANTS'
import { useState } from 'react'

const useActivityCard = (activity: LearningActivity) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

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

  return {
    setIsInfoModalOpen,
    isInfoModalOpen,
    columnPosition,
    rowPosition,
    setHovered,
    rowSpan,
    hovered,
    form,
    t,
  }
}

export default useActivityCard
