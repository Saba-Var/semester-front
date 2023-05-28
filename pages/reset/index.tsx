import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, ResetPasswordRequest } from 'components'
import { GetStaticProps, NextPage } from 'next'

const RequestEmail: NextPage = () => {
  return (
    <AuthWrapper page='reset'>
      <ResetPasswordRequest />
    </AuthWrapper>
  )
}

export default RequestEmail

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'inputs',
        'common',
        'reset',
        'auth',
      ])),
    },
  }
}
