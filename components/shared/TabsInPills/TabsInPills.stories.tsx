import type { Meta, StoryFn } from '@storybook/react'
import { ErrorModal, TabsInPills } from 'components'
import { useArgs } from '@storybook/client-api'
import { TabsInPillsProps } from './types'
import { SetState } from 'types'

const meta: Meta<typeof TabsInPills> = {
  component: TabsInPills,
  title: 'Core/TabsInPills',
  args: {
    tabs: ['eyes', 'glasses', 'beard', 'head'],
    translationLocation: 'profile',
  },
  argTypes: {
    activeTab: {
      control: 'text',
    },
    tabs: {
      control: 'array',
    },
    translationLocation: {
      description: 'Namespace of the translation file',
      control: 'text',
    },
  },
}

export default meta

export const TabsInPillsStory: StoryFn<typeof ErrorModal> = () => {
  const [args, updateArgs] = useArgs<TabsInPillsProps>()

  const setActive = (active: string) => {
    updateArgs({
      ...args,
      activeTab: active,
    })
  }

  return (
    <>
      <TabsInPills {...args} setActiveTab={setActive as SetState<string>} />
    </>
  )
}
