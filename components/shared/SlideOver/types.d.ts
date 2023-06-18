import { SetState } from 'types'

export type SlideOverProps = {
  setOpen: SetState<boolean>
  showSubmitButton?: boolean
  submitHandler?: () => void
  children: JSX.Element
  onClose?: () => void
  openLeft?: boolean
  disabled?: boolean
  title: string
  open: boolean
}
