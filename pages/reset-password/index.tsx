import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, NewPasswordForm } from 'components'
import { GetStaticProps, NextPage } from 'next'

const ResetPassword: NextPage = () => {
  return (
    <AuthWrapper page='reset-password'>
      <NewPasswordForm />
    </AuthWrapper>
  )
}

export default ResetPassword

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'inputs',
        'reset',
        'auth',
      ])),
    },
  }
}
