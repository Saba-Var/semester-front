import { SetState } from 'types'

export type DeleteButtonAndModalProps = {
  setOpen: SetState<boolean>
  submitHandler: () => void
  targetName: string
  disabled?: boolean
  classes?: string
  height?: number
  width?: number
  title: string
  open: boolean
}
