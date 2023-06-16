import { QueryClientProvider, Hydrate } from 'react-query'
import { ErrorBoundary, ToastContainer } from 'components'
import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation } from 'next-i18next'
import { AppPropsWithLayout } from 'types'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { useApp } from 'hooks'
import 'styles/globals.css'
import { store } from 'store'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { queryClient } = useApp()

  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ToastContainer />
            {getLayout(<Component {...pageProps} />)}
            <ReactQueryDevtools />
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default appWithTranslation(MyApp as any)
