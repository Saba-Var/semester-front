import type { Meta, StoryFn } from '@storybook/react'
import { DeleteButtonAndModalProps } from './types'
import { useArgs } from '@storybook/client-api'
import { DeleteModal } from 'components'

const meta: Meta<typeof DeleteModal> = {
  component: DeleteModal,
  title: 'Core/DeleteModal',
  args: {
    withTrashIconOpener: true,
    title: 'Delete Modal',
    open: false,
  },
  argTypes: {
    disabled: {
      description: 'Disable the submit button',
      control: 'boolean',
    },
    submitHandler: {
      description: 'Function to be called when the submit button is clicked',
      control: 'null',
    },
    setOpen: {
      description: 'Setter function for the open state',
      control: 'boolean',
    },
    targetName: {
      description: 'Name of the target to be deleted',
      control: 'text',
    },
    title: {
      description: 'Title of the modal',
      control: 'text',
    },
    classes: {
      description: 'Classes to be applied to the trash icon container',
      control: 'text',
    },
    open: {
      description: 'Open state of the modal',
      control: {
        type: 'boolean',
      },
    },
    trashIconHeight: {
      control: 'number',
    },
    trashIconWidth: {
      control: 'number',
    },
    withTrashIconOpener: {
      description: 'Whether to show the trash icon opener',
      control: 'boolean',
    },
  },
}

export default meta

export const DeleteModalStory: StoryFn<typeof DeleteModal> = () => {
  const [args, updateArgs] = useArgs<DeleteButtonAndModalProps>()

  const setOpen = (open: boolean) => {
    updateArgs({
      ...args,
      open,
    })
  }

  return (
    <DeleteModal
      {...args}
      submitHandler={() => setOpen(false)}
      targetName='Test target name'
      withTrashIconOpener
      title='Delete Modal'
      setOpen={setOpen}
      open={args.open}
    />
  )
}
