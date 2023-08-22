import { useForm, type SubmitHandler } from 'react-hook-form'
import { setServerValidationErrors, emitToast } from 'utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { useUserService } from 'hooks'
import { emailSchema } from 'schemas'
import { SetState } from 'types'

const useEmailChangeModalForm = (setOpen: SetState<boolean>) => {
  const { changeUseEmailRequest } = useUserService()
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

  const { mutate: changeUserEmailMutation, isLoading } = useMutation(
    changeUseEmailRequest,
    {
      onSuccess: () => {
        emitToast(t('profile:email_confirmation_sent'), 'success')
        closeHandler()
      },

      onError: (error: any) => {
        setServerValidationErrors(error, form)
      },
    }
  )

  const submitHandler: SubmitHandler<{ email: string }> = ({ email }) => {
    changeUserEmailMutation(email)
  }

  return { t, form, closeHandler, submitHandler, isLoading }
}

export default useEmailChangeModalForm
