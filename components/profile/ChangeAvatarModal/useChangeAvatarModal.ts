import { useForm, useWatch, type SubmitHandler } from 'react-hook-form'
import { propertiesWithProbability, avatarCollection } from 'CONSTANTS'
import { useMutation, useQueryClient } from 'react-query'
import { useTranslation } from 'next-i18next'
import type { AvatarProperties } from 'types'
import { createAvatar } from '@dicebear/core'
import { useSelector } from 'react-redux'
import { useMemo, useState } from 'react'
import { useUserService } from 'hooks'
import { emitToast } from 'utils'
import { RootState } from 'store'

const useChangeAvatarModal = (closeHandler: () => void) => {
  const [activeTab, setActiveTab] = useState('style')

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
  ] = useMemo((): any => {
    const avatar = avatarCollection.find((item) => item.title === avatarStyle)

    const selectedCollectionProperties = avatar?.collection?.schema
      ?.properties as any

    const propertiesList = []
    const availablePropertyNames = ['style']

    for (const key in selectedCollectionProperties) {
      const properties = selectedCollectionProperties[key]

      propertiesList.push({
        propertyName: key,
        values:
          typeof properties.default === 'number'
            ? [properties.minimum, properties.maximum]
            : properties.default,
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
    const properties = {}

    for (const key in formValues) {
      if (key !== 'style') {
        properties[key] = [formValues[key]]
      }
    }

    return properties
  }, [formValues])

  const previewAvatarSrc: string = useMemo(() => {
    return createAvatar(selectedCollection.collection, {
      size: 128,
      seed: user.username,
      ...selectedProperties,
    }).toDataUriSync()
  }, [selectedCollection.collection, selectedProperties, user.username])

  const closeModalHandler = () => {
    closeHandler()
    setActiveTab('style')
  }

  const { mutate: updateUserDataMutation } = useMutation(updateUserData, {
    onSuccess: () => {
      queryClient.invalidateQueries('user')
      closeModalHandler()
      emitToast(t('profile:avatar_changed_successfully'), 'success')
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
