import { createAvatar } from '@dicebear/core'
import { useWatch } from 'react-hook-form'
import { AvatarItemProps } from './types'
import { useMemo } from 'react'

const useAvatarItem = ({
  collectionItem,
  properties,
  fieldName,
  value,
  user,
  form,
}: AvatarItemProps) => {
  const avatarSrc: string = useMemo(() => {
    const baseOptions = {
      size: 128,
      seed: user.username,
    }

    const options = {
      ...baseOptions,
      ...properties,
      [fieldName]: [value],
    }

    return createAvatar(
      collectionItem.collection as any,
      fieldName === 'style' ? baseOptions : options
    ).toDataUriSync()
  }, [collectionItem.collection, fieldName, properties, user.username, value])

  const currentFieldValue = useWatch({
    control: form.control,
    name: fieldName,
  })

  return { avatarSrc, currentFieldValue }
}

export default useAvatarItem
