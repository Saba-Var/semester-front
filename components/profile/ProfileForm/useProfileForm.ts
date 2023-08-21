import { useForm, type SubmitHandler } from 'react-hook-form'
import { emitToast, setServerValidationErrors } from 'utils'
import { useMutation, useQueryClient } from 'react-query'
import type { UserDataObj, UserUpdateData } from 'types'
import { useUserService, useGetUserData } from 'hooks'
import type { ProfileFormValues } from './types'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

const useProfileForm = () => {
  const initialDisabledInputs = {
    showFormActionButtons: false,
    username: true,
    password: true,
    email: true,
  }

  const [disabledInputFields, setDisabledInputFields] = useState(
    initialDisabledInputs
  )

  const disableAllInputFields = () => {
    setDisabledInputFields(initialDisabledInputs)
  }

  const enableInputEdit = (inputName: string) => {
    setDisabledInputFields((prev) => {
      return {
        ...prev,
        [inputName]: false,
        showFormActionButtons: true,
      }
    })
  }

  const { updateUserData } = useUserService()
  const queryClient = useQueryClient()
  const { user } = useGetUserData()
  const { t } = useTranslation()

  const form = useForm<ProfileFormValues>({
    defaultValues: {
      username: user?.username!,
      email: user?.email!,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const { handleSubmit } = form

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

        form.reset({
          ...variables,
        })
        disableAllInputFields()
      },

      onError: (error: any) => {
        setServerValidationErrors(error, form)
      },
    })

  const submitHandler: SubmitHandler<ProfileFormValues> = ({
    confirmPassword,
    oldPassword,
    newPassword,
    username,
  }) => {
    const data: UserUpdateData = {}

    if (!disabledInputFields.username) {
      data.username = username
    }

    if (!disabledInputFields.password) {
      data.oldPassword = oldPassword
      data.newPassword = newPassword
      data.confirmPassword = confirmPassword
    }

    updateUserDataMutation(data)
  }

  return {
    disableAllInputFields,
    disabledInputFields,
    isUserDataUpdating,
    enableInputEdit,
    submitHandler,
    handleSubmit,
    form,
    t,
  }
}

export default useProfileForm
