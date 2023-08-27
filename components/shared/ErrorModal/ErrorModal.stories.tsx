import type { Meta, StoryFn } from '@storybook/react'
import { ErrorModal, Button } from 'components'
import { useArgs } from '@storybook/client-api'
import { ErrorModalProps } from './types'

const meta: Meta<typeof ErrorModal> = {
  component: ErrorModal,
  title: 'Core/ErrorModal',
  args: {
    showModal: true,
    actionText: 'Action text',
    title: 'Title',
    description: 'Description',
  },
  argTypes: {
    actionText: {
      description:
        'Title of the action button. Button will be shown if the clickHandler props is provided',
      control: 'text',
    },
    clickHandler: {
      description: 'Function to be called when the action button is clicked',
    },
    description: {
      control: 'text',
    },
    setShowModal: {
      description: 'Function to be called when the modal is closed',
    },
    showModal: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
}

export default meta

export const ErrorModalStory: StoryFn<typeof ErrorModal> = () => {
  const [args, updateArgs] = useArgs<ErrorModalProps>()

  const setOpen = (showModal: boolean) => {
    updateArgs({
      ...args,
      showModal,
    })
  }

  return (
    <>
      <ErrorModal {...args} showModal={args.showModal} setShowModal={setOpen} />

      <Button
        onClick={() => setOpen(true)}
        title='Show error modal'
        stylesType='danger-btn'
      />
    </>
  )
}
