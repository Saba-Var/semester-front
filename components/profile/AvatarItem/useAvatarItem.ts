import { createAvatar } from '@dicebear/core'
import { useMemo } from 'react'
import { User } from 'types'

const useAvatarItem = (
  collectionItem: { title: string; collection: string },
  user: User
) => {
  const avatarSrc: string = useMemo(() => {
    return createAvatar(collectionItem.collection as any, {
      size: 128,
      seed: user.username,
    }).toDataUriSync()
  }, [collectionItem.collection, user.username])

  return { avatarSrc }
}

export default useAvatarItem
