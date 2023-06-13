import { useMutation, useQueryClient } from 'react-query'
import { useSemesterRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { emitToast } from 'utils'
import { useState } from 'react'

const useDeleteButtonAndModal = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const { deleteSemesterRequest } = useSemesterRequests()

  const queryClient = useQueryClient()

  const { mutate: deleteSemesterMutation, isLoading: isDeleting } = useMutation(
    deleteSemesterRequest,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('semesters')
        setShowDeleteModal(false)
        emitToast(t('schedule:semester_deleted_successfully'))
      },
    }
  )

  const { t } = useTranslation()

  return {
    deleteSemesterMutation,
    setShowDeleteModal,
    showDeleteModal,
    isDeleting,
    t,
  }
}

export default useDeleteButtonAndModal
