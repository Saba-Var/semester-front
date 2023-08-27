import type { Meta, StoryObj } from '@storybook/react'
import { AuthQuestion } from 'components'

const meta: Meta<typeof AuthQuestion> = {
  component: AuthQuestion,
  title: 'Core/AuthQuestion',
  args: {
    type: 'create-account',
  },
  argTypes: {
    type: {
      description: 'Type of the question of auth forms',
    },
  },
}

export default meta

type Story = StoryObj<typeof AuthQuestion>

export const AuthQuestionStory: Story = {}
