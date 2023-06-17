import { SetState } from 'types'

export type SlideOverProps = {
  setOpen: SetState<boolean>
  submitHandler?: () => void
  children: JSX.Element
  onClose?: () => void
  openLeft?: boolean
  title: string
  open: boolean
}
