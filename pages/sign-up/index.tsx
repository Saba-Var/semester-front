import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, GoogleButton, SignUpForm } from 'components'
import { GetStaticProps } from 'next'

const SignUp = () => {
  return (
    <AuthWrapper page='sign-up'>
      <>
        <SignUpForm />
        <GoogleButton page='sign-up' />
      </>
    </AuthWrapper>
  )
}

export default SignUp

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['auth', 'common', 'home'])),
    },
  }
}
