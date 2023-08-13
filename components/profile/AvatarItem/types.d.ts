import type { User } from 'types'
import { UseFormReturn } from 'react-hook-form'

export type AvatarItemProps = {
  collectionItem: {
    title: string
    collection: any
  }
  user: User
  form: UseFormReturn<{ style: string }>
}
