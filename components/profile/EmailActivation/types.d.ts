import type { ProfileFormValues } from 'types'
import { UseFormReturn } from 'react-hook-form'

export type ProfileForm = UseFormReturn<ProfileFormValues>

export type EmailActivationProps = {
  profileForm: UseFormReturn<ProfileFormValues>
}
