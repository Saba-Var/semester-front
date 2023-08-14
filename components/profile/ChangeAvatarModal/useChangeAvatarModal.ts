import { avatarCollection, propertiesWithProbability } from 'CONSTANTS'
import { useForm, useWatch } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { createAvatar } from '@dicebear/core'
import { useSelector } from 'react-redux'
import { useMemo, useState } from 'react'
import { RootState } from 'store'

const useChangeAvatarModal = () => {
  const { t } = useTranslation()

  const [activeTab, setActiveTab] = useState('style')

  const user = useSelector((state: RootState) => state.user)

  const form = useForm({
    defaultValues: {
      style: user.image?.collectionName as string,
    },
    mode: 'onTouched',
  })

  const avatarStyle = useWatch({
    control: form.control,
    name: 'style',
  })

  const formValues = form.watch()

  const [
    selectedCollection,
    propertiesList,
    availablePropertyNames,
    selectedTabPropertiesList,
  ] = useMemo((): any => {
    const avatar = avatarCollection.find((item) => item.title === avatarStyle)

    const selectedCollectionProperties = avatar?.collection?.schema
      ?.properties as any

    const propertiesList = []
    const availablePropertyNames = []

    for (const key in selectedCollectionProperties) {
      const properties = selectedCollectionProperties[key]

      propertiesList.push({
        propertyName: key,
        values:
          typeof properties.default === 'number'
            ? [properties.minimum, properties.maximum]
            : properties.default,
      })

      if (propertiesWithProbability[key]) {
        const probability = propertiesWithProbability[key]

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

    return [
      avatar,
      propertiesList,
      availablePropertyNames,
      selectedTabPropertiesList,
    ]
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

  return {
    selectedTabPropertiesList,
    availablePropertyNames,
    selectedProperties,
    selectedCollection,
    previewAvatarSrc,
    propertiesList,
    setActiveTab,
    avatarStyle,
    activeTab,
    user,
    form,
    t,
  }
}

export default useChangeAvatarModal
