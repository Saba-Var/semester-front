import { useForm, type SubmitHandler } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import type { UserDataObj } from 'types'
import type { RootState } from 'store'
import { useUserService } from 'hooks'
import { emitToast } from 'utils'

const useProfileForm = () => {
  const user = useSelector((state: RootState) => state.user)

  const { updateUserData } = useUserService()
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const form = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
    },
    mode: 'onSubmit',
  })

  const {
    handleSubmit,
    formState: { isDirty },
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
    })

  const submitHandler: SubmitHandler<{ username: string }> = ({ username }) => {
    updateUserDataMutation({ username })
  }

  return { form, submitHandler, handleSubmit, isDirty, isUserDataUpdating }
}

export default useProfileForm
