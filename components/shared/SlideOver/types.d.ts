import { SetState } from 'types'

export type SlideOverProps = {
  setOpen: SetState<boolean>
  children: JSX.Element
  onClose?: () => void
  title: string
  open: boolean
}
