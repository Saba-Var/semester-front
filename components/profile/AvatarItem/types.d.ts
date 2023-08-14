import type { AvatarProperties, User } from 'types'
import { UseFormReturn } from 'react-hook-form'
import { Style } from '@dicebear/core'

export type AvatarItemProps = {
  collectionItem: {
    title: string
    collection: Style<any>
  }
  form: UseFormReturn<AvatarProperties>
  fieldName: keyof AvatarProperties
  value: string | number
  properties: object
  user: User
}
