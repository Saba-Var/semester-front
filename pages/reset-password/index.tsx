import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, NewPasswordForm } from 'components'
import { GetStaticProps } from 'next'

const ResetPassword = () => {
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
