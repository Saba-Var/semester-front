import { PlusIcon } from '@heroicons/react/20/solid'
import useAddEventForm from './useAddEventForm'
import { ModalWrapper } from 'components'
import { useTranslate } from 'hooks'

const AddEventForm = () => {
  const { openEventForm, setOpenEventForm } = useAddEventForm()

  return (
    <div className='md:ml-4 md:flex md:items-center'>
      <button
        className='ml-6 rounded-md items-center justify-center flex gap-1 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        onClick={() => setOpenEventForm(true)}
        type='button'
      >
        <span>{useTranslate('add')}</span>
        <PlusIcon width={24} height={24} />
      </button>

      <ModalWrapper
        title={useTranslate('schedule:add_learning_activity')}
        submitText={useTranslate('add')}
        setOpen={setOpenEventForm}
        submitHandler={() => {}}
        open={openEventForm}
      >
        <div>hel dsadas as da sd asd asd dsda sa sd asdssssssssssslo</div>
      </ModalWrapper>
    </div>
  )
}

export default AddEventForm
