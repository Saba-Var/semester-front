import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, LogInForm } from 'components'
import { GetStaticProps, NextPage } from 'next'

const LogIn: NextPage = () => {
  return (
    <AuthWrapper page='log-in-to'>
      <LogInForm />
    </AuthWrapper>
  )
}

export default LogIn

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'auth',
        'common',
        'overview',
        'inputs',
      ])),
    },
  }
}
