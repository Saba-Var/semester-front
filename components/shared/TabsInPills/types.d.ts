import { SetState } from 'types'

export type TabsInPillsProps = {
  setActiveTab: SetState<(() => never) | string>
  activeTab: (() => string | never) | string
  tabs: string[]
}
