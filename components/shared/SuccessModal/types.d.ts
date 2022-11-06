import { SetState } from 'types'

export type SuccessModalProps = {
  setSuccess: SetState<boolean>
  closeWithOverlay?: boolean
  clickHandler?: () => void
  linkAction?: boolean
  description: string
  actionText: string
  isSuccess: boolean
  title: string
}
