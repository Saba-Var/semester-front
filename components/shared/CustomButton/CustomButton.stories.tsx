import type { Meta, StoryObj } from '@storybook/react'
import { CustomButton, LoadingIcon } from 'components'

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  title: 'Buttons/CustomButton',
  tags: ['autodocs'],
  argTypes: {
    stylesType: {
      description: 'The type of button to render',
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomButton>

export const Primary: Story = {
  args: {
    title: 'Primary',
    onClick: () => alert('Primary button clicked'),
  },
}

export const Soft: Story = {
  args: {
    stylesType: 'soft-btn',
    title: 'Soft',
    onClick: () => alert('Soft button clicked'),
  },
}

export const Secondary: Story = {
  args: {
    stylesType: 'secondary-btn',
    title: 'Secondary',
    onClick: () => alert('Secondary button clicked'),
  },
}

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    disabled: true,
  },
}

export const CustomStyling: Story = {
  args: {
    title: 'Custom Styling',
    styles: 'bg-red-500 hover:bg-green',
    fullWidth: true,
  },
}

export const Children: Story = {
  args: {
    stylesType: 'secondary-btn',
    children: (
      <div className='flex items-center'>
        <p>Loading</p>
        <LoadingIcon styles='w-4 h-4' />
      </div>
    ),
  },
}
