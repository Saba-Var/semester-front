import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { setServerValidationErrors } from 'utils'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'
import { useUserService } from 'hooks'
import { emailSchema } from 'schemas'
import { SetState } from 'types'
import { useState } from 'react'

const useEmailChangeModalForm = (setOpen: SetState<boolean>) => {
  const [showSuccess, setShowSuccess] = useState(false)

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
        setShowSuccess(true)
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

  return {
    setShowSuccess,
    submitHandler,
    closeHandler,
    showSuccess,
    isLoading,
    form,
    t,
  }
}

export default useEmailChangeModalForm
