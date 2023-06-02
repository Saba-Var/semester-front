import { PlusIcon } from '@heroicons/react/20/solid'
import { weekdays, activities } from 'CONSTANTS'
import useAddEventForm from './useAddEventForm'
import { FormProvider } from 'react-hook-form'
import {
  SelectInputField,
  RadioInputField,
  TextInputField,
  ModalWrapper,
} from 'components'

const AddEventForm = () => {
  const {
    setOpenEventForm,
    generateOptions,
    openEventForm,
    submitHandler,
    startingTime,
    form,
    t,
  } = useAddEventForm()

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
        title={t('schedule:add_learning_activity')}
        submitHandler={form.handleSubmit(submitHandler)}
        setOpen={setOpenEventForm}
        closeHandler={form.reset}
        submitText={t('add')}
        open={openEventForm}
      >
        <FormProvider {...form}>
          <form className='flex flex-col gap-2'>
            <TextInputField
              placeholder={t('schedule:subject_placeholder')}
              labelClasses='text-left'
              name='subject_name'
              type='text'
            />

            <TextInputField
              placeholder={t('schedule:teacher_name_placeholder')}
              labelClasses='text-left'
              name='teacher_name'
              type='text'
            />

            <div className='flex flex-col gap-2'>
              <RadioInputField
                title={t('schedule:select_week_day')}
                dataList={weekdays}
                name='weekday'
              />

              <RadioInputField
                title={t('schedule:select_activity_type')}
                dataList={activities}
                name='activity_type'
              />

              <div className='flex justify-between gap-[0.75rem]'>
                <div className='w-full'>
                  <SelectInputField
                    optionsList={generateOptions(9)}
                    title={t('schedule:starting_time')}
                    name='starting_time'
                  />
                </div>

                <div className='w-full'>
                  {startingTime && (
                    <SelectInputField
                      optionsList={generateOptions(
                        parseInt(startingTime.split(':')[0]),
                        true
                      )}
                      title={t('schedule:ending_time')}
                      name='ending_time'
                    />
                  )}
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </ModalWrapper>
    </main>
  )
}

export default AddEventForm
