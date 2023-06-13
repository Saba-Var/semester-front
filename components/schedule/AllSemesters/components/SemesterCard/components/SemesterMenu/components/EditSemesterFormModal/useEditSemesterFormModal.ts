import { useForm, type SubmitHandler } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import type { SemesterEditData, SetState } from 'types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSemesterRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { semesterSchema } from 'schemas'
import { emitToast } from 'utils'

const useEditSemesterFormModal = (
  setShowSemesterEditModal: SetState<boolean>,
  startDate: string,
  name: string,
  id: string
) => {
  const { updateSemesterRequest } = useSemesterRequests()
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(semesterSchema),
    defaultValues: {
      startDate,
      name,
    },
  })

  const { mutate: updateSemesterMutation, isLoading: isSemesterUpdating } =
    useMutation((data: SemesterEditData) => updateSemesterRequest(id, data))

  const submitHandler: SubmitHandler<SemesterEditData> = (data) => {
    updateSemesterMutation(
      { ...data, startDate: startDate.split('T')[0] },
      {
        onSuccess: () => {
          setShowSemesterEditModal(false)
          queryClient.invalidateQueries('semesters')
          emitToast(t('schedule:semester_updated_successfully'))
          form.reset()
        },
      }
    )
  }

  return { form, submitHandler, isSemesterUpdating }
}

export default useEditSemesterFormModal
