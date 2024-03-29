import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, SignUpForm } from 'components'
import { GetStaticProps, NextPage } from 'next'

const SignUp: NextPage = () => {
  return (
    <AuthWrapper page='create-account'>
      <SignUpForm />
    </AuthWrapper>
  )
}

export default SignUp

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'inputs',
        'common',
        'auth',
        'overview',
      ])),
    },
  }
}
