import { useForm, type SubmitHandler, useWatch } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { avatarCollection } from 'CONSTANTS'
import { useSelector } from 'react-redux'
import { useMemo, useState } from 'react'
import { RootState } from 'store'

const useChangeAvatarModal = () => {
  const { t } = useTranslation()

  const [activeTab, setActiveTab] = useState<string | (() => never)>(t('style'))

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

  const [selectedCollection, propertiesList, availablePropertyNames] =
    useMemo((): any => {
      const collection = avatarCollection.find(
        (item) => item.title === avatarStyle
      )?.collection

      const selectedCollectionProperties = collection?.schema?.properties as any

      const propertiesList = []
      const availablePropertyNames = []

      for (const key in selectedCollectionProperties) {
        const properties = selectedCollectionProperties[key]

        propertiesList.push({
          collectionName: key,
          properties:
            typeof properties.default === 'number'
              ? [properties.default, properties.minimum, properties.maximum]
              : properties.default,
        })

        availablePropertyNames.push(t(`profile:${key}`))
      }

      return [collection, propertiesList, availablePropertyNames]
    }, [avatarStyle, t])

  return {
    availablePropertyNames,
    setActiveTab,
    avatarStyle,
    activeTab,
    user,
    form,
    t,
  }
}

export default useChangeAvatarModal
