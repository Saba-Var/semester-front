import { QueryClientProvider, QueryClient } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'store'

const QueryAndReduxProvider = ({ children }: { children: JSX.Element }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  })

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  )
}

export default QueryAndReduxProvider
