import { SetState } from 'types'

export type TabsInPillsProps = {
  setActiveTab: SetState<string>
  translationLocation: string
  activeTab: string
  tabs: string[]
}
