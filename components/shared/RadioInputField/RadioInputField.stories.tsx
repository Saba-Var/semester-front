import { RadioInputField, StoryFormTemplate } from 'components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RadioInputField> = {
  component: RadioInputField,
  title: 'Core/RadioInputField',
  tags: ['autodocs'],
  args: {
    name: 'radio',
    title: 'Choose subject',
    dataList: [
      { title: 'Math', value: 'math' },
      { title: 'History', value: 'History' },
    ],
  },
  argTypes: {
    dataList: {
      description: 'List of radio buttons',
    },
    disabled: {
      description: 'Disable all radio buttons',
    },
    required: {
      description: 'Make radio buttons required',
    },
    name: {
      description:
        'Name of radio buttons which will be used in form to register',
    },
    title: {
      description: 'Title of radio buttons',
    },
  },
  decorators: [
    (Story, { args: { name } }) => (
      <StoryFormTemplate inputName={name}>
        <Story />
      </StoryFormTemplate>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof RadioInputField>

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
      <StoryFormTemplate inputName={name} generateError>
        <Story />
      </StoryFormTemplate>
    ),
  ],
}
