import type { Meta, StoryObj } from '@storybook/react'
import { AvatarImage } from 'components'

const meta: Meta<typeof AvatarImage> = {
  component: AvatarImage,
  title: 'Core/AvatarImage',
  args: {
    src: 'https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Tigger',
  },
  argTypes: {
    src: {
      description:
        'Uri or dicebear seed for the avatar image or base64 encoded image. If the image is loading or not loaded, the blurred image will be shown instead.',
    },
    sharedClassName: {
      description: 'Shared classes for blurred and non-blurred images',
    },
    avatarClassName: {
      description: 'Classes for the avatar image',
    },
    blurClassName: {
      description: 'Classes for the blurred image',
    },
    containerClassName: {
      description: 'Classes for the container',
    },
  },
}

export default meta

type Story = StoryObj<typeof AvatarImage>

export const Basic: Story = {}

export const Blurred: Story = {
  args: {
    src: '',
  },
}
