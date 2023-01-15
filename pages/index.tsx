import { NextPageWithSidebarLayout } from 'types'
import { SidebarLayout } from 'components'

const Dashboard: NextPageWithSidebarLayout = () => {
  return <>home</>
}

Dashboard.getLayout = function getLayout(page) {
  return <SidebarLayout>{page}</SidebarLayout>
}

export default Dashboard
