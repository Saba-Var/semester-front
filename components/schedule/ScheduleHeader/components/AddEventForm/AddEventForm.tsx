import { ModalWrapper, TextInputField, RadioInputField } from 'components'
import { PlusIcon } from '@heroicons/react/20/solid'
import { weekdays, activities } from 'CONSTANTS'
import useAddEventForm from './useAddEventForm'
import { FormProvider } from 'react-hook-form'
import { useTranslate } from 'hooks'
import React, { useState } from 'react'

const AddEventForm = () => {
  const { openEventForm, setOpenEventForm, form, submitHandler } =
    useAddEventForm()

  return (
    <main className='md:ml-4 md:flex md:items-center'>
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
        submitHandler={form.handleSubmit(submitHandler)}
        submitText={useTranslate('add')}
        setOpen={setOpenEventForm}
        open={openEventForm}
      >
        <FormProvider {...form}>
          <form>
            <TextInputField
              placeholder={useTranslate('inputs:subject_placeholder')}
              labelClasses='text-left'
              name='subject_name'
              type='text'
            />
            <TextInputField
              placeholder={useTranslate('inputs:teacher_name_placeholder')}
              labelClasses='text-left'
              name='teacher_name'
              type='text'
            />
            <RadioInputField
              title={useTranslate('schedule:select_week_day')}
              dataList={weekdays}
              name='weekday'
            />
            <RadioInputField
              title={useTranslate('schedule:select_activity_type')}
              dataList={activities}
              name='activity_type'
            />
          </form>
        </FormProvider>
      </ModalWrapper>
    </main>
  )
}

export default AddEventForm
