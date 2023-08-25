import type { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { SlideOver, Button } from 'components'
import { SlideOverProps } from './types'

export const Basic: StoryFn<typeof SlideOver> = () => {
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
        submitHandler={() => setOpen(false)}
        onClose={() => setOpen(false)}
        titleColor={args.titleColor}
        title='Basic Slide Over'
        open={args.open}
      >
        <div>Content</div>
      </SlideOver>
    </>
  )
}

export const OpenLeft: StoryFn<typeof SlideOver> = () => {
  const [args, updateArgs] = useArgs<SlideOverProps>()

  const setOpen = (open: boolean) => {
    updateArgs({
      ...args,
      open,
    })
  }

  return (
    <>
      <Button
        onClick={() => {
          updateArgs({
            ...args,
            open: true,
          })
        }}
        title='Open slide over'
      />
      <SlideOver
        submitHandler={() => setOpen(false)}
        onClose={() => setOpen(false)}
        titleColor={args.titleColor}
        title='Basic Slide Over'
        openFromLeft={true}
        open={args.open}
      >
        <div>Content</div>
      </SlideOver>
    </>
  )
}

export const ReadOnly: StoryFn<typeof SlideOver> = () => {
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
        onClose={() => setOpen(false)}
        title='Read Only Slide Over'
        titleColor={args.titleColor}
        showSubmitButton={false}
        open={args.open}
        disabled={true}
      >
        <div>Content</div>
      </SlideOver>
    </>
  )
}

const meta: Meta<typeof SlideOver> = {
  title: 'Core/SlideOver',
  args: {
    titleColor: 'text-white',
    openFromLeft: false,
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
  },
}

export default meta
