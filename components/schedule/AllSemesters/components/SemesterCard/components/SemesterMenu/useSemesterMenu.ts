import { useForm, type SubmitHandler } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useSemesterRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { emitToast } from 'utils'
import { useState } from 'react'

const useSemesterMenu = (semesterId: string) => {
  const [showEndSemesterModal, setShowEndSemesterModal] = useState(false)
  const [showSemesterEditModal, setShowSemesterEditModal] = useState(false)

  const { endSemesterRequest } = useSemesterRequests()
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const form = useForm({
    defaultValues: {
      endDate: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit } = form

  const { mutate: endSemesterMutation, isLoading: isSemesterEnding } =
    useMutation(
      (data: { endDate: string }) => endSemesterRequest(semesterId, data),
      {
        onSuccess: () => {
          queryClient.invalidateQueries('semesters')
          emitToast(t('schedule:semester_ended_successfully'))
          setShowEndSemesterModal(false)
        },
      }
    )

  const submitHandler: SubmitHandler<{ endDate: string }> = (data) => {
    endSemesterMutation(data)
  }

  return {
    submitHandler: handleSubmit(submitHandler),
    setShowSemesterEditModal,
    setShowEndSemesterModal,
    showSemesterEditModal,
    showEndSemesterModal,
    isSemesterEnding,
    form,
    t,
  }
}

export default useSemesterMenu
