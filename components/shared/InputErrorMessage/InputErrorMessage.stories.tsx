import type { Meta, StoryObj } from '@storybook/react'
import { InputErrorMessage } from 'components'
import { FieldError } from 'react-hook-form'

const meta: Meta<typeof InputErrorMessage> = {
  component: InputErrorMessage,
  title: 'Core/InputErrorMessage',
  args: {
    errorMessage: {
      message: 'This is an error message' as unknown as FieldError,
    },
  },
  argTypes: {
    errorMessage: {
      description: 'The error message to display',
    },
  },
}

export default meta

type Story = StoryObj<typeof InputErrorMessage>

export const Basic: Story = {}
