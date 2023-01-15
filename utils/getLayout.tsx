import { SidebarLayout } from 'components'

export const getLayout = (page: JSX.Element) => {
  return <SidebarLayout>{page}</SidebarLayout>
}
