import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, ResetPasswordRequest } from 'components'
import { GetStaticProps } from 'next'

const RequestEmail = () => {
  return (
    <AuthWrapper page='reset'>
      <>
        <ResetPasswordRequest />
      </>
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