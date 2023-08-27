import { SetState } from 'types'

export type ErrorModalProps = {
  setShowModal: SetState<boolean> | ((show: boolean) => void)
  clickHandler?: () => void
  description: string
  actionText?: string
  showModal: boolean
  title: string
}
