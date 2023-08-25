import { SetState } from 'types'

export type DeleteButtonAndModalProps = {
  setOpen: SetState<boolean> | ((open: boolean) => void)
  withTrashIconOpener?: boolean
  submitHandler: () => void
  trashIconHeight?: number
  trashIconWidth?: number
  targetName: string
  disabled?: boolean
  classes?: string
  title: string
  open: boolean
}
