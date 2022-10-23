import { QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AppPropsType } from 'types'
import { useApp } from 'hooks'
import '../styles/globals.css'
import { store } from 'store'

const MyApp = ({ Component, pageProps }: AppProps<AppPropsType>) => {
  const { queryClient } = useApp()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default appWithTranslation(MyApp as any)
