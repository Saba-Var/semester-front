import { TrashIcon } from '@heroicons/react/24/outline'
import { DeleteButtonAndModalProps } from './types'
import { useTranslation } from 'next-i18next'
import { ModalWrapper } from 'components'

const DeleteModal: React.FC<DeleteButtonAndModalProps> = ({
  withTrashIconOpener = false,
  trashIconHeight = 20,
  trashIconWidth = 20,
  disabled = false,
  submitHandler,
  classes = '',
  targetName,
  setOpen,
  title,
  open,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <ModalWrapper
        closeHandler={() => setOpen(false)}
        submitHandler={submitHandler}
        submitText={t('delete')}
        disabled={disabled}
        title={title}
        type='danger'
        open={open}
      >
        <p>
          <span className='text-gray-700 '>
            {t('do_you_really_want_to_delete')} -{' '}
          </span>
          <b>{`"${targetName}"`}</b>?
        </p>
      </ModalWrapper>

      {withTrashIconOpener && (
        <div
          className={`text-red-700 cursor-pointer transition-all ${classes}`}
          onClick={(e) => {
            e.stopPropagation()
            setOpen(true)
          }}
        >
          <TrashIcon height={trashIconHeight} width={trashIconWidth} />
        </div>
      )}
    </>
  )
}

export default DeleteModal
