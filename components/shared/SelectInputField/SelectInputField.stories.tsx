import { SelectInputField, StoryFormTemplate } from 'components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SelectInputField> = {
  component: SelectInputField,
  title: 'Core/SelectInputField',
  args: {
    name: 'select',
    title: 'Choose subject',
    optionsList: [
      {
        id: 1,
        title: 'Math',
      },
      {
        id: 2,
        title: 'History',
      },
      {
        id: 3,
        title: 'English',
      },
    ],
  },
  argTypes: {},
  decorators: [
    (Story, { args: { name } }) => (
      <StoryFormTemplate inputName={name}>
        <Story />
      </StoryFormTemplate>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SelectInputField>

export const Basic: Story = {}

export const Optional: Story = {
  args: {
    required: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Error: Story = {
  decorators: [
    (Story, { args: { name } }) => (
      <StoryFormTemplate generateError inputName={name}>
        <Story />
      </StoryFormTemplate>
    ),
  ],
}
