import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'next-i18next'
import { emailSchema } from 'schemas'
import { SetState } from 'types'

const useEmailChangeModalForm = (setOpen: SetState<boolean>) => {
  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
  })

  const closeHandler = () => {
    form.reset()
    setOpen(false)
  }

  const submitHandler: SubmitHandler<{ email: string }> = (values) => {
    console.log(values)
  }

  return { t, form, closeHandler, submitHandler }
}

export default useEmailChangeModalForm
