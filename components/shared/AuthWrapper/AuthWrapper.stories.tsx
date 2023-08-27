import type { Meta, StoryObj } from '@storybook/react'
import { AuthWrapper } from 'components'

const meta: Meta<typeof AuthWrapper> = {
  component: AuthWrapper,
  title: 'Core/AuthWrapper',
  args: {
    page: 'log-in-to',
    children: <div className='text-center'>Form</div>,
  },
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    page: {
      description: 'Define the page layout',
    },
  },
}

export default meta

type Story = StoryObj<typeof AuthWrapper>

export const AuthWrapperStory: Story = {}
