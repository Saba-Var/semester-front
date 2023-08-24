import { DatepickerInputField, StoryFormTemplate } from 'components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DatepickerInputField> = {
  component: DatepickerInputField,
  title: 'Core/DatepickerInputField',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    name: {
      description:
        'The name of the input field. This is used to register the field inside the form with react-hook-form',
    },
    displayFormat: {
      description: 'The format of the date to display in the input field',
    },
    numberOfMonths: {
      description: 'The number of months to display in the calendar',
    },
    label: {
      description: 'The label of the input field',
    },
    placeholder: {
      description: 'The placeholder of the input field',
    },
    required: {
      description: 'Whether the input field is required or not',
    },
    disabled: {
      description: 'Whether the input field is read only or not',
    },
  },
  args: {
    placeholder: 'Enter date',
    name: 'date',
    label: 'Date',
  },
  decorators: [
    (Story, { args: { name } }) => (
      <StoryFormTemplate inputName={name}>
        <div className='h-96'>
          <Story />
        </div>
      </StoryFormTemplate>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof DatepickerInputField>

export const Basic: Story = {}

/** MM/DD/YYYY - Month/Day/Year */
export const DisplayFormat: Story = {
  args: {
    displayFormat: 'MM/DD/YYYY',
  },
}

export const MultipleMonths: Story = {
  args: {
    numberOfMonths: 2,
  },
}

export const Error: Story = {
  decorators: [
    (Story, { args: { name } }) => (
      <StoryFormTemplate generateError inputName={name}>
        <div className='h-96'>
          <Story />
        </div>
      </StoryFormTemplate>
    ),
  ],
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  decorators: [
    (Story, { args: { name } }) => (
      <StoryFormTemplate customValue='02/08/2023' inputName={name}>
        <div className='h-96'>
          <Story />
        </div>
      </StoryFormTemplate>
    ),
  ],
}
