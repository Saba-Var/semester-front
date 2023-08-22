import { lowerCaseRegex, upperCaseRegex, symbolOrNumberRegex } from 'CONSTANTS'
import { useForm, type SubmitHandler, useWatch } from 'react-hook-form'
import { emitToast, setServerValidationErrors } from 'utils'
import { useMutation, useQueryClient } from 'react-query'
import type { UserDataObj, UserUpdateData } from 'types'
import { useUserService, useGetUserData } from 'hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import type { ProfileFormValues } from './types'
import { useTranslation } from 'next-i18next'
import { profileFormSchema } from 'schemas'
import { useState } from 'react'

const useProfileForm = () => {
  const initialDisabledInputs = {
    showFormActionButtons: false,
    passwordChange: true,
    username: true,
  }

  const [showEmailChangeModal, setShowEmailChangeModal] = useState(false)
  const [disabledInputFields, setDisabledInputFields] = useState(
    initialDisabledInputs
  )

  const disableAllInputFields = () => {
    form.setValue('passwordChange', false)
    setDisabledInputFields(initialDisabledInputs)
  }

  const enableInputEdit = (inputName: string) => {
    if (inputName === 'passwordChange') {
      form.setValue('passwordChange', true)
    }

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
    resolver: yupResolver(profileFormSchema),
    defaultValues: {
      username: user?.username!,
      email: user?.email!,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      passwordChange: false,
    },
    mode: 'onTouched',
  })

  const { handleSubmit } = form

  const newPassword = useWatch({
    control: form.control,
    name: 'newPassword',
  })

  const newPasswordValidation = {
    length: newPassword?.length >= 6,
    hasLowerCaseChar: lowerCaseRegex.test(newPassword!),
    hasUpperCaseChar: upperCaseRegex.test(newPassword!),
    hasSymbol: symbolOrNumberRegex.test(newPassword!),
  }

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
    passwordChange,
    confirmPassword,
    oldPassword,
    newPassword,
    username,
  }) => {
    const data: UserUpdateData = { username }

    if (passwordChange) {
      data.oldPassword = oldPassword
      data.newPassword = newPassword
      data.confirmPassword = confirmPassword
    }

    updateUserDataMutation(data)
  }

  return {
    setShowEmailChangeModal,
    disableAllInputFields,
    newPasswordValidation,
    showEmailChangeModal,
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
