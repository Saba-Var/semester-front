import { TextInputField, StoryInputTemplate } from 'components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextInputField> = {
  component: TextInputField,
  title: 'Core/TextInputField',
  tags: ['autodocs'],
  args: {
    name: 'username',
    placeholder: 'Enter your name',
    label: 'Username',
  },
  argTypes: {
    name: {
      description:
        'The name of the input field. This is used to register the field inside the form with react-hook-form',
    },
    showEyeIcon: {
      description:
        "If the type is 'password', this will show the eye icon to toggle the password visibility",
    },
    placeholder: {
      description: 'The placeholder of the input field',
    },
    label: {
      description: 'The label of the input field',
    },
    labelClasses: {
      description: 'The classes to apply to the label',
    },
    showValidation: {
      description: 'Whether to show the validation for the input field',
    },
    isValidField: {
      description:
        "Set this to true in order to show the input field as 'valid'. Warning: This will not validate the field. It will only show the input field as valid. Use this only when you want to show the input field as valid without validating it.",
    },
    autoComplete: {
      description: 'The autocomplete attribute of the input field',
    },
    disabled: {
      description: 'Whether the input field is disabled',
    },
    required: {
      description: 'Whether the input field is required',
    },
    type: {
      description: 'The type of the input field: text or password.',
    },
  },
  render: (args) => (
    <StoryInputTemplate>
      <TextInputField {...args} />
    </StoryInputTemplate>
  ),
}

export default meta

type Story = StoryObj<typeof TextInputField>

export const Text: Story = {}

export const Optional: Story = {
  args: { required: false },
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
  },
}

export const Valid: Story = {
  args: { isValidField: true },
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
