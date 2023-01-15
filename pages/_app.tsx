import { QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation } from 'next-i18next'
import { AppPropsWithLayout } from 'types'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { useApp } from 'hooks'
import '../styles/globals.css'
import { store } from 'store'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { queryClient, isHydrated } = useApp()

  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {isHydrated && getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default appWithTranslation(MyApp as any)
