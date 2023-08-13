import { UseFormReturn, useWatch } from 'react-hook-form'
import { createAvatar } from '@dicebear/core'
import { useMemo } from 'react'
import { User } from 'types'

const useAvatarItem = (
  collectionItem: { title: string; collection: string },
  user: User,
  name: string,
  form: UseFormReturn<{ style: string }>,
  properties: object
) => {
  const avatarSrc: string = useMemo(() => {
    return createAvatar(collectionItem.collection as any, {
      size: 128,
      seed: user.username,
      ...properties,
    }).toDataUriSync()
  }, [collectionItem.collection, properties, user.username])

  const currentFieldValue = useWatch({
    control: form.control,
    name: name,
  })

  return { avatarSrc, currentFieldValue }
}

export default useAvatarItem
