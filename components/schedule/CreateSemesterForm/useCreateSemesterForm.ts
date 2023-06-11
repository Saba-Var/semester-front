import { useForm, type SubmitHandler } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSemesterRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { semesterSchema } from 'schemas'
import { emitToast } from 'utils'
import { useState } from 'react'

const useCreateSemesterForm = () => {
  const [showFormModal, setShowFormModal] = useState(false)

  const { createSemesterRequest } = useSemesterRequests()
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(semesterSchema),
    defaultValues: {
      name: '',
      startDate: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, reset: resetForm } = form

  const { mutate: createSemesterMutation } = useMutation(
    createSemesterRequest,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('semesters')
        emitToast(t('schedule:semester_created_successfully'))
        setShowFormModal(false)
        resetForm()
      },
    }
  )

  const submitHandler: SubmitHandler<{ name: string; startDate: string }> = (
    values
  ) => {
    createSemesterMutation(values)
  }

  return {
    setShowFormModal,
    submitHandler,
    showFormModal,
    handleSubmit,
    resetForm,
    form,
    t,
  }
}

export default useCreateSemesterForm
