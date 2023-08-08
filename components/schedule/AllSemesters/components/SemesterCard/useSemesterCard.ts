import { useMutation, useQueryClient } from 'react-query'
import { useSemesterRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { emitToast } from 'utils'
import { useState } from 'react'
import { Semester } from 'types'

const useSemesterCard = (semester: Semester) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const { deleteSemesterRequest } = useSemesterRequests()

  const queryClient = useQueryClient()

  const { mutate: deleteSemesterMutation, isLoading: isDeleting } = useMutation(
    () => deleteSemesterRequest(semester._id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('semesters')
        setShowDeleteModal(false)
        emitToast(t('schedule:semester_deleted_successfully'))
      },
    }
  )

  const { t, i18n } = useTranslation()

  return {
    language: i18n.language,
    deleteSemesterMutation,
    setShowDeleteModal,
    showDeleteModal,
    isDeleting,
    t,
  }
}

export default useSemesterCard
