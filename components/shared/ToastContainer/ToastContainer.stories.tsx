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
          onClick={() => emitToast('Error toast', 'error')}
          title='Error toast'
        />

        <Button
          onClick={() => emitToast('Success toast', 'success')}
          title='Success toast'
        />
      </>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ToastContainer>

export const Success: Story = {}
