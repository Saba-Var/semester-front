import { SetState } from 'types'

export type ModalWrapperProps = {
  setOpen: SetState<boolean>
  submitHandler: () => void
  closeHandler?: () => void
  children: JSX.Element
  submitText?: string
  title: string
  open: boolean
}
