import { TrashIcon } from '@heroicons/react/24/outline'
import { DeleteButtonAndModalProps } from './types'
import { useTranslation } from 'next-i18next'
import { ModalWrapper } from 'components'

const DeleteButtonAndModal: React.FC<DeleteButtonAndModalProps> = ({
  buttonClasses = '',
  disabled = false,
  submitHandler,
  targetName,
  setOpen,
  title,
  open,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <ModalWrapper
        submitHandler={submitHandler}
        submitText={t('delete')}
        disabled={disabled}
        setOpen={setOpen}
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

      <TrashIcon
        className={`text-red-700 cursor-pointer ${buttonClasses}`}
        onClick={(e) => {
          e.stopPropagation()
          setOpen(true)
        }}
        height={20}
        width={20}
      />
    </>
  )
}

export default DeleteButtonAndModal
