import type { Meta, StoryObj } from '@storybook/react'
import { SubmitButton } from 'components'

const meta: Meta<typeof SubmitButton> = {
  component: SubmitButton,
  title: 'Core/SubmitButton',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SubmitButton>

export const Basic: Story = {
  args: {
    title: 'save',
  },
}

export const DisabledAndLoading: Story = {
  args: {
    showLoadingIndicator: true,
    title: 'Disabled',
    disabled: true,
  },
}

export const CustomStyling: Story = {
  args: {
    title: 'Custom Styling',
    styles: 'bg-red-500 text-white rounded-xl w-fit',
  },
}
