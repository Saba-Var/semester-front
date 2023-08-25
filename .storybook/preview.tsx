import { QueryAndReduxProvider } from '../components'
import type { Preview } from '@storybook/react'
import '../styles/globals.css'
import React from 'react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <QueryAndReduxProvider>
        <Story />
      </QueryAndReduxProvider>
    ),
  ],
}

export default preview
