import { QueryClientProvider, QueryClient, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { AppPropsType } from 'types'
import { useState } from 'react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps<AppPropsType>) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp as any)
