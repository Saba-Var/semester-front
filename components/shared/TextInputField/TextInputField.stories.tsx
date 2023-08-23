import { TextInputField, StoryInputTemplate } from 'components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextInputField> = {
  component: TextInputField,
  title: 'Core/TextInputField',
  tags: ['autodocs'],
  render: (args) => (
    <StoryInputTemplate>
      <TextInputField {...args} />
    </StoryInputTemplate>
  ),
  args: {
    name: 'John Doe',
  },
}

export default meta

type Story = StoryObj<typeof TextInputField>

export const Text: Story = {}

export const Optional: Story = {
  args: { required: false, placeholder: 'Optional' },
}

export const Password: Story = {
  args: { type: 'password' },
}

export const PasswordWithoutIcon: Story = {
  args: { type: 'password', showEyeIcon: false },
}

export const CustomLabel: Story = {
  args: {
    labelClasses: 'text-yellow-500 font-bold !text-2xl',
    placeholder: 'enter username',
    label: 'Username',
  },
}

export const Valid: Story = {
  args: { placeholder: 'Type something' },
}

export const Error: Story = {
  render: (args) => (
    <StoryInputTemplate generateError inputName={args.name}>
      <TextInputField {...args} />
    </StoryInputTemplate>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}
