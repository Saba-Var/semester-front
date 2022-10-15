import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, SignUpForm } from 'components'
import { GetStaticProps } from 'next'

const SignUp = () => {
  return (
    <AuthWrapper page='sign-up'>
      <>
        <SignUpForm />
      </>
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
        'home',
      ])),
    },
  }
}
