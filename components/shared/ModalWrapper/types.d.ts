import { SetState } from 'types'

export type ModalWrapperProps = {
  type?: 'danger' | 'normal'
  setOpen: SetState<boolean>
  submitHandler: () => void
  closeHandler?: () => void
  children: JSX.Element
  submitText?: string
  disabled?: boolean
  title: string
  open: boolean
}
