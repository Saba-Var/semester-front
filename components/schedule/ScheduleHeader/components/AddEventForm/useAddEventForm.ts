import type { LearningActivityFormData, ActivityType, Weekday } from 'types'
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useLearningActivityRequests } from 'services'
import { yupResolver } from '@hookform/resolvers/yup'
import { learningActivitySchema } from 'schemas'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { emitToast } from 'utils'
import { useState } from 'react'

const useAddEventForm = () => {
  const [openEventForm, setOpenEventForm] = useState(false)

  const { createLearningActivityRequest } = useLearningActivityRequests()
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  const { query } = useRouter()

  const semesterId = query?.id as string

  const form = useForm({
    resolver: yupResolver(learningActivitySchema),
    defaultValues: {
      activityType: '' as ActivityType,
      weekday: '' as Weekday,
      semester: semesterId,
      startingTime: '',
      subjectName: '',
      teacherName: '',
      endingTime: '',
    },
    mode: 'onTouched',
  })

  const { mutate: createLearningActivityMutation } = useMutation(
    createLearningActivityRequest
  )

  const submitHandler: SubmitHandler<LearningActivityFormData> = (data) => {
    createLearningActivityMutation(data, {
      onSuccess: () => {
        emitToast(t('schedule:learning_activity_created_successfully'))
        queryClient.invalidateQueries(['learningActivities', semesterId])
        setOpenEventForm(false)
        form.reset()
      },
    })
  }

  const startingTime = useWatch({
    control: form.control,
    name: 'startingTime',
  })

  const endingTime = useWatch({
    control: form.control,
    name: 'endingTime',
  })

  const generateFormattedTime = (hour: number, minute: string) => {
    return hour.toString().padStart(2, '0') + ':' + minute
  }

  const generateOptions = (minHour: number, isEndingTime?: boolean) => {
    const options = []

    for (let i = minHour; i <= 22; i++) {
      const withZeroMinutes = generateFormattedTime(i, '00')
      const withThirtyMinutes = generateFormattedTime(i, '30')

      options.push({
        id: withZeroMinutes,
        title: withZeroMinutes,
      })

      options.push({
        id: withThirtyMinutes,
        title: withThirtyMinutes,
      })
    }

    options.push({ id: '23:00', title: '23:00' })

    if (isEndingTime) {
      options.push({ id: '23:30', title: '23:30' })

      return options.filter((option) => {
        if (startingTime) {
          return option.id > startingTime
        }
      })
    }

    return options
  }

  if (startingTime && endingTime && startingTime >= endingTime) {
    form.setValue('endingTime', '')
    form.setError('endingTime', {
      message: 'invalid_ending_time',
    })
  }

  return {
    setOpenEventForm,
    generateOptions,
    openEventForm,
    submitHandler,
    startingTime,
    form,
    t,
  }
}

export default useAddEventForm
