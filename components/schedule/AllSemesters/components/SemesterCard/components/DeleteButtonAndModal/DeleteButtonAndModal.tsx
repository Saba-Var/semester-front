import useDeleteButtonAndModal from './useDeleteButtonAndModal'
import { TrashIcon } from '@heroicons/react/24/outline'
import { DeleteButtonAndModalProps } from './types'
import { ModalWrapper } from 'components/shared'

const DeleteButtonAndModal: React.FC<DeleteButtonAndModalProps> = ({
  semesterName,
  semesterId,
}) => {
  const { setShowDeleteModal, showDeleteModal, t, deleteSemesterMutation } =
    useDeleteButtonAndModal()

  return (
    <>
      <ModalWrapper
        setOpen={setShowDeleteModal}
        title={t('schedule:delete_semester')}
        submitHandler={() => deleteSemesterMutation(semesterId)}
        submitText={t('delete')}
        open={showDeleteModal}
        type='danger'
      >
        <p>
          <span className='text-gray-700 '>
            {t('schedule:do_you_really_want_to_delete_this_semester')} -{' '}
          </span>
          <b>{`"${semesterName}"`}</b>?
        </p>
      </ModalWrapper>

      <TrashIcon
        className='text-red-700 cursor-pointer'
        onClick={() => setShowDeleteModal(true)}
        height={20}
        width={20}
      />
    </>
  )
}

export default DeleteButtonAndModal
