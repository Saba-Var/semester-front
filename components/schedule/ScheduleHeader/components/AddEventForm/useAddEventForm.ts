import type { LearningActivityFormData, ActivityType, Weekday } from 'types'
import { useForm, type SubmitHandler } from 'react-hook-form'
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

  return {
    setOpenEventForm,
    openEventForm,
    submitHandler,
    form,
    t,
  }
}

export default useAddEventForm
