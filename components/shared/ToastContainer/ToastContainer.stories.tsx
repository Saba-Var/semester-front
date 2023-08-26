import type { Meta, StoryObj } from '@storybook/react'
import { ToastContainer, Button } from 'components'
import { emitToast } from 'utils'

const meta: Meta<typeof ToastContainer> = {
  title: 'Core/ToastContainer',
  component: ToastContainer,
  decorators: [
    (Story) => (
      <>
        <Story />

        <Button
          onClick={() => emitToast('Toast message', 'success')}
          title='Show toast'
        />
      </>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ToastContainer>

export const Success: Story = {}
