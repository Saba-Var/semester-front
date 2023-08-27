import type { Meta, StoryObj } from '@storybook/react'
import { LottieAnimation } from 'components'
import { partyPop } from 'public'

const meta: Meta<typeof LottieAnimation> = {
  component: LottieAnimation,
  title: 'Core/LottieAnimation',
  args: {
    animationData: partyPop,
  },
  argTypes: {
    animationData: {
      description: 'The animation data (Lottie json) to display',
    },
    disableLoop: {
      description: 'Disable the animation loop',
    },
    style: {
      description: 'Style object to apply to the animation',
      defaultValue: {},
    },
  },
}

export default meta

type Story = StoryObj<typeof LottieAnimation>

export const Basic: Story = {}

export const DisabledLoop: Story = {
  args: {
    disableLoop: true,
  },
}

export const CustomStyling: Story = {
  args: {
    style: {
      height: '20rem',
      width: '20rem',
      borderRadius: '100%',
      backgroundColor: 'blue',
    },
  },
}
