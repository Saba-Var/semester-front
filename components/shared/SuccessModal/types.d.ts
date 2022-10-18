import { SetState } from 'types'

export type SuccessModalProps = {
  setSignUpSuccess: SetState<boolean>
  closeWithOverlay?: boolean
  signUpSuccess: boolean
}
