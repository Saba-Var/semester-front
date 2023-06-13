import { ModalWrapper, DatepickerInputField, TextInputField } from 'components'
import useEditSemesterFormModal from './useEditSemesterFormModal'
import { EditSemesterFormModalProps } from './types'
import { FormProvider } from 'react-hook-form'
import { useTranslate } from 'hooks'

const EditSemesterFormModal: React.FC<EditSemesterFormModalProps> = ({
  setShowSemesterEditModal,
  showSemesterEditModal,
  startDate,
  name,
  id,
}) => {
  const { form, submitHandler, isSemesterUpdating } = useEditSemesterFormModal(
    setShowSemesterEditModal,
    startDate,
    name,
    id
  )

  return (
    <ModalWrapper
      closeHandler={() => {
        setShowSemesterEditModal(false)
        form.reset()
      }}
      submitHandler={form.handleSubmit(submitHandler)}
      title={useTranslate('schedule:edit_semester')}
      setOpen={setShowSemesterEditModal}
      submitText={useTranslate('save')}
      disabled={isSemesterUpdating}
      open={showSemesterEditModal}
    >
      <FormProvider {...form}>
        <form className='mt-4' onSubmit={(e) => e.preventDefault()}>
          <DatepickerInputField
            label={useTranslate('start_date')}
            name='startDate'
          />

          <TextInputField
            label={useTranslate('schedule:semester_name')}
            name='name'
          />
        </form>
      </FormProvider>
    </ModalWrapper>
  )
}

export default EditSemesterFormModal
