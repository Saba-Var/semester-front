import { ModalWrapper, LearningActivityForm } from 'components'
import { PlusIcon } from '@heroicons/react/20/solid'
import useAddEventForm from './useAddEventForm'

const AddEventForm = () => {
  const {
    isLearningActivityCreating,
    setOpenEventForm,
    openEventForm,
    submitHandler,
    form,
    t,
  } = useAddEventForm()

  return (
    <>
      <button
        className='rounded-md items-center justify-center flex gap-1 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        onClick={() => setOpenEventForm(true)}
        type='button'
      >
        <span>{t('add')}</span>
        <PlusIcon width={24} height={24} />
      </button>

      <ModalWrapper
        submitHandler={form.handleSubmit(submitHandler)}
        title={t('schedule:add_learning_activity')}
        disabled={isLearningActivityCreating}
        closeHandler={() => {
          form.reset()
          setOpenEventForm(false)
        }}
        submitText={t('add')}
        open={openEventForm}
      >
        <LearningActivityForm form={form} />
      </ModalWrapper>
    </>
  )
}

export default AddEventForm
