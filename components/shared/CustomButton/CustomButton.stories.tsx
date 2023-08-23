import type { Meta, StoryObj } from '@storybook/react'
import { CustomButton } from 'components'

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    stylesType: {
      description: 'The type of button to render',
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomButton>

export const SoftButton: Story = {
  args: {
    stylesType: 'soft-btn',
    title: "I'm a soft button",
  },
}
