import { QueryAndReduxProvider } from '../components'
import type { Preview } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import React, { Suspense } from 'react'
import '../styles/globals.css'
import i18n from './i18n'

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
        <I18nextProvider i18n={i18n}>
          <div className='flex justify-center'>
            <Story />
          </div>
        </I18nextProvider>
      </QueryAndReduxProvider>
    ),
  ],
}

export default preview
