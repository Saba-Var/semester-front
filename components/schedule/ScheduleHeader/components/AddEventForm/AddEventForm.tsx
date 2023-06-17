import { ModalWrapper, LearningActivityForm } from 'components'
import { PlusIcon } from '@heroicons/react/20/solid'
import useAddEventForm from './useAddEventForm'

const AddEventForm = () => {
  const { setOpenEventForm, openEventForm, submitHandler, form, t } =
    useAddEventForm()

  return (
    <main className='md:ml-4 md:flex md:items-center'>
      <button
        className='ml-6 rounded-md items-center justify-center flex gap-1 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        onClick={() => setOpenEventForm(true)}
        type='button'
      >
        <span>{t('add')}</span>
        <PlusIcon width={24} height={24} />
      </button>

      <ModalWrapper
        submitHandler={form.handleSubmit(submitHandler)}
        title={t('schedule:add_learning_activity')}
        setOpen={setOpenEventForm}
        closeHandler={form.reset}
        submitText={t('add')}
        open={openEventForm}
      >
        <LearningActivityForm form={form} />
      </ModalWrapper>
    </main>
  )
}

export default AddEventForm
