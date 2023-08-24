import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'components'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Core/Button',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    title: 'Button',
  },
  argTypes: {
    stylesType: {
      description: 'The type of button to render',
    },
    disabled: {
      description: 'Whether the button is disabled',
    },
    fullWidth: {
      description: 'Whether the button should take up the full width',
    },
    styles: {
      description: 'Custom styles to apply to the button',
    },
    title: {
      description: 'The title of the button',
    },
    onClick: {
      description: 'The click handler for the button',
    },
    children: {
      description: 'The children of the button',
    },
    showLoadingIndicator: {
      description:
        'Whether to show the loading indicator. Default is false. If it is true and also the button is disabled the loader will be shown.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    onClick: () => alert('Primary button clicked'),
  },
}

export const Soft: Story = {
  args: {
    stylesType: 'soft-btn',
    onClick: () => alert('Soft button clicked'),
  },
}

export const Secondary: Story = {
  args: {
    stylesType: 'secondary-btn',
    onClick: () => alert('Secondary button clicked'),
  },
}

export const Danger: Story = {
  args: {
    stylesType: 'danger-btn',
    onClick: () => alert('Danger button clicked'),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledAndLoading: Story = {
  args: {
    disabled: true,
    showLoadingIndicator: true,
  },
}

export const CustomStyling: Story = {
  args: {
    title: 'Custom Styling',
    styles: 'bg-red-500 hover:bg-green',
    fullWidth: true,
    onClick: () => alert('Custom styling button clicked'),
  },
}

export const Children: Story = {
  args: {
    stylesType: 'secondary-btn',
    title: '',
    styles: 'py-12 w-24',
    children: (
      <div className='flex flex-col'>
        <p>Button</p>
        <p>with</p>
        <p>children</p>
      </div>
    ),
    onClick: () => alert('Button with children clicked'),
  },
}
