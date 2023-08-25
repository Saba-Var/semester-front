import { QueryAndReduxProvider } from '../components'
import type { Preview } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import '../styles/globals.css'
import i18n from './i18n'
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
  },
  decorators: [
    (Story) => {
      return (
        <QueryAndReduxProvider>
          <I18nextProvider i18n={i18n}>
            <Story />
          </I18nextProvider>
        </QueryAndReduxProvider>
      )
    },
  ],
}

export default preview
