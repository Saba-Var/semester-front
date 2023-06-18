import { SelectInputField, RadioInputField, TextInputField } from 'components'
import useLearningActivityForm from './useLearningActivityForm'
import { LearningActivityFormProps } from './types'
import { weekdays, activities } from 'CONSTANTS'
import { FormProvider } from 'react-hook-form'

const LearningActivityForm: React.FC<LearningActivityFormProps> = ({
  disableForm = false,
  form,
}) => {
  const { t, startingTime, generateOptions } = useLearningActivityForm(form)

  return (
    <FormProvider {...form}>
      <form className='flex flex-col'>
        <TextInputField
          placeholder={t('schedule:subject_placeholder')}
          labelClasses='text-left'
          disabled={disableForm}
          name='subjectName'
        />

        <TextInputField
          placeholder={t('schedule:teacher_name_placeholder')}
          labelClasses='text-left'
          disabled={disableForm}
          name='teacherName'
        />

        <div className='flex flex-col gap-4'>
          <RadioInputField
            title={t('schedule:select_week_day')}
            disabled={disableForm}
            dataList={weekdays}
            name='weekday'
          />

          <RadioInputField
            title={t('schedule:select_activity_type')}
            disabled={disableForm}
            dataList={activities}
            name='activityType'
          />

          <div className='flex justify-between sm:gap-[0.75rem]'>
            <div className='w-full'>
              <SelectInputField
                title={t('schedule:starting_time')}
                optionsList={generateOptions(9)}
                disabled={disableForm}
                name='startingTime'
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
                  disabled={disableForm}
                  name='endingTime'
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default LearningActivityForm
