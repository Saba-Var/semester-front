import { ModalWrapper, TextInputField, DatepickerInputField } from 'components'
import { PlusIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import useCreateSemesterForm from './useCreateSemesterForm'
import { FormProvider } from 'react-hook-form'

export const CreateSemesterForm = () => {
  const {
    isSemesterCreating,
    setShowFormModal,
    showFormModal,
    submitHandler,
    handleSubmit,
    resetForm,
    form,
    t,
  } = useCreateSemesterForm()

  return (
    <>
      <div className='text-center mb-7 mt-10'>
        <AcademicCapIcon className='mx-auto h-14 w-14 text-gray-400' />

        <h3 className='mt-2 text-lg font-semibold text-gray-900'>
          {t('schedule:active_semester_not_found')}
        </h3>
        <p className='mt-1 text-base text-gray-500'>
          {t('schedule:get_started_by_creating_a_new_semester')}
        </p>
        <div className='mt-6'>
          <button
            className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={() => setShowFormModal(true)}
            type='button'
          >
            <PlusIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
            {t('schedule:new_semester')}
          </button>
        </div>
      </div>

      <ModalWrapper
        title={t('schedule:create_new_semester')}
        submitHandler={handleSubmit(submitHandler)}
        disabled={isSemesterCreating}
        closeHandler={() => {
          resetForm()
          setShowFormModal(false)
        }}
        open={showFormModal}
      >
        <FormProvider {...form}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className='flex flex-col gap-2'
          >
            <DatepickerInputField label={t('start_date')} name='startDate' />

            <TextInputField label={t('schedule:semester_name')} name='name' />
          </form>
        </FormProvider>
      </ModalWrapper>
    </>
  )
}
