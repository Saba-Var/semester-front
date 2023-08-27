import type { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { SlideOver, Button } from 'components'
import { SlideOverProps } from './types'

const meta: Meta<typeof SlideOver> = {
  component: SlideOver,
  title: 'Core/SlideOver',
  args: {
    titleColor: 'text-white',
    title: 'Slide over title',
    open: false,
  },
  argTypes: {
    titleColor: {
      description: 'Color of the title',
      control: 'text',
    },
    open: {
      description: 'Whether the slide over is open or not',
      control: {
        type: 'boolean',
      },
    },
    addExtraSpace: {
      description:
        'Whether to add extra space to the slide over. Useful for when the slide over is used with a sidebar. Works if slide over is open from the left',
      control: 'boolean',
    },
    openFromLeft: {
      description: 'Whether the slide over should open from the left',
      control: 'boolean',
    },
    headerColor: {
      description:
        'Color of the header. Note: not tailwind colors class names. Used to style inline',
      control: 'text',
    },
    disabled: {
      description: 'Whether the slide over submit button is disabled',
      control: 'boolean',
    },
    showSubmitButton: {
      description: 'Whether to show the submit button',
      control: 'boolean',
    },
    title: {
      description: 'Title of the slide over',
      control: 'text',
    },
    submitHandler: {
      description: 'Function to run when the submit button is clicked',
    },
    onClose: {
      description: 'Setter function to close the slide over',
    },
  },
}

export default meta

export const SlideOverStory: StoryFn<typeof SlideOver> = () => {
  const [args, updateArgs] = useArgs<SlideOverProps>()

  const setOpen = (open: boolean) => {
    updateArgs({
      ...args,
      open,
    })
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} title='Open slide over' />
      <SlideOver
        {...args}
        submitHandler={() => setOpen(false)}
        onClose={() => setOpen(false)}
        titleColor={args.titleColor}
        open={args.open}
      >
        <div>Content</div>
      </SlideOver>
    </>
  )
}
