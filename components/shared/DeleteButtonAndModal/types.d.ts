import { SetState } from 'types'

export type DeleteButtonAndModalProps = {
  setOpen: SetState<boolean>
  submitHandler: () => void
  buttonClasses?: string
  targetName: string
  disabled?: boolean
  title: string
  open: boolean
}
