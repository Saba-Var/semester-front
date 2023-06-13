import { SetState } from 'types'

export type EditSemesterFormModalProps = {
  setShowSemesterEditModal: SetState<boolean>
  showSemesterEditModal: boolean
  startDate: string
  name: string
  id: string
}
