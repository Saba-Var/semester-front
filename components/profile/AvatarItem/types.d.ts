import type { User } from 'types'
import { UseFormReturn } from 'react-hook-form'

export type AvatarItemProps = {
  collectionItem: {
    title: string
    collection: any
  }
  form: UseFormReturn<{ style: string }>
  value: string | number
  properties: object
  fieldName: string
  user: User
}
