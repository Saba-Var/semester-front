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

        <div className='flex gap-5 h-screen items-center justify-center'>
          <Button
            onClick={() => emitToast('Error toast', 'error')}
            title='Error toast'
          />

          <Button
            onClick={() => emitToast('Success toast', 'success')}
            stylesType='danger-btn'
            title='Success toast'
          />
        </div>
      </>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ToastContainer>

export const ToastContainerStory: Story = {}
