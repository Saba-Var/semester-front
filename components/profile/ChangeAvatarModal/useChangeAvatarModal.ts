import type { AvatarCollectionProperties, AvatarProperties, User } from 'types'
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form'
import { propertiesWithProbability, avatarCollection } from 'CONSTANTS'
import { useMutation, useQueryClient } from 'react-query'
import { createAvatar, type Style } from '@dicebear/core'
import { useTranslation } from 'next-i18next'
import type { PropertiesList } from './types'
import { useSelector } from 'react-redux'
import { useMemo, useState } from 'react'
import { useUserService } from 'hooks'
import { emitToast } from 'utils'
import { RootState } from 'store'

const useChangeAvatarModal = (closeHandler: () => void) => {
  const [activeTab, setActiveTab] = useState<keyof AvatarProperties>('style')

  const user = useSelector((state: RootState) => state.user)
  const { updateUserData } = useUserService()
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const form = useForm({
    defaultValues: {
      style: 'adventurer-neutral',
    } as any,
    mode: 'onTouched',
  })

  const avatarStyle = useWatch({
    control: form.control,
    name: 'style',
  })

  const formValues = form.watch()

  const [
    selectedCollection,
    availablePropertyNames,
    selectedTabPropertiesList,
  ] = useMemo(() => {
    const avatar = avatarCollection.find((item) => item.title === avatarStyle)

    const selectedCollectionProperties = avatar?.collection?.schema
      ?.properties as AvatarCollectionProperties

    const propertiesList: PropertiesList = []

    const availablePropertyNames = ['style']

    for (const key in selectedCollectionProperties) {
      const properties = selectedCollectionProperties[key]

      propertiesList.push({
        propertyName: key,
        values:
          typeof properties.minimum === 'number' &&
          typeof properties.maximum === 'number'
            ? [properties.minimum, properties.maximum]
            : (properties.default as string[]),
      })

      const probability =
        propertiesWithProbability[key as keyof typeof propertiesWithProbability]

      if (probability) {
        if (formValues[probability]) {
          availablePropertyNames.push(key)
        }
      } else if (key !== 'style') {
        availablePropertyNames.push(key)
      }
    }

    const selectedTabPropertiesList = propertiesList.find(
      (el) => el.propertyName === activeTab
    )?.values

    return [avatar, availablePropertyNames, selectedTabPropertiesList]
  }, [activeTab, avatarStyle, formValues])

  const selectedProperties = useMemo(() => {
    const properties: { [key: string]: number[] | string[] } = {}

    for (const key in formValues) {
      if (key !== 'style') {
        properties[key] = [formValues[key]]
      }
    }

    return properties
  }, [formValues])

  const previewAvatarSrc: string = useMemo(() => {
    return selectedCollection?.collection
      ? createAvatar(selectedCollection?.collection as Style<object>, {
          size: 128,
          seed: user.username,
          ...selectedProperties,
        }).toDataUriSync()
      : ''
  }, [selectedCollection?.collection, selectedProperties, user.username])

  const closeModalHandler = () => {
    closeHandler()
    setActiveTab('style')

    const timeoutId = setTimeout(() => {
      form.reset()
    }, 400)
    return () => clearTimeout(timeoutId)
  }

  const { mutate: updateUserDataMutation, isLoading: isUserDataUpdating } =
    useMutation(updateUserData, {
      onMutate: async (newUserData) => {
        await queryClient.cancelQueries('user')

        const userPreviousData = queryClient.getQueryData('user')

        queryClient.setQueryData<{ data: User }>(
          'user',
          (old): { data: User } => {
            closeModalHandler()

            return { data: { ...old?.data, ...newUserData } as User }
          }
        )

        return { userPreviousData }
      },

      onSuccess: () => {
        queryClient.invalidateQueries('user')
        closeModalHandler()
        emitToast(t('profile:avatar_changed_successfully'), 'success')
      },

      onError: (_error, _newUserData, context) => {
        emitToast(t('profile:avatar_change_failed'), 'error')
        queryClient.setQueryData('user', context?.userPreviousData)
      },
    })

  const submitHandler: SubmitHandler<AvatarProperties> = (values) => {
    let baseUri = `${process.env.NEXT_PUBLIC_DICEBEAR_API_URI}/6.x/${values.style}/svg?seed=${user.username}`

    for (const key in values) {
      if (key !== 'style') {
        baseUri += `&${key}=${values[key as keyof typeof values]}`
      }
    }

    updateUserDataMutation({
      image: {
        collectionName: values.style,
        type: 'dicebear',
        url: baseUri,
      },
    })
  }

  return {
    selectedTabPropertiesList,
    availablePropertyNames,
    selectedProperties,
    isUserDataUpdating,
    selectedCollection,
    closeModalHandler,
    previewAvatarSrc,
    submitHandler,
    setActiveTab,
    activeTab,
    user,
    form,
    t,
  }
}

export default useChangeAvatarModal
