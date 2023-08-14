import type { SetState, AvatarProperties } from 'types'

export type TabsInPillsProps = {
  setActiveTab: SetState<keyof AvatarProperties> | SetState<string>
  translationLocation: string
  activeTab: string
  tabs: string[]
}
