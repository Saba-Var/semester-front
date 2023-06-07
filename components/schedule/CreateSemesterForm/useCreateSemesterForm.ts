import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSemesterRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { semesterSchema } from 'schemas'
import { emitToast } from 'utils'
import { useState } from 'react'

const useCreateSemesterForm = () => {
  const [showFormModal, setShowFormModal] = useState(false)

  const { createSemesterRequest } = useSemesterRequests()
  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(semesterSchema),
    defaultValues: {
      name: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, reset: resetForm } = form

  const { mutate: createSemesterMutation } = useMutation(
    createSemesterRequest,
    {
      onSuccess: () => {
        emitToast(t('schedule:semester_created_successfully'))
        setShowFormModal(false)
        resetForm()
      },
    }
  )

  const submitHandler: SubmitHandler<{ name: string }> = (values) => {
    createSemesterMutation(values)
  }

  return {
    setShowFormModal,
    submitHandler,
    showFormModal,
    handleSubmit,
    resetForm,
    form,
  }
}

export default useCreateSemesterForm
