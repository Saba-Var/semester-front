import { useForm, type SubmitHandler } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useUserService, useGetUserData } from 'hooks'
import { emitToast, setServerValidationErrors } from 'utils'
import { useTranslation } from 'next-i18next'
import type { UserDataObj } from 'types'

const useProfileForm = () => {
  const { updateUserData } = useUserService()
  const queryClient = useQueryClient()
  const { user } = useGetUserData()
  const { t } = useTranslation()

  const form = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
    },
    mode: 'onSubmit',
  })

  const {
    formState: { isDirty },
    handleSubmit,
  } = form

  const { mutate: updateUserDataMutation, isLoading: isUserDataUpdating } =
    useMutation(updateUserData, {
      onSuccess: (_data, variables) => {
        emitToast(t('updated_successfully'), 'success')

        queryClient.setQueryData<UserDataObj>(
          'user',
          (oldData): UserDataObj => {
            return {
              ...oldData,
              data: {
                ...oldData?.data!,
                username: variables?.username!,
              },
            }
          }
        )
      },

      onError: (error: any) => {
        setServerValidationErrors(error, form)
      },
    })

  const submitHandler: SubmitHandler<{ username: string }> = ({ username }) => {
    updateUserDataMutation({ username })
  }

  return { form, submitHandler, handleSubmit, isDirty, isUserDataUpdating }
}

export default useProfileForm
