import { TrashIcon } from '@heroicons/react/24/outline'
import { DeleteButtonAndModalProps } from './types'
import { useTranslation } from 'next-i18next'
import { ModalWrapper } from 'components'

const DeleteButtonAndModal: React.FC<DeleteButtonAndModalProps> = ({
  classes = '',
  disabled = false,
  submitHandler,
  height = 20,
  width = 20,
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

      <div
        className={`text-red-700 cursor-pointer transition-all ${classes}`}
        onClick={(e) => {
          e.stopPropagation()
          setOpen(true)
        }}
      >
        <TrashIcon height={height} width={width} />
      </div>
    </>
  )
}

export default DeleteButtonAndModal
