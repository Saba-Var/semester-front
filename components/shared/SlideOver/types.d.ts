import { SetState } from 'types'

export type SlideOverProps = {
  setOpen: SetState<boolean>
  showSubmitButton?: boolean
  submitHandler?: () => void
  openFromLeft?: boolean
  children: JSX.Element
  onClose?: () => void
  disabled?: boolean
  title: string
  open: boolean
}
