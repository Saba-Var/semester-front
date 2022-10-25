import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, LogInForm } from 'components'
import { GetStaticProps } from 'next'

const LogIn = () => {
  return (
    <AuthWrapper page='log-in'>
      <>
        <LogInForm />
      </>
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
        'home',
        'inputs',
      ])),
    },
  }
}
