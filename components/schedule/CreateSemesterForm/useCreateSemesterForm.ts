import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSemesterRequests } from 'services'
import { useMutation } from 'react-query'
import { semesterSchema } from 'schemas'
import { useState } from 'react'

const useCreateSemesterForm = () => {
  const [showFormModal, setShowFormModal] = useState(false)

  const { createSemesterRequest } = useSemesterRequests()

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
