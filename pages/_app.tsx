import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation } from 'next-i18next'
import { AppPropsWithLayout } from 'types'
import type { ReactNode } from 'react'
import { Hydrate } from 'react-query'
import { useApp } from 'hooks'
import 'styles/globals.css'
import {
  QueryAndReduxProvider,
  ToastContainer,
  ErrorBoundary,
} from 'components'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  useApp()

  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ErrorBoundary>
      <QueryAndReduxProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <ToastContainer />
          {getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools />
        </Hydrate>
      </QueryAndReduxProvider>
    </ErrorBoundary>
  )
}

export default appWithTranslation(MyApp as any)
