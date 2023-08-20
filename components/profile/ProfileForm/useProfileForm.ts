import { useForm, type SubmitHandler } from 'react-hook-form'
import { emitToast, setServerValidationErrors } from 'utils'
import { useMutation, useQueryClient } from 'react-query'
import { useUserService, useGetUserData } from 'hooks'
import { useTranslation } from 'next-i18next'
import type { UserDataObj } from 'types'
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

  const form = useForm({
    defaultValues: {
      username: user?.username!,
      email: user?.email!,
    },
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

  const submitHandler: SubmitHandler<{ username: string; email: string }> = ({
    username,
  }) => {
    updateUserDataMutation({ username })
  }

  return {
    setDisabledInputFields,
    disableAllInputFields,
    disabledInputFields,
    isUserDataUpdating,
    enableInputEdit,
    submitHandler,
    handleSubmit,
    isDirty,
    form,
    t,
  }
}

export default useProfileForm
