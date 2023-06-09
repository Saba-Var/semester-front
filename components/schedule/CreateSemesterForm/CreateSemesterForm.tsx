import useCreateSemesterForm from './useCreateSemesterForm'
import { ModalWrapper, TextInputField } from 'components'
import { PlusIcon } from '@heroicons/react/24/outline'
import { FormProvider } from 'react-hook-form'
import { useTranslate } from 'hooks'

export const CreateSemesterForm = () => {
  const {
    setShowFormModal,
    showFormModal,
    submitHandler,
    handleSubmit,
    resetForm,
    form,
  } = useCreateSemesterForm()

  return (
    <>
      <button
        className='relative block w-64 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        onClick={() => setShowFormModal(true)}
        type='button'
      >
        <PlusIcon className='mx-auto h-16 w-16 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>
          Create a new semester
        </span>
      </button>

      <ModalWrapper
        title={useTranslate('schedule:create_new_semester')}
        submitHandler={handleSubmit(submitHandler)}
        setOpen={setShowFormModal}
        closeHandler={resetForm}
        open={showFormModal}
      >
        <FormProvider {...form}>
          <form onSubmit={(e) => e.preventDefault()}>
            <TextInputField
              placeholder={useTranslate('schedule:semester_name')}
              label={useTranslate('schedule:semester_name')}
              name='name'
            />
          </form>
        </FormProvider>
      </ModalWrapper>
    </>
  )
}
